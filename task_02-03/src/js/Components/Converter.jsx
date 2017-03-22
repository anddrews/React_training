import React, { Component } from 'react';
import Select from './Select';
import ConverterFactory  from '../Library/converterFactory';

export default class Converter extends Component {
	constructor({type}) {
		super();
		this.state = {
			from: null,
			to: null,
			value: null,
			converterType: type
		};
		// this.handleSomeIdChange = this.handleSomeIdChange.bind(this);
	}

	// handleSomeIdChange(evt) {
	// 	this.setState({ someId: evt.target.value });
	// }

	render() {
		let converter = new ConverterFactory().createConverter({from: 'mm', to: 'm'});
		converter.get

		return (

				<div>
					<h2>{ converter.convert(10)}</h2>
				</div>
		);
	}
}

Converter.propTypes = {
	type: React.PropTypes.string
};
