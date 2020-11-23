import React, { useState } from "react";

import Product from "./product/Product.js";
import Navbar from "./navbar/Navbar.js";
import Filters from "./filters/Filters.js";

import data from "../../assets/data/product-catalogue.json";

import ToggleButton from "./toggle-button/ToggleButton.js";

import SvgCircleCheck from "../../assets/svg/SvgCircleCheck.js";

const ProductCatalogue = () => {
	const [products, setProducts] = useState([]);

	return (
		<div className="pc-container">
			<Navbar />
			<Filters />
			<div className="pc-container__assured-products-check">
				<SvgCircleCheck
					fill="#4FBA6F"
					className="pc-container__assured-products-check__svg"
				/>
				<h2>Show the assured products only</h2>
				<div className="pc-container__assured-products-check__toggle-button">
					<ToggleButton />
				</div>
			</div>
			<div className="pc-container__products">
				{data.products.map((product, index) => {
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
							rating={product.productRating}
						></Product>
					);
				})}
			</div>
		</div>
	);
};

export default ProductCatalogue;
