import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
	const { history } = props;

	return (
		<div className="home-container">
			<button
				className="button"
				onClick={() => history.push("/product-catalogue")}
			>
				Product Catalogue
			</button>
			<button
				className="button"
				onClick={() => history.push("/product-details")}
			>
				Product Details
			</button>
			<p>
				Due to CORS error I wasn't directly able to access your API, so
				I created a JSON file of data.
			</p>
		</div>
	);
};

export default withRouter(Home);
