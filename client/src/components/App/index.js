import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, Container } from 'rebass';
import 'sanitize.css/sanitize.css';
import '../../global-styles';
import LocalStateAndAPI from '../../containers/LocalStateAndAPI'; 
import GlobalStateAndAPI from '../../containers/GlobalStateAndAPI'; 

const App = () => {
    return (
        <BrowserRouter>
            <Provider>
                <Container>
                    <LocalStateAndAPI />
                    <GlobalStateAndAPI />
                </Container>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
