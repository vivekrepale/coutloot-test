import React, { useState } from "react";

import Block from "../block/Block.js";

const SelectSize = () => {
	const [selectedSize, setSelectedSize] = useState(0);
	return (
		<Block title="Select Size" subTitle="(Size Chart)">
			<div className="size-buttons-container">
				<button
					style={
						selectedSize == "0"
							? {
									border: "0.5px solid #E3414F",
									backgroundColor: "#FFEAEC",
									color: "#E3414F",
							  }
							: {
									border: "0.5px solid #76848B",
									backgroundColor: "transparent",
									color: "#76848B",
							  }
					}
					className="size-buttons-container__button"
					onClick={() => setSelectedSize(0)}
				>
					Small
				</button>
				<button
					style={
						selectedSize == "1"
							? {
									border: "0.5px solid #E3414F",
									backgroundColor: "#FFEAEC",
									color: "#E3414F",
							  }
							: {
									border: "0.5px solid #76848B",
									backgroundColor: "transparent",
									color: "#76848B",
							  }
					}
					className="size-buttons-container__button"
					onClick={() => setSelectedSize(1)}
				>
					Medium
				</button>
				<button
					style={
						selectedSize == "2"
							? {
									border: "0.5px solid #E3414F",
									backgroundColor: "#FFEAEC",
									color: "#E3414F",
							  }
							: {
									border: "0.5px solid #76848B",
									backgroundColor: "transparent",
									color: "#76848B",
							  }
					}
					className="size-buttons-container__button"
					onClick={() => setSelectedSize(2)}
				>
					Large
				</button>
			</div>
		</Block>
	);
};

export default SelectSize;
