import React from 'react';
import { defaultCipherList } from 'constants';

const input = (title) => {
    return (
        <div className="input">
            <input/>
            <label>{title}</label>
        </div>
    )
}

export default input;
