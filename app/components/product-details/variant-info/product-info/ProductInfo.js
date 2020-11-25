import React from "react";

import SvgRupee from "../../../../assets/svg/SvgRupee.js";

const ProductInfo = (props) => {
	return (
		<div className="product-info-container">
			<div className="product-info-container__price">
				<div className="product-info-container__price__listed">
					<SvgRupee
						fill="#eb2d2d"
						stroke="#eb2d2d"
						className="product-info-container__price__listed__svg"
					/>
					{`${props.listedPrice}`}
				</div>
				<div className="product-info-container__price__label">
					{`${props.labelPrice}`}
				</div>
				<div className="product-info-container__price__discount">
					{`${props.discount}% Off`}
				</div>
			</div>
			<div className="product-info-container__name">{props.name}</div>
		</div>
	);
};

export default ProductInfo;
