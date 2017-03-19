import React from 'react';

const Select = ({handleOnChange, items}) => (
				<select onChange={handleOnChange}>
					<option>Select measure</option>
					{items.map( item => (<option value={item.value}>{item.key}</option>))}
				</select>
);

export default Select;