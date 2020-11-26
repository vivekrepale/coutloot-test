import React from "react";

import ImageHeader from "./image-header/ImageHeader.js";
import Bar from "./bar/Bar.js";
import MoreColors from "./more-colors/MoreColors.js";
import ProductInfo from "./product-info/ProductInfo.js";
import FlashSale from "./flash-sale/FlashSale.js";
import Timer from "./timer/Timer.js";

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
			<Timer selectedVariant={props.selectedVariant} />
			<hr />
			<MoreColors
				// selectedVariantImage={props.selectedVariantImage}
				setSelectedVariant={props.setSelectedVariant}
				setSelectedVariantImage={props.setSelectedVariantImage}
				productDetails={props.productDetails}
			/>
			<hr />
			<FlashSale />
		</div>
	);
};

export default VariantInfo;
