import React from 'react';
import { defaultCipherList } from 'constants';

const Header = (title) => {
    return (
        <div className="header">
            <h1>BOTTEGA MADLIBS</h1>
            <p> Fill out the fields below and click the generate button to see the Made Lib story.</p>
        </div>
    )
}

export default Header;
