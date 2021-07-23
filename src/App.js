import React from "react"
import { Route, Switch } from "react-router-dom"
import { Enterprise, Error, Home, Login, More, Portfolio, Register, Suggestion } from "./pages"
import Header from "./components/header/Header"

import "./css/app.css"

const App = () => {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/suggestion" component={Suggestion} />
				<Route exact path="/enterprise" component={Enterprise} />
				<Route exact path="/more" component={More} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route component={Error} />
			</Switch>
		</>
	)
}

export default App
