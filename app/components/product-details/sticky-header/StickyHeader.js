import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import SvgLeftArrow from "../../../assets/svg/SvgLeftArrow.js";
import SvgShoppingCart from "../../../assets/svg/SvgShoppingCart.js";
import SvgThreeDots from "../../../assets/svg/SvgThreeDots.js";

const StickyHeader = (props) => {
	const [displayHeader, setDisplayHeader] = useState(false);

	const handleScroll = () => {
		if (document.body.scrollTop > 50) {
			setDisplayHeader(true);
		} else {
			setDisplayHeader(false);
		}
	};

	window.addEventListener("scroll", handleScroll);

	return displayHeader ? (
		<div className="sticky-header-container">
			<div className="sticky-header-container__svg-container">
				<SvgLeftArrow
					stroke="#75848B"
					className="sticky-header-container__svg-container__svg"
					onClick={() => props.history.push("/")}
				/>
			</div>
			<div className="sticky-header-container__name">{props.name}</div>
			<div className="sticky-header-container__svg-container">
				<SvgShoppingCart
					fill="#75848B"
					className="sticky-header-container__svg-container__svg cart"
				/>
			</div>
			<div className="sticky-header-container__svg-container">
				<SvgThreeDots
					fill="#75848B"
					className="sticky-header-container__svg-container__svg"
				/>
			</div>
		</div>
	) : (
		""
	);
};

export default withRouter(StickyHeader);
