import { combineReducers } from '@reduxjs/toolkit';

import { userLoginReducer } from './userReducer';
import { customizeReducer } from './customizeReducer';

const reducers = combineReducers({ userLogin: userLoginReducer, customize: customizeReducer });

export default reducers;
