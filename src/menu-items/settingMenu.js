import { BsPerson, BsCreditCard, BsArchive, BsWindow } from 'react-icons/bs';
import { IoRocketOutline } from 'react-icons/io5';

const settingMenu = [
	{ title: 'تنظیمات حساب کاربری', icon: <BsPerson />, pathname: '/user/account' },
	{ title: 'ارتقا حساب کاربری', icon: <IoRocketOutline />, pathname: '/user/upgrade_account' },
	{ title: 'تاریخچه خرید', icon: <BsCreditCard />, pathname: '/user/purchase_history' },
	{ title: 'کمپین ها', icon: <BsArchive />, pathname: '/user/campaign' },
	{ title: 'تنظیمات سایت', icon: <BsWindow />, pathname: '/user/setting' }
];

export default settingMenu;
