import customizeConstants from 'redux/constants/customizeConstants';

const initialState = {
	hideMenuDrawer: false,
	hideMobileMenuDrawer: true,
	hideMobileSettingDrawer: true,
	hideMobileNotifyDrawer: true,
	hideUserAccountDropDown: true
};

export const customizeReducer = (state = initialState, action) => {
	switch (action.type) {
		case customizeConstants.HIDE_MENU_DRAWER:
			return { ...state, hideMenuDrawer: !state.hideMenuDrawer };
		case customizeConstants.HIDE_MOBILE_DASHBOARD_MENU_DRAWER:
			return { ...state, hideMobileMenuDrawer: !state.hideMobileMenuDrawer };
		case customizeConstants.HIDE_MOBILE_DASHBOARD_SETTING_DRAWER:
			return { ...state, hideMobileSettingDrawer: !state.hideMobileSettingDrawer };
		case customizeConstants.HIDE_MOBILE_DASHBOARD_NOTIFY_DRAWER:
			return { ...state, hideMobileNotifyDrawer: !state.hideMobileNotifyDrawer };
		case customizeConstants.HIDE_USER_ACCOUNT_DROP_DOWN:
			return { ...state, hideUserAccountDropDown: action.payload };
		default:
			return state;
	}
};
