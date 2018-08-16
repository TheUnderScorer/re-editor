import React from 'react';
import { string, object } from 'prop-types';
import { handleKeyup } from './handle-keyup';
import TextField from '@material-ui/core/TextField';
import './textarea.scss';

const TextArea = ( { value = '', api } ) => {
    return (
        <TextField
            rows={10}
            rowsMax={20}
            multiline={true}
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