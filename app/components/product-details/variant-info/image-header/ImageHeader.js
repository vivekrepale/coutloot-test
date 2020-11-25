import React from "react";

const ImageHeader = (props) => {
	return (
		<div className="image-header-container">
			<img
				className="image-header-container__image"
				src={props.selectedVariantImage}
				alt="Coutloot: product-image"
			/>
		</div>
	);
};

export default ImageHeader;
