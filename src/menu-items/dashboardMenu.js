import {
	BsWindow,
	BsCircle,
	BsHeadset,
	BsCoin,
	BsPerson,
	BsFileEarmarkText,
	BsPlusLg,
	BsPencil,
	BsJournalText,
	BsClipboardPlus
} from 'react-icons/bs';
import { AiOutlineHome, AiTwotoneSetting } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { IoRocketOutline } from 'react-icons/io5';
import { FaEmpire, FaRegQuestionCircle } from 'react-icons/fa';

const menuItems = [
	{ icon: <AiOutlineHome />, title: 'پیشخوان', pathName: '/dashboard', action: 'link', divider: true },
	{
		icon: <BsWindow />,
		title: 'سایت ها',
		action: 'nestedList',
		nestedList: true,
		divider: true,
		subList: [
			{ title: 'xankoo.com', icon: <BsCircle />, pathName: '/xankoo.com' },
			{ title: 'افزودن سایت جدید', pathName: '/dashboard/sites/new', icon: <BsPlusLg /> }
		]
	},
	{
		icon: <FaEmpire />,
		title: 'استراتژی سئو',
		pathName: '/dashboard/seo_strategies',
		action: 'link'
	},

	{ icon: <BsPencil />, title: 'سئو محلی', pathName: '/dashboard/seo_local', action: 'link' },

	{ icon: <BsJournalText />, title: 'لینک سازی', pathName: '/dashboard/create_links', action: 'link' },

	{ icon: <BsClipboardPlus />, title: 'مدریت سئو', pathName: '/dashboard/seo_management', action: 'link' },
	{ icon: <BsPerson />, title: 'حساب کاربری', pathName: '/dashboard/user', action: 'link' },
	{ icon: <IoRocketOutline />, title: 'ارتقای حساب کاربری', pathName: '/dashboard/user_management', action: 'link' },
	{ icon: <BsFileEarmarkText />, title: 'مستندات', pathName: '/dashboard/documents', action: 'link' },
	{ icon: <BsHeadset />, title: 'پشتیبانی ترکر', pathName: '/dashboard/support', action: 'link' },
	{ icon: <BsCoin />, title: 'خرید سکه', pathName: '/dashboard/buy_coins', action: 'link' },
	{ icon: <BiCoinStack />, title: 'تاریخچه خرید سکه', pathName: '/dashboard/buy_coins_history', action: 'link' }
];

export const optionItems = [
	{
		icon: <AiTwotoneSetting />,
		title: 'تنظیمات',
		action: 'link',
		pathName: '/dashboard/seller/setting/general'
	},
	{
		icon: <FaRegQuestionCircle />,
		title: 'پشتیبانی',
		pathName: '/dashboard/seller/support',
		action: 'link'
	}
];

export default menuItems;
