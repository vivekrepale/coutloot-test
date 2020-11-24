import React from "react";

import Block from "../block/Block.js";

const SelectSize = () => {
	return (
		<Block title="Select Size" subTitle="(Size Chart)">
			<div className="size-buttons-container">
				<button className="size-buttons-container__button">
					Small
				</button>
				<button className="size-buttons-container__button">
					Medium
				</button>
				<button className="size-buttons-container__button">
					Large
				</button>
			</div>
		</Block>
	);
};

export default SelectSize;
