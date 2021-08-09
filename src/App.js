import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Error, Home, Introduce, Login, Mypage, Help, Portfolio, Register, Suggestion } from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./css/app.css";

const App = (props) => {
    const [successPath, setsuccessPath] = useState(false);
    useEffect(() => {
        if (props.location.pathname === "/login" || props.location.pathname === "/register") {
            setsuccessPath(false);
        } else {
            setsuccessPath(true);
        }
    }, [props.location.pathname]);
    return (
        <>
            {successPath && <Header />}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/suggestion" component={Suggestion} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/introduce" component={Introduce} />
                <Route component={Error} />
            </Switch>
            {successPath && <Footer />}
        </>
    );
};

export default withRouter(App);
