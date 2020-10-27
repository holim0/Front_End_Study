import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
