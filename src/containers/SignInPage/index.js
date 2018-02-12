import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Container, Heading } from "rebass";

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
                <Container>
                    <StyledMeasure mx="auto">
                        <Heading is="h1">Sign in</Heading>
                        <SignInForm onSubmit={signIn} />
                    </StyledMeasure>
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = {
    signIn
};

export default connect(null, mapDispatchToProps)(SignInPage);
