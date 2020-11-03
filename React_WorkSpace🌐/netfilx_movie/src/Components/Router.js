import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";

function Router() {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" component={TV} />
                    <Route path="/search" component={Search} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default Router;
