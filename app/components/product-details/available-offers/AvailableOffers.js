import React from "react";

import Block from "../block/Block.js";

import { availableOffers } from "../../../assets/data/ParsedData.js";

const AvailableOffers = (props) => {
	return (
		<Block title="Available Offers" svg={props.svg}>
			<div className="dilevery-details-block-container">
				{availableOffers.map((item, index) => {
					return (
						<div
							key={index}
							className="dilevery-details-block-container__dilevery-details-block"
						>
							<div className="dilevery-details-block-container__dilevery-details-block__svg-container">
								{item.svg}
							</div>
							<h2 key={index}>{item.offer}</h2>
						</div>
					);
				})}
			</div>
		</Block>
	);
};

export default AvailableOffers;
