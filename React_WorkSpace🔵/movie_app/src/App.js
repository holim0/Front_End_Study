import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Main from "./routes/Main";
import Navigation from "./components/Navigation";
function App() {
    return (
        <BrowserRouter>
            <Navigation></Navigation>
            <Route path="/" exact={true} component={Main} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    );
}

export default App;
