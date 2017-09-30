import React, { Component } from 'react';
import { Heading, Text } from 'rebass';
import axios from 'axios';

class LocalStateAndAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: ''
        };
    }

    componentDidMount() {
        axios.get('/api/hello').then(({ data }) => {
            this.setState({
                hello: data
            });
        });
    }

    render() {
        return (
            <div>
                <Heading mt={4}>Local State And API</Heading>
                <Text mt={2}>{this.state.hello}</Text>
            </div>
        );
    }
}

export default LocalStateAndAPI;
