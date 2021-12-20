import React from 'react';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import google from 'assets/icons/google.png';
import Linkedin from 'assets/icons/Linkedin.png';
import microsoft from 'assets/icons/microsoft.png';

import AuthTextField from 'ui-component/inputs/TextFields/AuthTextField';
import PrimaryLoadingButton from 'ui-component/Buttons/PrimaryLoadingButton';

import OptionCard from 'components/auth-components/OptionCard';

const RegisterCard = () => {
	return (
		<Box>
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
						.matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Invalid password')
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
									label="نام و نام خانوادگی"
									type="text"
									name="name"
									id="name"
									error={errors.name && touched.name && true}
									as={AuthTextField}
									helperText={errors.name && touched.name ? errors.name : ' '}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									label="ایمیل"
									type="email"
									name="email"
									id="email"
									error={errors.email && touched && true}
									as={AuthTextField}
									helperText={errors.email && touched.email ? errors.email : ' '}
								/>
							</Grid>
							<Grid item columnSpacing={1} xs={12} container>
								<Grid item xs={12} md={6}>
									<Field
										label="گذرواژه"
										type="password"
										name="password"
										id="password"
										error={errors.password && touched.password && true}
										as={AuthTextField}
										helperText={errors.password && touched.password ? errors.password : ' '}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<Field
										label="تکرار گذرواژه"
										type="password"
										name="repeatePassword"
										id="repeatePassword"
										error={errors.repeatePassword && touched.repeatePassword && true}
										as={AuthTextField}
										helperText={
											errors.repeatePassword && touched.repeatePassword ? (
												errors.repeatePassword
											) : (
												' '
											)
										}
									/>
								</Grid>
							</Grid>
							<Grid item xs={12} container alignItems="center" justifyContent="space-between">
								<Grid item xs={12} md={4}>
									<PrimaryLoadingButton loading={false} type="submit">
										ثبت نام
									</PrimaryLoadingButton>
								</Grid>
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

export default RegisterCard;
