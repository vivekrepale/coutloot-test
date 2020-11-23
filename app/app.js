import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/Layout.js";

import "./sass/main.scss";

ReactDOM.render(
	<Router>
		<Layout />
	</Router>	
	, document.getElementById("app"));

if (module.hot) {
	module.hot.accept();
}
