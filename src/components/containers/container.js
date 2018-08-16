import React from 'react';
import { string, any } from 'prop-types';
import './scss/container.scss';

const Container = ( { classList = '', width = '100%', height = '100%', children } ) => {
    return (
        <div style={{
           width, height
        }}
             className={classList + ' container full'}>
            {children}
        </div>
    );
};

Container.propTypes = {
    classList: string,
    children:  any,
    width: string,
    height: string,
};


export default Container;