import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Home";
import Detail from "Routes/Home";
import TV from "Routes/Home";

function Router() {
    return (
        <HashRouter>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
        </HashRouter>
    );
}

export default Router;
