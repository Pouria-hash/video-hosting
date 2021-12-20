import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// import styles from 'styles/pages/dashboard-pages/DashboardPage.module.scss';
import DashboardContent from 'components/dashboard-components/DashboardContent';

const DashoardPage = () => {
	// const aside = useRef();
	// const prevScrollY = useRef(0);
	// const {bottom , top , height} = aside.current.get
	// const [ goingUp, setGoingUp ] = useState(false);

	// const handleScroll = () => {
	//     const currentScrollY = window.scrollY;
	//     if (prevScrollY.current < currentScrollY && goingUp) {
	//         setGoingUp(false);
	//     } else if (prevScrollY.current > currentScrollY && !goingUp) {
	//         setGoingUp(true);
	//     } else {
	//         prevScrollY.current = currentScrollY;
	//     }
	//     console.log(goingUp, currentScrollY);
	// };
	//     const [pageUp, setPageUp] = useState(false)
	// const lastScroll = useRef(0)

	//     const checkScrollTop = () => {
	//         const currentScroll = window.pageYOffset
	//         setPageUp(lastScroll.current > currentScroll)
	//         lastScroll.current = currentScroll
	//       }

	//       // lodash throttle function
	//       const throttledFunc = throttle(checkScrollTop, 400, { leading: true })

	// 	useEffect(
	// 		() => {
	// 			window.addEventListener('scroll', () => throttledFunc(), { passive: true });

	// 			return window.removeEventListener('scroll', throttledFunc);
	// 		},
	// 		[ goingUp ]
	// 	);
	return (
		<Box>
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ flexGrow: 1, py: 2 }}>
					<Container maxWidth="xl">
						<DashboardContent />
					</Container>
				</Box>
				<Box
					sx={{
						display: { xs: 'none', md: 'block' },
						minWidth: '300px',
						maxWidth: '300px',
						bgcolor: '#f3f3f3'
					}}
				/>
			</Box>
		</Box>
	);
};

export default DashoardPage;
