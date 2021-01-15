import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Box, Heading, Text } from "rebass";

import StyledMeasure from "../../components/StyledMeasure";

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Box>
                    <StyledMeasure>
                        <Heading is="h1">Dashboard</Heading>
                        <Text>
                            Aliquam dignissim, est nec luctus dapibus, velit mi
                            tristique nulla, eget hendrerit velit tortor vitae
                            risus. Nulla mollis ex ut lorem finibus ultricies.
                        </Text>
                    </StyledMeasure>
                </Box>
            </div>
        );
    }
}

export default DashboardPage;
