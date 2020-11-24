import React from "react";

import Product from "../product/Product.js";

const SellerDetails = (props) => {
	return (
		<div className="seller-details-container">
			<div className="block__title">
				<div className="block__title__title">
					More Product from Seller
				</div>
			</div>
			<div className="seller-details-container__seller">
				<div className="seller-details-container__seller__left">
					<img
						src={props.seller.profilePic}
						alt="Coutloot: seller-avatar"
					/>
					<div className="seller-details-container__seller__left__right">
						<h2>{props.seller.name}</h2>
						<h3>{props.seller.city}</h3>
					</div>
				</div>
				<div className="seller-details-container__seller__right">
					<button>Follow</button>
				</div>
			</div>
			<div className="seller-details-container__more-products">
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
		</div>
	);
};

export default SellerDetails;
