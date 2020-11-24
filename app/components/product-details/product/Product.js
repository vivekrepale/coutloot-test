import React, { useState } from "react";

import SvgRupee from "../../../assets/svg/SvgRupee.js";

const Product = (props) => {
	return (
		<div className="product-container2">
			<img className="product-container2__image" src={props.image} />
			<div className="product-container2__name">{props.name}</div>
			<div className="product-container2__price">
				<div className="product-container2__price__listed">
					<span>Rs</span>
					{`${props.listedPrice}`}
				</div>
				<div className="product-container2__price__label">
					{`\u0020\u0020(${props.labelPrice})\u0020\u0020`}
				</div>
				<div className="product-container2__price__discount">
					{`${props.discount}% Off`}
				</div>
			</div>
		</div>
	);
};

export default Product;
