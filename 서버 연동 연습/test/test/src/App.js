import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    const getApi = async () => {
        const res = await axios.get("/home");
        setMessage(res.data);
    };

    useEffect(() => {
        getApi();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}

export default App;
