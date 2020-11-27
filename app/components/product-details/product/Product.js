import React, { useState } from "react";

import SvgRupee from "../../../assets/svg/SvgRupee.js";
import SvgHeart from "../../../assets/svg/SvgHeart.js";

const Product = (props) => {
	const [liked, setLiked] = useState(false);
	return (
		<div className="product-container2">
			<div className="product-container2__image">
				<img src={props.image} />
				<div className="product-container2__image__svg-container">
					<SvgHeart
						fill={liked ? "#EB2D2D" : ""}
						stroke={liked ? "#FA1B1C" : "#fff"}
						className="product-container2__image__svg-container__svg"
						onClick={() => setLiked((prevState) => !prevState)}
					/>
				</div>
			</div>

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
