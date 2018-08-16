import React from 'react';
import Button from '@material-ui/core/Button';
import { object } from 'prop-types';
import { handleDownload } from './handleDownload';
import './controls.scss';

const Controls = ( { api } ) => {
    return (
        <div className="controls">
            <Button color="primary" variant="raised" onClick={() => handleDownload( api )}>
                <span>Download as .txt</span>
            </Button>
        </div>
    );
};

Controls.propTypes = {
    api: object
};

export default Controls;
