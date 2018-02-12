import React, { Component } from "react";
import { Flex } from "rebass";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Flex>
                <Link to="/">Rebass Boilerplate</Link>
            </Flex>
        );
    }
}

export default Header;
