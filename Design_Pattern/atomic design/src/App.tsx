import React from "react";
import Header from "./Components/Header";
import { GlobalContainer, MainContainer } from "./styles/mainStyle";
import ClassInformationContainer from "./Components/ClassInformationContainer";
import Footer from "./Components/Footer";

function App() {
    return (
        <GlobalContainer>
            <Header />
            <MainContainer>
                <ClassInformationContainer />
            </MainContainer>
            <Footer />
        </GlobalContainer>
    );
}

export default App;
