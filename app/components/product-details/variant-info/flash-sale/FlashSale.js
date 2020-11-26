import React from "react";

import SvgFlash from "../../../../assets/svg/SvgFlash.js";
import SvgLeftArrow from "../../../../assets/svg/SvgLeftArrow.js";

const FlashSale = (props) => {
	return (
		<div className="flash-sale-container">
			<div className="flash-sale-container__left">
				<SvgFlash />
				<div className="flash-sale-container__left__text">
					Flash sale is live now
				</div>
			</div>
			<div className="flash-sale-container__right">
				<div className="flash-sale-container__right__button">
					<div className="flash-sale-container__right__button__dot"></div>
					<div className="flash-sale-container__right__button__text">
						LIVE
					</div>
				</div>
				<SvgLeftArrow
					stroke="#fff"
					className="flash-sale-container__right__svg"
				/>
			</div>
			<div></div>
		</div>
	);
};

export default FlashSale;
