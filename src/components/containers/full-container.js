import React from 'react';
import { string, any } from 'prop-types';
import './scss/full-container.scss';

const FullContainer = ( { classList = '', children } ) => {
    return (
        <div className={classList + ' container full'}>
            {children}
        </div>
    );
};

FullContainer.propTypes = {
    classList: string,
    children:  any
};


export default FullContainer;