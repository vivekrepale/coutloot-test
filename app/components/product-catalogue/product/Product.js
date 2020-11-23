import React, { useState } from "react";

import Rating from "./rating/Rating.js";

import SvgRupee from "../../../assets/svg/SvgRupee.js";

const Product = (props) => {
	return (
		<div className="product-container">
			<img className="product-container__image" src={props.image} />
			<div className="product-container__price">
				<div className="product-container__price__listed">
					<SvgRupee
						fill="#1c1c1c"
						stroke="#1c1c1c"
						className="product-container__price__listed__svg"
					/>
					{`${props.listedPrice}`}
				</div>
				<div className="product-container__price__label">
					{`(${props.labelPrice})`}
				</div>
				<div className="product-container__price__discount">
					{`${props.discount}% Off`}
				</div>
			</div>
			<div className="product-container__name">{props.name}</div>
			<Rating rating={props.rating} />
		</div>
	);
};

export default Product;
