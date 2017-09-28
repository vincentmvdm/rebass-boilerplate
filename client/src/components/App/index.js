import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, Container } from 'rebass';
import 'sanitize.css/sanitize.css';
import '../../global-styles';
import Hello from '../Hello'; 

const App = () => {
    return (
        <BrowserRouter>
            <Provider>
                <Container>
                    <Route exact path="/" component={Hello} />
                </Container>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
