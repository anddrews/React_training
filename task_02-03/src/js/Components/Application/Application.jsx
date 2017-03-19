import styles from './Application.css';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Converter from '../Converter';


export default class Application extends Component {
	render() {
		return (
			<div>
				{this.props.children
					? (
						<div className="header">
							<h1>Application Root Component { this.props.children.props.route.path }</h1>
							<Link to={'/'} className = { styles.mainlink }>Home</Link>
							<Converter converterType={this.props.children.props.route.path} />
						</div>
					)
					: (
						<div className="header">
							<Link to={'/currency'} className={ styles.mainlink }>Currencies</Link>
							<Link to={'/length'} className={ styles.mainlink }>Length</Link>
							<Link to={'/time'} className={ styles.mainlink }>Time</Link>
						</div>
					)
				}
			</div>
		);
	}
}