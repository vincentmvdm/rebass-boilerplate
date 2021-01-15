import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Box, Heading } from "rebass";

import StyledMeasure from "../../components/StyledMeasure";

import SignInForm from "../SignInForm";

import { signIn } from "./actions";

class SignInPage extends Component {
    render() {
        const { signIn } = this.props;

        return (
            <div>
                <Helmet>
                    <title>Sign in</title>
                </Helmet>
                <Box>
                    <StyledMeasure mx="auto">
                        <Heading is="h1">Sign in</Heading>
                        <SignInForm onSubmit={signIn} />
                    </StyledMeasure>
                </Box>
            </div>
        );
    }
}

const mapDispatchToProps = {
    signIn
};

export default connect(null, mapDispatchToProps)(SignInPage);
