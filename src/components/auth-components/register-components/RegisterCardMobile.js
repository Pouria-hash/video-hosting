import React, { Fragment } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import google from 'assets/icons/googleLarge.png';
import Linkedin from 'assets/icons/linkedInLarge.png';
import microsoft from 'assets/icons/microsoftLarge.png';

import PrimaryLoadingButton from 'ui-component/Buttons/PrimaryLoadingButton';
import AuthTextFieldOutlined from 'ui-component/inputs/TextFields/AuthTextFieldOutlined';

import AuthCardMobileHeader from '../AuthCardMobileHeader';
import OptionCard from '../OptionCard';

const LoginCardMobile = () => {
	return (
		<Fragment>
			<Grid container alignItems="center" justifyContent="center" mb={2}>
				<Grid item xs={10}>
					<Paper variant="outlined" sx={{ borderColor: 'secondary.main' }}>
						<AuthCardMobileHeader />
						<Box p={2} my={2}>
							<Formik
								initialValues={{
									name: '',
									email: '',
									password: '',
									repeatePassword: ''
								}}
								validationSchema={Yup.object({
									name: Yup.string().required('این قسمت را تکمیل کنید'),
									email: Yup.string().email().required('این قسمت را تکمیل کنید'),
									password: Yup.string()
										.matches(
											/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
											'Invalid password'
										)
										.required('این قسمت را تکمیل کنید'),
									repeatePassword: Yup.string().required('این قسمت را تکمیل کنید')
								})}
								onSubmit={(values, { onReset }) => {
									console.log(values);
									onReset();
								}}
							>
								{({ errors, touched }) => (
									<Form>
										<Grid container spacing={1} alignItems="center">
											<Grid item xs={12}>
												<Field
													placeholder="نام و نام خانوادگی"
													type="text"
													name="name"
													id="name-mobile"
													error={errors.name && touched.name && true}
													as={AuthTextFieldOutlined}
													helperText={errors.name && touched.name ? errors.name : ' '}
												/>
											</Grid>
											<Grid item xs={12}>
												<Field
													placeholder="ایمیل"
													type="email"
													name="email"
													id="email-mobile"
													error={errors.email && touched && true}
													as={AuthTextFieldOutlined}
													helperText={errors.email && touched.email ? errors.email : ' '}
												/>
											</Grid>
											<Grid item xs={12} md={6}>
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
											<Grid item xs={12} md={6}>
												<Field
													placeholder="تکرار گذرواژه"
													type="password"
													name="repeatePassword"
													id="repeatePassword-mobile"
													error={errors.repeatePassword && touched.repeatePassword && true}
													as={AuthTextFieldOutlined}
													helperText={
														errors.repeatePassword && touched.repeatePassword ? (
															errors.repeatePassword
														) : (
															' '
														)
													}
												/>
											</Grid>

											<Grid item xs={12} sx={{ textAlign: 'center' }}>
												<Box my={2}>
													<PrimaryLoadingButton loading={false} type="submit">
														ثبت نام
													</PrimaryLoadingButton>
												</Box>
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
