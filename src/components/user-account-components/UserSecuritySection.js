import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FillTextField from 'ui-component/inputs/TextFields/FillTextField';

const UserSecuritySection = () => {
	const [ message, setMessage ] = useState('');

	useEffect(
		() => {
			console.log(message);
		},
		[ message ]
	);
	return (
		<Fragment>
			<Formik
				initialValues={{
					password: '',
					newPassword: '',
					repeatNewPassword: ''
				}}
				validationSchema={Yup.object({
					password: Yup.string().required('این قسمت را تکمیل کنید'),
					newPassword: Yup.string().required('این قسمت را تکمیل کنید'),
					repeatNewPassword: Yup.string().required('این قسمت را تکمیل کنید')
				})}
				onSubmit={(values) => {
					if (values.newPassword === values.repeatNewPassword) {
						console.log(values);
					} else {
						setMessage('پسورد و تکرار پسورد با هم تطابق ندارند.');
					}
				}}
			>
				{({ errors, touched, values }) => (
					<Form>
						<Grid container alignItems="center">
							<Grid item xs={12} md={2}>
								<Typography
									variant="subtitle1"
									color="primary.main"
									sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2 }}
								>
									امنیت حساب
								</Typography>
							</Grid>
							<Grid item container alignItems="center" xs={12} md={9} sx={{ p: 2 }}>
								<Grid
									item
									container
									alignItems="center"
									rowSpacing={2}
									columnSpacing={{ xs: 0, md: 2 }}
								>
									<Grid item xs={12} md={4} sx={{ px: { xs: 3, md: 0 } }}>
										<Field
											label="رمز عبور فعلی:"
											value={values.password}
											name="password"
											as={FillTextField}
											helperText={
												errors.password && touched.password ? (
													<Typography variant="caption" color="error">
														{errors.password}
													</Typography>
												) : (
													' '
												)
											}
										/>
									</Grid>
									<Grid item xs={12} md={4} sx={{ px: { xs: 3, md: 0 } }}>
										<Field
											label="رمز عبور جدید:"
											value={values.newPassword}
											name="newPassword"
											as={FillTextField}
											helperText={
												errors.newPassword && touched.newPassword ? (
													<Typography variant="caption" color="error">
														{errors.newPassword}
													</Typography>
												) : (
													' '
												)
											}
										/>
									</Grid>
									<Grid item xs={12} md={4} sx={{ px: { xs: 3, md: 0 } }}>
										<Field
											label="تکرار رمز عبور:"
											value={values.repeatNewPassword}
											name="repeatNewPassword"
											as={FillTextField}
											helperText={
												errors.repeatNewPassword && touched.repeatNewPassword ? (
													<Typography variant="caption" color="error">
														{errors.repeatNewPassword}
													</Typography>
												) : (
													' '
												)
											}
										/>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Stack
										direction="row"
										spacing={2}
										alignItems="center"
										justifyContent="space-between"
										sx={{ px: { xs: 3, md: 0 } }}
									>
										<Link to="/dashboard/user">
											<Typography
												variant="body2"
												color="primary.main"
												sx={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}
											>
												رمز عبور خود را فراموش کرده اید؟{' '}
											</Typography>
										</Link>

										<Button
											variant="contained"
											type="submit"
											color="secondary"
											sx={{ color: 'white.main' }}
										>
											تغییر رمز
										</Button>
									</Stack>
								</Grid>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
};

export default UserSecuritySection;
