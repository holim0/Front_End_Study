import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../components/Menu";

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route path="/" exact={true} component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;
