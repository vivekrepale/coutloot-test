import React from "react";

import ImageHeader from "./image-header/ImageHeader.js";
import Bar from "./bar/Bar.js";
import MoreColors from "./more-colors/MoreColors.js";
import ProductInfo from "./product-info/ProductInfo.js";

const VariantInfo = (props) => {
	const {
		listedPrice,
		labelPrice,
		percentOff,
	} = props.selectedVariant.priceDetails;

	return (
		<div className="variant-info-container">
			<ImageHeader selectedVariantImage={props.selectedVariantImage} />
			<Bar></Bar>
			<ProductInfo
				listedPrice={listedPrice}
				labelPrice={labelPrice}
				discount={percentOff}
				name={props.productDetails.details.title}
			/>
			<hr />
			<MoreColors
				// selectedVariantImage={props.selectedVariantImage}
				setSelectedVariant={props.setSelectedVariant}
				setSelectedVariantImage={props.setSelectedVariantImage}
				productDetails={props.productDetails}
			/>
			<hr />
		</div>
	);
};

export default VariantInfo;

/*<ProductInfo
				listedPrice={props.selectedVariant.priceDetails.listedPrice}
				labelPrice={props.selectedVariant.priceDetails.labelPrice}
				discount={props.selectedVariant.priceDetails.percentOff}
				name={props.productDetails.details.title}
			/>*/
