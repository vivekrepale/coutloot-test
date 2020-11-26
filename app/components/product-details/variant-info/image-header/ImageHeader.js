import React from "react";
import { withRouter } from "react-router-dom";

import SvgLeftArrow from "../../../../assets/svg/SvgLeftArrow.js";
import SvgShoppingCart from "../../../../assets/svg/SvgShoppingCart.js";
import SvgThreeDots from "../../../../assets/svg/SvgThreeDots.js";

const ImageHeader = (props) => {
	return (
		<div className="image-header-container">
			<img
				className="image-header-container__image"
				src={props.selectedVariantImage}
				alt="Coutloot: product-image"
			/>
			<div className="image-header-container__header">
				<div className="image-header-container__header__svg-container">
					<SvgLeftArrow
						stroke="#fff"
						className="image-header-container__header__svg-container__svg"
						onClick={() => props.history.push("/")}
					/>
				</div>
				<div className="image-header-container__header__right">
					<div className="image-header-container__header__right__svg-container">
						<SvgShoppingCart
							fill="#fff"
							// stroke="#fff"
							className="image-header-container__header__right__svg-container__svg"
						/>
					</div>
					<div className="image-header-container__header__right__svg-container">
						<SvgThreeDots
							fill="#fff"
							className="image-header-container__header__right__svg-container__svg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ImageHeader);
