import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';


import Application from './application/application';
import NotFoundComponent from './notFoundComponent';
import Converter from './converter/converter';

export default class Routes extends Component {
	render() {
		return (
				<Router history={browserHistory}>
					<Route path="/" component={ Application }>
						<Route path=":type" component={ Converter } />
						<Route path="*" component={ NotFoundComponent } />
					</Route>
					<Route path="*" component={ NotFoundComponent } />
				</Router>
		);
	}
}