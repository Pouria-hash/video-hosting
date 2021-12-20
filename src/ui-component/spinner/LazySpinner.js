import React from 'react';

import styles from 'styles/ui-component/spinner/LazySpinner.module.scss';

const WithSpinner = () => (
	<div className={styles.spinnerOverlay}>
		<div className={styles.spinnerContainer} />
	</div>
);

export default WithSpinner;
