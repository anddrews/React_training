import React, { Component } from 'react';
import styles from './modal.css';

class Modal extends Component {
    
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
                        <input type="text" name="from"/>
                    </div>
                    <div className={ styles.row }>
                        <label className={ styles.caption }>To:</label>
                        <input type="text" name="to"/>
                    </div>
                    <div className={ styles.row }>
                        <label className={ styles.caption }>Ratio:</label>
                        <input type="text" name="ratio"/>
                    </div>
                    <div className={ styles.row }>
                        <button onClick={ () => {console.log('fff'); this.props.closeModal()} }>Add</button>
                        <button onClick={ this.props.closeModal }>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;