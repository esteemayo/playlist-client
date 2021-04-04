import React from 'react';

const Input = ({ name, label, type, ...rest }) => {
    return (
        <div className="field">
                <label htmlFor={name}>{label}</label>
                <input
                    {...rest}
                    type={type}
                    name={name}
                    id={name}
                />
        </div>
    );
}

export default Input;