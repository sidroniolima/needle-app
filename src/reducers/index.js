import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionConst } from 'react-native-router-flux';
import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer,
	form: formReducer
});