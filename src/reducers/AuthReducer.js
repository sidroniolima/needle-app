import { 
    EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_SUCCESS_FACEBOOK,
	LOGIN_USER_FAIL,
	LOGOUT,
	LOGIN_IS_LOADING,
	CADASTRO_ERROR,
	CADASTRO_OK
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	token: null,
	error: '',
	isLoading: false,
	cadastroError: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type)
	{
		case CADASTRO_ERROR:
		{
			return { ...state, cadastroError: action.payload };
		}
		case CADASTRO_OK:
		{
			return { ...state, user: action.payload };
		}
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
			const { uid, email } = action.payload;
			
			return { ...state, user: {uid, email} };
		}
		case LOGIN_USER_SUCCESS_FACEBOOK:
		{
			const { token, user } = action.payload;
			console.log('LOGIN FACE SUCCESS', token, user);
			return { ...state, token: token, user: user };
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