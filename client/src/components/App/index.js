import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'rebass';

const App = () => {
    return (
        <BrowserRouter>
            <Provider>
                <div>
                    <p>Test</p>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
