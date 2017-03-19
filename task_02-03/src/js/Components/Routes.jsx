import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';


import Application from './Application/Application';
import NotFoundComponent from './NotFoundComponent';
import Converter from './Converter';

export default class Routes extends Component {
	render() {
		return (
				<Router history={browserHistory}>
					<Route path="/" component={Application}>
						<Route path="currency" component={ Converter } />
						<Route path="length" component={ Converter } />
						<Route path="time" component={ Converter } />
						<Route path="*" component={ NotFoundComponent } />
					</Route>
					<Route path="*" component={ NotFoundComponent } />
				</Router>
		);
	}
}