import React from 'react';

function InputFieldCheckbox({ type, id, name, label, className, value, onChange }) {
    return (
        <label htmlFor={id}>
            {name}
            <input
                type={type}
                id={id}
                className={className}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default InputField;