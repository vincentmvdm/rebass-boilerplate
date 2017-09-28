import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Heading, Text } from 'rebass';

class Hello extends Component {
    componentDidMount() {
        this.props.fetchHello();
    }

    render() {
        return (
            <div>
                <Heading mt={4}>Hello World</Heading>
                <Text mt={2}>{this.props.hello}</Text>
            </div>
        );
    }
}

function mapStateToProps({ hello }) {
    return { hello };
}

export default connect(mapStateToProps, actions)(Hello);
