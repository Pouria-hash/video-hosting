import userConstants from '../constants/userConstants';
// import axios from 'axios';

export const loginUserRequest = (userData) => ({
	type: userConstants.USER_LOGIN_REQUEST,
	payload: userData
});
export const loginUserSuccess = (userInfo) => ({
	type: userConstants.USER_LOGIN_SUCCESS,
	payload: userInfo
});
export const loginUserFail = (error) => ({
	type: userConstants.USER_LOGIN_FAIL,
	payload: error
});

// Logout user action
export const logoutUserRequest = () => ({
	type: userConstants.USER_LOGOUT_REQUEST
});
export const logoutUserSuccess = () => ({
	type: userConstants.USER_LOGOUT_SUCCESS
});
export const logoutUserFail = (error) => ({
	type: userConstants.USER_LOGOUT_FAIL,
	payload: error
});

// register user actions
export const registerUserRequest = (userData) => ({
	type: userConstants.USER_REGISTER_REQUEST,
	payload: userData
});
export const registerUserSuccess = (userInfo) => ({
	type: userConstants.USER_REGISTER_SUCCESS,
	payload: userInfo
});
export const registerUserFail = (error) => ({
	type: userConstants.USER_REGISTER_FAIL,
	payload: error
});

//check user login actions
export const checkUserLoginRequest = () => ({
	type: userConstants.USER_LOGIN_CHECK_REQUEST
});
export const checkUserLoginSuccess = () => ({
	type: userConstants.USER_LOGIN_CHECK_SUCCESS
});
export const checkUserLoginFail = (error) => ({
	type: userConstants.USER_LOGIN_CHECK_FAIL,
	payload: error
});
