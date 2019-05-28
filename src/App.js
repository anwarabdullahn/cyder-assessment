import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Dashboard from './containers/dashboard';

export default () => (
	<Router>
		<Provider store={store}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Cyder Assessment</title>
			</Helmet>
			<Route path="/" component={Dashboard} exact />
		</Provider>
	</Router>
);
