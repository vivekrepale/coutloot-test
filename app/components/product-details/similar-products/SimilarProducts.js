import React from "react";

import Block from "../block/Block.js";
import Product from "../product/Product.js";

const SimilarProducts = (props) => {
	return (
		<Block similarProducts={true} title="Similar Products">
			<div className="similar-products-container">
				{props.similarProducts.map((product, index) => {
					return (
						<Product
							key={index}
							image={product.images.mainImages[0]}
							name={product.details.title}
							labelPrice={
								product.details.variants[0].priceDetails
									.labelPrice
							}
							listedPrice={
								product.details.variants[0].priceDetails
									.listedPrice
							}
							discount={
								product.details.variants[0].priceDetails
									.percentOff
							}
						/>
					);
				})}
			</div>
		</Block>
	);
};

export default SimilarProducts;
