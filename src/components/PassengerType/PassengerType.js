import React from 'react';

function PassengerType({ name, description, className, stateKeyName, stateSetterName }) {
    return (
        <article>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button
                type="button"
                disabled={{stateKeyName} === 0}
                onClick={() =>stateSetterName(stateKeyName-1)}
                className={className}>
                -
            </button>
            <p>{stateKeyName}</p>
            <button
                type="button"
                onClick={() =>stateSetterName(stateKeyName+1)}
                className={className}>
                +
            </button>
        </article>

    );
}

export default PassengerType;
