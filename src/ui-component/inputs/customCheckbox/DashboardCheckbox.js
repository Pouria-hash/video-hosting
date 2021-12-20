import Typography from '@mui/material/Typography';

import styles from 'styles/ui-component/inputs/checkbox/DashboardCheckbox.module.scss';

const DashboardCheckbox = ({ label, checked, handleChange, name }) => {
	return (
		<label className={styles.formControl}>
			<input type="checkbox" onChange={handleChange} name={name} checked={checked} />
			<Typography
				variant="body2"
				color="primary.main"
				sx={{ ml: 1, textDecoration: 'underline', textUnderlineOffset: '5px' }}
			>
				{label}
			</Typography>
		</label>
	);
};

export default DashboardCheckbox;
