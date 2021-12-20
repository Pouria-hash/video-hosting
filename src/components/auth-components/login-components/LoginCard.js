import React from 'react';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import google from 'assets/icons/google.png';
import Linkedin from 'assets/icons/Linkedin.png';
import microsoft from 'assets/icons/microsoft.png';

import AuthTextField from 'ui-component/inputs/TextFields/AuthTextField';
import PrimaryLoadingButton from 'ui-component/Buttons/PrimaryLoadingButton';

import OptionCard from 'components/auth-components/OptionCard';

const LoginCard = () => {
	return (
		<Box>
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={Yup.object({
					email: Yup.string().email().required('این قسمت را تکمیل کنید'),
					password: Yup.string().required('این قسمت را تکمیل کنید')
				})}
				onSubmit={(values, { isSubmiting }) => {
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Grid container spacing={1} alignItems="center">
							<Grid item xs={12}>
								<Field
									label="ایمیل"
									type="email"
									name="email"
									id="email"
									error={errors.email && true}
									as={AuthTextField}
									helperText={errors.email && touched.email ? errors.email : ' '}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									label="گذرواژه"
									type="password"
									name="password"
									id="password"
									error={errors.password && true}
									as={AuthTextField}
									helperText={errors.password && touched.password ? errors.password : ' '}
								/>
							</Grid>
							<Grid item xs={12}>
								<Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
									<PrimaryLoadingButton loading={false} type="submit">
										ورود
									</PrimaryLoadingButton>

									<Typography
										variant="caption"
										color="primary.main"
										sx={{
											textDecoration: 'underline',
											textUnderlineOffset: '5px',
											cursor: 'pointer'
										}}
									>
										رمز عبور خود را فراموش کرده اید؟
									</Typography>
								</Stack>
							</Grid>
							<Grid item xs={12} mt={5}>
								<Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
									<OptionCard icon={google} text="حساب گوگل" />
									<OptionCard icon={Linkedin} text="حساب لینکدین" />
									<OptionCard icon={microsoft} text="حساب ماکروسافت" />
								</Stack>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LoginCard;
