import React from "react";
import { Route, Switch } from "react-router-dom";
import { Error, Home, Introduce, Login, Mypage, Help, Portfolio, Register, Suggestion } from "./pages";
import Header from "./components/header/Header";

import "./css/app.css";

const App = () => {
	return (
		<>
			<Header/>

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/portfolio" component={Portfolio}/>
				<Route exact path="/suggestion" component={Suggestion}/>
				<Route exact path="/Help" component={Help}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/register" component={Register}/>
                <Route exact path="/mypage" component={Mypage}/>
                <Route exact path="/introduce" component={Introduce} />
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
