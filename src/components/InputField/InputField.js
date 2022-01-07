import React from 'react';

function InputField({ type, id, name, label, className, value, onChange, checked, name2 }) {
    return (
        <label htmlFor={id}>
            {name}
            <input
                type={type}
                id={id}
                className={className}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            {name2}
        </label>
    );
}

export default InputField;