import React, { Component } from 'react';
import Container from '../containers/container';
import TextArea from './textarea/textarea';
import './editor.scss';
import Controls from './controls/controls';

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

    componentDidUpdate() {

        if ( this.state.value ) {
            window.onbeforeunload = () => true;
        } else {
            window.onbeforeunload = undefined;
        }

    }

    render() {


        return (
            <Container classList="editor-container" height="70%" width="70%">
                <Controls api={this.api}/>
                <TextArea api={this.api} value={this.api.getValue()}/>
            </Container>
        );
    }

}

export default Editor;
