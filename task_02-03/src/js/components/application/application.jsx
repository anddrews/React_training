import styles from './application.css';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Converter from '../converter/converter';


export default class Application extends Component {
	render() {
		return (
			<div>
				{this.props.children
					? (
						<div className="content-wrapper">
							<div className={ styles.header }>
								<Link to={'/'} className = { styles.mainlink }>Home</Link>
								<h1>{ this.props.params.type } converter is working now</h1>
							</div>
							<Converter className = { styles['converter-bloc'] } converterType={ this.props.params.type } />
						</div>
					)
					: (
						<div className="content-wrapper">
							<div className={ styles.header }>
								<h1>Awesome converter</h1>
								<Link to={'/currency'} className={ styles.mainlink }>Currencies</Link>
								<Link to={'/length'} className={ styles.mainlink }>Length</Link>
								<Link to={'/time'} className={ styles.mainlink }>Time</Link>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}