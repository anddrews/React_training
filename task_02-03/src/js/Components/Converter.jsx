import React, { Component } from 'react';
import Select from './Select';

export default class Converter extends Component {
	constructor({converterType}) {
		super()
		this.state = {
			from: '',
			to: '',
			value: null,
			converterType: converterType};
		// this.handleSomeIdChange = this.handleSomeIdChange.bind(this);
	}

	// handleSomeIdChange(evt) {
	// 	this.setState({ someId: evt.target.value });
	// }

	render() {
		return (
				<div>
					<h2>{this.state.converterType}</h2>
				</div>
		);
	}
}
