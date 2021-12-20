import userConstants from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case userConstants.USER_REGISTER_REQUEST:
			return { ...state, loading: true, error: '' };
		case userConstants.USER_REGISTER_SUCCESS:
			return { ...state, loading: false, message: 'خوش آمدید.' };
		case userConstants.USER_REGISTER_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case userConstants.USER_LOGIN_REQUEST:
			return { ...state, loading: true, error: '' };
		case userConstants.USER_LOGIN_SUCCESS:
			return { ...state, loading: false, userInfo: action.payload };
		case userConstants.USER_LOGIN_FAIL:
			return { ...state, loading: false, error: action.payload, userInfo: '' };

		case userConstants.USER_LOGOUT_REQUEST:
			return { ...state, loading: true };
		case userConstants.USER_LOGOUT_SUCCESS:
			return { loading: false };
		case userConstants.USER_LOGOUT_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userLoginCheckReducer = (state = {}, action) => {
	switch (action.paylaod) {
		case userConstants.USER_LOGIN_CHECK_REQUEST:
			return { ...state, loading: true, error: '' };
		case userConstants.USER_LOGIN_CHECK_SUCCESS:
			return { ...state, loading: false };
		case userConstants.USER_LOGIN_CHECK_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
