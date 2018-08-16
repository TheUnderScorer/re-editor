import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './components/routes';
import './assets/scss/general.scss';

ReactDOM.render( (
    <Router>
        <Routes/>
    </Router>
), document.getElementById( 'root' ) );





