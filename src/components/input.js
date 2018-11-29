import React from 'react';
import { defaultCipherList } from 'constants';

const Input = ({title, state, name}, onChange) => {
    return (
        <div key={name} className="input">
        <input name={name} value={state} onChange={onChange}/>
        <label>{title}</label>
    </div>
    )
}

export default Input;
