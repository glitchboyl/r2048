import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store';
import './assets/style/main.css'
import App from './components/web/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={Store}><App/></Provider>, document.getElementById('app'));
registerServiceWorker();