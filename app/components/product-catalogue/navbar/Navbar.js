import React from "react";
import { withRouter } from "react-router-dom";

import SvgLeftArrow from "../../../assets/svg/SvgLeftArrow.js";
import SvgSearch from "../../../assets/svg/SvgSearch.js";
import SvgShoppingCart from "../../../assets/svg/SvgShoppingCart.js";
import SvgThreeDots from "../../../assets/svg/SvgThreeDots.js";

const Navbar = (props) => {
	return (
		<div className="navbar-container">
			<div className="navbar-container__left">
				<SvgLeftArrow
					className="navbar-container__left__svg navbar-container__left__svg--arrow"
					stroke="#727C90"
					onClick={() => props.history.push("/")}
				/>
				<h1 className="navbar-container__left__title">Mens Jeans</h1>
			</div>
			<div className="navbar-container__right">
				<SvgSearch
					className="navbar-container__right__svg"
					fill="#727C90"
				/>
				<SvgShoppingCart
					className="navbar-container__right__svg cart"
					fill="#727C90"
				/>
				<SvgThreeDots
					className="navbar-container__right__svg"
					fill="#727C90"
				/>
			</div>
		</div>
	);
};

export default withRouter(Navbar);
