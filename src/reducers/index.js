import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionConst } from 'react-native-router-flux';
import AuthReducer from './AuthReducer';
import FaccaoReducer from './FaccaoReducer';
import DBReducer from './DBReducer';

export default combineReducers({
	auth: AuthReducer,
	faccao: FaccaoReducer,
	form: formReducer,
	db: DBReducer
});