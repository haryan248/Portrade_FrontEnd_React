import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./_reducers";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
