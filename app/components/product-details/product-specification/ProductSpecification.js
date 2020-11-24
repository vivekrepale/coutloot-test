import React from "react";

import Block from "../block/Block.js";

const ProductSpecification = (props) => {
	return (
		<Block title="Product Specification">
			<div className="product-specification-container">
				{props.productAttributes.map((item, index) => {
					return (
						<div
							key={index}
							className="product-specification-container__specification"
						>
							<div className="product-specification-container__specification__key">
								{item.key}
							</div>
							<div className="product-specification-container__specification__value">
								{`:\u00A0\u00A0\u00A0${item.value}`}
							</div>
						</div>
					);
				})}
			</div>
		</Block>
	);
};

export default ProductSpecification;
