import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import "./Api";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    // store 생성.
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
