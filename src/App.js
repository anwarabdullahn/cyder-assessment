import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard';

export default () => (
	<Router>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Cyder Assessment</title>
		</Helmet>
		<Route path="/" component={Dashboard} exact />
	</Router>
);
