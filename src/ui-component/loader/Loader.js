import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.module.scss';
const Loader = () => {
	return (
		<div className={styles.spinnerContainer}>
			<CircularProgress className={styles.spinner} />
		</div>
	);
};

export default Loader;
