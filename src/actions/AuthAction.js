import axios from '../components/common/API';
import decode from 'jwt-decode';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	API_URL_LOGIN,
	SET_CLIENTE_VENDA,
	LOGOUT,
	LOGIN_IS_LOADING,
	API_URL_VALIDATE_TOKEN,
	ERROR_AUTH_EMAIL_JA_UTILIZADO,
	ERROR_AUTH_EMAIL_INVALIDO,
	ERROR_AUTH_USUARIO_INATIVO,
	ERROR_AUTH_SENHA_FRACA,
	CADASTRO_OK,
	CADASTRO_ERROR
} from './types';

export const createUser = (user) => {
	return (dispatch) => {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then( () => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(user.email, user.senha)
					.then((data) => {
						
						dispatch({ type: CADASTRO_OK, payload: data });
						Actions.tabbar({type: 'reset'});
					})
					.catch(function (error) {
						const erroMsg = handleAuthErrors(error.code);
						dispatch({ type: CADASTRO_ERROR, payload: erroMsg });
					})
			})
			.catch(function (error) {
				const erroMsg = handleAuthErrors(error.code);
				dispatch({ type: CADASTRO_ERROR, payload: erroMsg });
			})
	};
}

const handleAuthErrors = (code) => {
	switch (code) {
		case 'auth/email-already-in-use':
			return ERROR_AUTH_EMAIL_JA_UTILIZADO;
		case 'auth/invalid-email':
			return ERROR_AUTH_EMAIL_INVALIDO;
		case 'auth/operation-not-allowed':
			return ERROR_AUTH_USUARIO_INATIVO;
		case 'auth/weak-password':
			return ERROR_AUTH_SENHA_FRACA;
		default:
			return undefined;
	}
}

function writeUserData(userId, nome, empresa, segmento) {
	firebase.database().ref('users/' + userId).set({
		nome: nome,
		empresa: empresa,
		segmento: segmento
	});
}

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ user, password }) => {
	
	return (dispatch) => {
		dispatch({ type: LOGIN_IS_LOADING });

		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then( () => {
				firebase
					.auth()
					.signInWithEmailAndPassword(user, password)
					.then((data) => {

						dispatch({
							type: LOGIN_USER_SUCCESS,
							payload: data
						});

						Actions.tabbar({type: 'reset'});
					})
					.catch((error) => {
						//var errorCode = error.code;
						var errorMessage = error.message;

						dispatch({
							type: LOGIN_USER_FAIL,
							payload: errorMessage
						});
					})
			});
	};
}

export const tryLogin = () => {
	return (dispatch) => {
		
		firebase
			.auth()
			.onAuthStateChanged(function(user) {
				if (user) 
				{
					dispatch({
						type: LOGIN_USER_SUCCESS,
						payload: user
					});
				} else 
				{
					dispatch({
						type: LOGOUT
					});
				}
		})
	};
}

export const logout = () => {
	return (dispatch) => 
	{
		firebase
			.auth()
			.signOut()
			.then(() => 
			{				
				dispatch({
					type: LOGOUT
				});

				Actions.auth({type: 'reset'});
			})
			.catch((error) => 
			{
				//var errorCode = error.code;
				var errorMessage = error.message;

				dispatch({
					type: LOGIN_USER_FAIL,
					payload: errorMessage
				});
			})
	}
}

const errorHandling = (error) => {
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	}
	console.log(error.config);
}