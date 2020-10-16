import React, { Component } from "react";
import ReactDOM from "react-dom";

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        );
    }
}

function App() {
    return ReactDOM.render(<Toggle />, document.getElementById("root"));
}

setInterval(App, 1000);

export default App;
