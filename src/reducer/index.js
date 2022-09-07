import {combineReducers} from '@reduxjs/toolkit';
// import SettingsReducer from './Settings.reducer';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
