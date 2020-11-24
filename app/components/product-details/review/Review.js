import React from "react";

import Block from "../block/Block.js";
import Rating from "../../product-catalogue/product/rating/Rating.js";

const reviewData = [
	{ key: "5", color: "#EB2D2D", value: "100%" },
	{ key: "4", color: "#ADDCA7", value: "35%" },
	{ key: "3", color: "#6EC3E8", value: "20%" },
	{ key: "2", color: "#F0D59E", value: "55%" },
	{ key: "1", color: "#FFE5E5", value: "45%" },
];
const Review = (props) => {
	return (
		<Block title="Review">
			<div className="review-container">
				<div className="review-container__left">
					<h2>
						{`${props.rating}/`}
						<span>5</span>
					</h2>
					<Rating rating={props.rating} />
				</div>
				<div className="review-container__right">
					{reviewData.map((item, index) => {
						return (
							<div
								className="review-container__right__item"
								key={index}
							>
								<div className="review-container_right__item__key">{`${item.key}`}</div>
								<div
									className="review-container_right__item__bar"
									style={{
										width: `${item.value}`,
										height: "10px",
										backgroundColor: `${item.color}`,
									}}
								></div>
							</div>
						);
					})}
				</div>
			</div>
		</Block>
	);
};

export default Review;
