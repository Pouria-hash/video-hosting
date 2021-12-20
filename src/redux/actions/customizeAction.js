import customizeConstants from 'redux/constants/customizeConstants';

export const toggleMenuDrawer = () => ({
	type: customizeConstants.HIDE_MENU_DRAWER
});

export const toggleMobileMenuDrawer = () => ({
	type: customizeConstants.HIDE_MOBILE_DASHBOARD_MENU_DRAWER
});
export const toggleMobileSettingDrawer = () => ({
	type: customizeConstants.HIDE_MOBILE_DASHBOARD_SETTING_DRAWER
});
export const toggleMobileNotifyDrawer = () => ({
	type: customizeConstants.HIDE_MOBILE_DASHBOARD_NOTIFY_DRAWER
});

export const toggleUserAccountDropDown = (click) => ({
	type: customizeConstants.HIDE_USER_ACCOUNT_DROP_DOWN,
	payload: click
});
