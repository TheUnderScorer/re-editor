import React from 'react';
import { string, object } from 'prop-types';
import { handleKeyup } from './handle-keyup';
import './textarea.scss';

const TextArea = ( { value = '', api } ) => {
    return (
        <textarea
            className="editor-textarea"
            defaultValue={value}
            onKeyUp={e => handleKeyup( e, api )}/>

    );
};

TextArea.propTypes = {
    value: string,
    api:   object
};

export default TextArea;