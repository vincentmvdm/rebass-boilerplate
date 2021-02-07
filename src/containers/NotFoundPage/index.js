import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Box, Heading, Text } from "rebass";

import StyledMeasure from "../../components/StyledMeasure";

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Page not found</title>
                </Helmet>
                <Box>
                    <StyledMeasure>
                        <Heading>Page not found</Heading>
                        <Text>
                            Sed elementum vestibulum eros, vel molestie erat
                            egestas sit amet. Donec cursus aliquam vulputate.
                            Aenean sit amet metus vitae magna dictum aliquet.
                        </Text>
                    </StyledMeasure>
                </Box>
            </div>
        );
    }
}

export default NotFoundPage;
