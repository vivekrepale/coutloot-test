import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
// import { useSpring, useSprings, a, config, interpolate } from "react-spring";
// import { useHover } from "react-use-gesture";

const Layout = (props) => {
	const {history} = props;
	return (
		<main className="layout">
			<Switch>
				<Route path='/' exact>
					Home
				</Route>
				<Route path='/product-catalogue'>
					<p>Products</p>
				</Route>
				<Route path='/product-details'>
					<p>Product details</p>	
				</Route>
			</Switch>
		</main>
		
	);
};

export default withRouter(Layout);
