import React, { useState, useEffect } from "react";

import Block from "./block/Block.js";
import AvailableOffers from "./available-offers/AvailableOffers.js";
import DileveryDetails from "./dilevery-details/DileverDetails.js";
import SelectSize from "./select-size/SelectSize.js";
import ProductSpecification from "./product-specification/ProductSpecification.js";
import SimilarProducts from "./similar-products/SimilarProducts.js";
import Review from "./review/Review.js";
import SellerDetails from "./seller-details/SellerDetails.js";
import Footer from "./footer/Footer.js";
import CTA from "./call-to-action/CTA.js";
import VariantInfo from "./variant-info/VariantInfo.js";

import data from "../../assets/data/product-details1.json";
import similarProducts from "../../assets/data/selected-products.json";

import SvgDilevery from "../../assets/svg/SvgDilevery.js";
import SvgReturn from "../../assets/svg/SvgReturn.js";
import SvgCash from "../../assets/svg/SvgCash.js";
import SvgDiscount from "../../assets/svg/SvgDiscount.js";
import SvgDiscount2 from "../../assets/svg/SvgDiscount2.js";
import SvgMoney from "../../assets/svg/SvgMoney.js";

const ProductDetails = () => {
	const availableOffersSvg = (
		<SvgDiscount2
			fill="#00C853"
			stroke="#00C853"
			className="block__title__svg"
		/>
	);

	const [selectedVariant, setSelectedVariant] = useState();
	const [selectedVariantImage, setSelectedVariantImage] = useState();

	useEffect(() => {
		setSelectedVariant(data.product.details.variants[0]);
		setSelectedVariantImage(data.product.images.mainImages[0]);
	}, []);

	return (
		<div className="pd-container">
			{selectedVariant ? (
				<VariantInfo
					selectedVariant={selectedVariant}
					setSelectedVariant={setSelectedVariant}
					selectedVariantImage={selectedVariantImage}
					setSelectedVariantImage={setSelectedVariantImage}
					productDetails={data.product}
				/>
			) : (
				""
			)}
			<SelectSize />
			<ProductSpecification
				productAttributes={data.product.details.productAttributes}
			/>
			<Block title="Description">
				{data.product.details.description}
			</Block>
			<Review rating={data.product.details.imageRating} />
			<SimilarProducts similarProducts={similarProducts.products} />
			<DileveryDetails />
			<AvailableOffers svg={availableOffersSvg} />
			<SellerDetails
				seller={data.product.sellerDetails}
				similarProducts={similarProducts.products}
			/>
			<Footer images={data.product.footer} />
			<CTA />
		</div>
	);
};

export default ProductDetails;
