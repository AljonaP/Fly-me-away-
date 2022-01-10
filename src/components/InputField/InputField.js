import React from 'react';
import './InputField.css';

function InputField({ type, id, name, label, className, value, placeholder, name2, onChange, checked }) {
    return (
        <label htmlFor={id}>
            {name}
            <input
                type={type}
                id={id}
                className={className}
                name={name}
                value={value}
                placeholder={placeholder}
                checked={checked}
                onChange={onChange}
            />
            {name2}
        </label>
    );
}

export default InputField;