import React from "react";
import { Switch, Route } from "react-router-dom";
// import { useSpring, useSprings, a, config, interpolate } from "react-spring";
// import { useHover } from "react-use-gesture";

import Home from "../components/home/Home.js";
import ProductCatalogue from "../components/product-catalogue/ProductCatalogue.js";
import ProductDetails from "../components/product-details/ProductDetails.js";

const Layout = (props) => {
	return (
		<main className="layout">
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/product-catalogue">
					<ProductCatalogue />
				</Route>
				<Route path="/product-details">
					<ProductDetails />
				</Route>
			</Switch>
		</main>
	);
};

export default Layout;
