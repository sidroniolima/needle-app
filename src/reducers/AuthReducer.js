import decode from 'jwt-decode';
import { 
    EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT,
	LOGIN_IS_LOADING
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	token: null,
	error: '',
	isLoading: false
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type)
	{
		case EMAIL_CHANGED:
		{
			return { ...state, email: action.payload };
		}
		case PASSWORD_CHANGED:
		{
			return { ...state, password: action.payload };
		}
		case LOGIN_USER_SUCCESS:
		{
			const tokenDecoded = decode(action.payload);
			state = { ...state, 
				user: tokenDecoded, 
				isLoading: false, 
				token: action.payload,
			 };
			 return state;
		}
		case LOGIN_USER_FAIL:
		{
			return { ...state, error: 'Não foi possível entrar', isLoading: false, user: null, token: null}
		}
		case LOGIN_IS_LOADING:
		{
			return { ...state, isLoading: true }
		}
		case LOGOUT:
		{
			return { ...state, user: null, token: null }
		}
		default :
			return state;
	}
}