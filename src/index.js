import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import { theme } from './theme';
import './global-styles';
import { Provider } from 'rebass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider theme={theme}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
