import React from 'react';
import styles from './select.css';

const Select = ({handleOnChange, items}) => (
				<select onChange={handleOnChange} defaultValue="">
					<option disabled value="">Measure</option>
					{items.map( item => (<option value={item} key={item}>{item}</option>))}
				</select>
);

export default Select;