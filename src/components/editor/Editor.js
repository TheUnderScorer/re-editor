import React, { Component } from 'react';
import FullContainer from '../containers/full-container';
import TextArea from './textarea/textarea';
import './editor.scss';

/**
 * Main editor class
 *
 * @author Przemysław Żydek
 * */
class Editor extends Component {

    state = {
        /** @var {String} Contains direct value from text editor */
        value: localStorage.getItem( 'editor_value' ) || ''
    };

    /**
     * @var {Object} Contains API methods for child components
     * */
    api = {
        /**
         * Helper function for getting editor value
         *
         * @return String
         * */
        getValue: () => this.state.value,

        /**
         * Helper function for setting text input value state
         *
         * @param {String} value
         *
         * @return void
         * */
        setValue: value => {
            this.setState( { value } );

            localStorage.setItem( 'editor_value', value );
        }
    };

    render() {


        return (
            <FullContainer classList="editor-container">
                <TextArea api={this.api} value={this.api.getValue()}/>
            </FullContainer>
        );
    }

}

export default Editor;