import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router";

import Footer from "../../components/Footer";

import Header from "../Header";
import SignInPage from "../SignInPage";
import DashboardPage from "../DashboardPage";
import NotFoundPage from "../NotFoundPage";

class App extends Component {
    render() {
        return (
            <div>
                <Helmet
                    titleTemplate="%s - Rebass Boilerplate"
                    defaultTitle="Rebass Boilerplate"
                />
                <Header />
                <Switch>
                    <Route exact path="/" component={SignInPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
