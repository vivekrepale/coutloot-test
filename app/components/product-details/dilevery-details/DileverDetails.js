import React from "react";

import Block from "../block/Block.js";

import { dileveryDetails } from "../../../assets/data/ParsedData.js";

const DileveryDetails = () => {
	return (
		<Block title="Delivery Details">
			<div className="dilevery-details-block-container">
				{dileveryDetails.map((item, index) => {
					return (
						<div
							key={index}
							className="dilevery-details-block-container__dilevery-details-block"
						>
							<div className="dilevery-details-block-container__dilevery-details-block__svg-container">
								{item.svg}
							</div>
							<h2 key={index}>{item.term}</h2>
						</div>
					);
				})}
			</div>
		</Block>
	);
};

export default DileveryDetails;
