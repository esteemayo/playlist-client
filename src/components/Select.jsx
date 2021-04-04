import React from 'react';

const Select = ({ name, label, options, ...rest }) => {
    return (
        <div className="field">
                <label htmlFor={name}>{label}</label>
                <select
                    {...rest}
                    name={name}
                    id={name}
                >
                    <option>Select author</option>
                    {options}
                </select>
        </div>
    );
}

export default Select;