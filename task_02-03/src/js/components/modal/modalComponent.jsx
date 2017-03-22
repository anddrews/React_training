import React, { Component } from 'react';
import styles from './modal.css';

class Modal extends Component {

    constructor( ) {
        super();
        this.state = {};
    }
    handleAddCurrency (evt) {
        this.props.closeModal();
        console.log('added');
    }
    
    render() {
        if (!this.props.isOpen) {
            return null;
        }
        return (
            <div className={ styles.modalWrapper }>
                <div className= { styles.modalBody}>
                    <div className={ styles.row }>
                        <label className={ styles.caption }>From:</label>
                        <input type="text" name="from" onChange={ (evt) => this.state.from = evt.target.value}/>
                    </div>
                    <div className={ styles.row }>
                        <label className={ styles.caption }>To:</label>
                        <input type="text" name="to" onChange={ (evt) => this.state.to = evt.target.value}/>
                    </div>
                    <div className={ styles.row }>
                        <label className={ styles.caption }>Ratio:</label>
                        <input type="text" name="ratio" onChange={ (evt) => this.state.ratio = evt.target.value}/>
                    </div>
                    <div className={ styles.row }>
                        <button onClick={ () => { this.props.closeModal(this.state.from, this.state.to, this.state.ratio)} }>Add</button>
                        <button onClick={ this.props.closeModal }>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;