import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./layout/Layout.js";

import "./sass/main.scss";

ReactDOM.render(
	//router will help to navigate between two given tasks
	<Router>
		<Layout />
	</Router>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept();
}
