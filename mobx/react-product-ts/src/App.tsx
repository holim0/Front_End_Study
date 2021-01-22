import React from "react";
import { observable, reaction, computed, autorun } from "mobx";
import { useObserver } from "mobx-react";
const value = observable({
    a: 100,
    b: 2,
});

function App() {
    const changeValue = () => {
        value.a = 10;
    };

    return useObserver(() => <button onClick={changeValue}>{value.a}</button>);
}

export default App;
