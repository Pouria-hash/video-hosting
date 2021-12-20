import React, { Fragment, useState } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import google from 'assets/icons/googleLarge.png';
import Linkedin from 'assets/icons/linkedInLarge.png';
import microsoft from 'assets/icons/microsoftLarge.png';

import PrimaryLoadingButton from 'ui-component/Buttons/PrimaryLoadingButton';
import AuthTextFieldOutlined from 'ui-component/inputs/TextFields/AuthTextFieldOutlined';
import DashboardCheckbox from 'ui-component/inputs/customCheckbox/DashboardCheckbox';

import AuthCardMobileHeader from '../AuthCardMobileHeader';
import OptionCard from '../OptionCard';

const LoginCardMobile = () => {
	const [ rememberUser, setRememberUser ] = useState(false);

	return (
		<Fragment>
			<Grid container alignItems="center" justifyContent="center" mb={2}>
				<Grid item xs={10}>
					<Paper variant="outlined" sx={{ borderColor: 'secondary.main' }}>
						<AuthCardMobileHeader />
						<Box p={2} my={2}>
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
													type="email"
													name="email"
													id="email-mobile"
													placeholder="ایمیل"
													error={errors.email && touched.email && true}
													as={AuthTextFieldOutlined}
													helperText={errors.email && touched.email ? errors.email : ' '}
												/>
											</Grid>
											<Grid item xs={12}>
												<Field
													placeholder="گذرواژه"
													type="password"
													name="password"
													id="password-mobile"
													error={errors.password && touched.password && true}
													as={AuthTextFieldOutlined}
													helperText={
														errors.password && touched.password ? errors.password : ' '
													}
												/>
											</Grid>

											<Grid item xs={12} sx={{ textAlign: 'center' }}>
												<DashboardCheckbox
													label="مرا به خاطر بسپار"
													name="rememberUser"
													handleChange={(e) => setRememberUser(e.target.checked)}
													checked={rememberUser}
												/>
											</Grid>

											<Grid item xs={12} sx={{ textAlign: 'center' }}>
												<Box my={2}>
													<PrimaryLoadingButton loading={false} type="submit">
														ورود
													</PrimaryLoadingButton>
												</Box>
											</Grid>
											<Grid item xs={12} sx={{ textAlign: 'center' }}>
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
											</Grid>
										</Grid>
									</Form>
								)}
							</Formik>
						</Box>
					</Paper>

					<Stack
						direction="row"
						spacing={3}
						justifyContent="space-between"
						alignItems="center"
						sx={{ mt: 1 }}
					>
						<OptionCard icon={google} />
						<OptionCard icon={Linkedin} />
						<OptionCard icon={microsoft} />
					</Stack>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default LoginCardMobile;
