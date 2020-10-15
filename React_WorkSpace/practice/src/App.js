import React from "react";
import ReactDOM from "react-dom";

function App() {
    const ele = (
        <div>
            <h1>This Time is</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    );
    return ReactDOM.render(ele, document.getElementById("root"));
}

setInterval(App, 1000);

export default App;
