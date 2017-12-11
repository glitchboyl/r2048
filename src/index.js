import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.css'
import App from './components/web/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();