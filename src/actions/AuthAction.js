import axios from '../components/common/API';
import decode from 'jwt-decode';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
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
	API_URL_VALIDATE_TOKEN
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

const getTokenStoraged = async () => {
	try {
		const value = await AsyncStorage.getItem('@MV-CASH:token');
		if (value) {
			return value;
		}
		return null;
	} catch (error) {
		console.log(error);
	}
}

const removeToken = async () => {
	try {
		await AsyncStorage.removeItem('@MV-CASH:token');
	} catch (error) {
		console.log(error);
	}
}

export const validateToken = (dispatch, token) => 
{
		axios.get(API_URL_VALIDATE_TOKEN)
			.then((resp) => loginUserSuccess(dispatch, token))
			.catch((error) => {
				errorHandling(error);
				loginUserFail(dispatch, error);
			});
}

export const logout = () => {
	return (dispatch) => {
		removeToken();

		dispatch({ type: LOGOUT })
	}
}

export const userAlreadyLogged = () => {
	return (dispatch) => {

		AsyncStorage.getItem('@MV-CASH:token')
			.then(resp => {			
				const token = resp;
				if (token) 
				{							
					validateToken(dispatch, token);
				}
		});
	};
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => 
	{
		dispatch({ type: LOGIN_IS_LOADING });

		axios.post(API_URL_LOGIN, {},
			{
				auth: { username: email, password: password }
			})
			.then((resp) => loginUserSuccess(dispatch, resp.data))
			.catch((error) => {
				loginUserFail(dispatch, error);
			});
	};
};

const loginUserSuccess = async (dispatch, data) => {
	try {
		console.log('login suycces')
		await AsyncStorage.setItem('@MV-CASH:token', data);
		axios.defaults.headers.common['Authorization'] = `Bearer ${data}`;

	} catch (error) 
	{
		console.log(error);
	}
	const tokenDecoded = decode(data);

	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: data
	});

	dispatch(
		{
			type: SET_CLIENTE_VENDA,
			payload: tokenDecoded
		});

	Actions.main();
};

const loginUserFail = (dispatch, msg) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: msg
	});
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