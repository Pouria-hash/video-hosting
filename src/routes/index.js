import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Spinner from 'ui-component/spinner/LazySpinner';

// project imports
import AuthLayout from 'layouts/AuthLayout.js';
import DashboardLayout from 'layouts/DashboardLayout';

/** -------------------- Home Page -------------------------- */
const HomeLayout = lazy(() => import('layouts/HomeLayout'));
const HomePage = lazy(() => import('pages/HomePage'));

/** -------------------- Dashboard Pages -------------------------- */
const DashboardPage = lazy(() => import('pages/dashboard-pages/DashoardPage'));

/** ----------------------- Auth Pages ------------------------- */
const LoginPage = lazy(() => import('pages/auth-pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/auth-pages/RegisterPage'));
const VerifyAccountPage = lazy(() => import('pages/auth-pages/VerifyAccountPage'));

//-----------------------|| ROUTING RENDER ||-----------------------//

const Router = () => {
	const { userInfo } = useSelector((state) => state.userLogin);
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<HomePage />} />
				</Route>

				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route index element={<DashboardPage />} />
				</Route>

				<Route path="/auth" element={<AuthLayout />}>
					<Route path="login" element={!userInfo ? <LoginPage /> : <Navigate to="/" replace={true} />} />
					<Route
						path="register"
						element={!userInfo ? <RegisterPage /> : <Navigate to="/" replace={true} />}
					/>
					<Route
						path="verify"
						element={!userInfo ? <VerifyAccountPage /> : <Navigate to="/" replace={true} />}
					/>
				</Route>
				<Route path="*" element={<h1>صفحه مورد نظر پیدا نشد!</h1>} />
			</Routes>
		</Suspense>
	);
};

export default Router;
