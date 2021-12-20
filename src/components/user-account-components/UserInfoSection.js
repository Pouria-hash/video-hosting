import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { BsPencil } from 'react-icons/bs';

import userPlaceholder from 'assets/images/userPlaceholder.png';
import FillTextField from 'ui-component/inputs/TextFields/FillTextField';

const UserInfoSection = () => {
	return (
		<Fragment>
			<Formik
				initialValues={{
					name: '',
					description: ''
				}}
				validationSchema={Yup.object({
					name: Yup.string().required('این قسمت را تکمیل کنید'),
					description: Yup.string().required('این قسمت را تکمیل کنید')
				})}
				onSubmit={(values) => {
					console.log(values);
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
									اطلاعات شما
								</Typography>
							</Grid>
							<Grid item container columnSpacing={1} alignItems="center" xs={12} md={9} sx={{ p: 3 }}>
								<Grid item xs={3}>
									<Box sx={{ width: '100%', height: 100 }}>
										<Box
											component="img"
											src={userPlaceholder}
											alt="عکس کاربر"
											sx={{ height: '100%', width: '100%', objectFit: 'scale-down' }}
										/>
									</Box>
								</Grid>
								<Grid item container spacing={2} xs={9}>
									<Grid item xs={12} md={6}>
										<Field
											label="نام و نام خانوادگی:"
											value={values.name}
											name="name"
											endAdornment={<BsPencil />}
											as={FillTextField}
											helperText={
												errors.name && touched.name ? (
													<Typography variant="caption" color="error">
														{errors.name}
													</Typography>
												) : (
													' '
												)
											}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Field
											label="توضیحات:"
											value={values.description}
											name="description"
											endAdornment={<BsPencil />}
											as={FillTextField}
											helperText={
												errors.description && touched.description ? (
													<Typography variant="caption" color="error">
														{errors.description}
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
										sx={{ pl: 2 }}
									>
										<Typography variant="body2">
											برای تغییر تصویر پروفایل{' '}
											<Link to="/dashboard/user">
												<Typography
													color="secondary.main"
													variant="body2"
													component="span"
													sx={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}
												>
													اینجا
												</Typography>
											</Link>{' '}
											کیلیک کنید.
										</Typography>

										<Button
											variant="contained"
											type="submit"
											color="secondary"
											sx={{ color: 'white.main' }}
										>
											ثبت تغییرات
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

export default UserInfoSection;
