import React, { useState } from "react";

import Rating from "./rating/Rating.js";

import SvgRupee from "../../../assets/svg/SvgRupee.js";
import SvgHeart from "../../../assets/svg/SvgHeart.js";

const Product = (props) => {
	const [liked, setLiked] = useState(false);
	return (
		<div className="product-container">
			<div className="product-container__image">
				<img src={props.image} />
				<div className="product-container__image__svg-container">
					<SvgHeart
						fill={liked ? "#EB2D2D" : "#fff"}
						stroke={liked ? "#FA1B1C" : "#76848B"}
						className="product-container__image__svg-container__svg"
						onClick={() => setLiked((prevState) => !prevState)}
					/>
				</div>
			</div>
			<div className="product-container__price">
				<div className="product-container__price__listed">
					<SvgRupee
						fill="#1c1c1c"
						stroke="#1c1c1c"
						className="product-container__price__listed__svg"
					/>
					<h3>{`${props.listedPrice}`}</h3>
				</div>
				<h3 className="product-container__price__label">
					{`(${props.labelPrice})`}
				</h3>
				<h3 className="product-container__price__discount">
					{`${props.discount}% Off`}
				</h3>
			</div>
			<div className="product-container__name">{props.name}</div>
			<Rating rating={props.rating} />
		</div>
	);
};

export default Product;
