import React, {Component} from 'react';
import Select from '../select/select';
import styles from './converter.css';
import { Link } from 'react-router';
import Modal from '../modal/modalComponent';

import ConverterFactory from '../../libraries/converterFactory';

export default class Converter extends Component {
    constructor({converterType}) {
        super();
        this.state = {
            from: '',
            to: '',
            value: null,
            converterType: converterType,
            isOpenModal: false
        };
    };
    componentWillMount () {
        let currentConverter = new ConverterFactory();
            this.setState({
                measureItems: currentConverter.getMeasures(this.state.converterType),
                converter: currentConverter
						})

    }

    createConverter() {
        if (this.state.from && this.state.to) {
            let {from, to} = this.state;
            this.setState({converter: this.state.converter.createConverter({'from': from, 'to': to})});
        }
    }
    
    handleChangeFrom(evt) {
        this.setState({from: evt.target.value}, this.createConverter);
    };
    
    handleChangeTo(evt) {
        this.setState({to: evt.target.value}, this.createConverter);
    };
    
    handleChangeInput(evt) {
        let value = evt.target.value;
        if (this.state.converter) {
            this.setState({result: this.state.converter.convert(value)});
        }
    }
    
    closeModal(from, to, ratio) {
				this.state.converter.setCustomRatio(from, to, ratio);
        this.setState({
					isOpenModal: false,
					measureItems: this.state.converter.getMeasures(this.state.converterType),
				});
    }
    
    render() {
        return (
            <div className={ styles['converter-bloc'] }>
                <div className={ styles.row }>
                    <label>From</label>
                    <Select items={this.state.measureItems} handleOnChange={this.handleChangeFrom.bind(this)}/>
                    <label>To</label>
                    <Select items={this.state.measureItems} handleOnChange={this.handleChangeTo.bind(this)}/>
                </div>
                <div className={ styles.row }>
                    <input type="text" onChange={ this.handleChangeInput.bind(this) }/>
                </div>
                <div className={ styles.row }>
                    <label>Result:{ this.state.result }</label>
                </div>
              {this.state.converterType === 'currency' ?
                <button onClick={()=> this.setState({isOpenModal: true})}>Add currency</button>
                  : null
              }
                <Modal
                  isOpen={ this.state.isOpenModal }
                  closeModal={ this.closeModal.bind(this) }
                />
            </div>
        );
    }
}
