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
					<h3>{`${props.listedPrice}`}</h3>
				</div>
				<h3 className="product-info-container__price__label">
					{`${props.labelPrice}`}
				</h3>
				<h3 className="product-info-container__price__discount">
					{`${props.discount}% Off`}
				</h3>
			</div>
			<div className="product-info-container__name">{props.name}</div>
		</div>
	);
};

export default ProductInfo;
