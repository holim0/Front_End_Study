import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

function App() {
    return (
        <>
            <Router />
            <GlobalStyles /> {/* 공통 스타일 적용 */}
        </>
    );
}

export default App;
