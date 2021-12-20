import React from 'react';
import { Helmet } from 'react-helmet-async';
const MetaTags = ({ title, description }) => {
	return (
		<Helmet>
			<title>{title} | Netflix</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

MetaTags.defaultProps = {
	title: 'Netflix',
	description: 'Netflix'
};

export default MetaTags;
