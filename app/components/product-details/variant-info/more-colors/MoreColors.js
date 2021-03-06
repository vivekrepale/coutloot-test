import React, { useState } from "react";

import SvgRupee from "../../../../assets/svg/SvgRupee.js";

const MoreColors = (props) => {
	const [selected, setSelected] = useState(0);
	return (
		<div className="more-colors-container">
			<h2>More Colors</h2>
			<div className="more-colors-container__items">
				<div className="more-colors-container__items__item">
					<div
						style={
							selected == "0"
								? { border: "1.5px solid #E3414F" }
								: {}
						}
						className="more-colors-container__items__item__image-container"
					>
						<img
							src={props.productDetails.images.mainImages[0]}
							alt="Coutloot: variant-image"
							className="more-colors-container__items__item__image-container__image"
							onClick={() => {
								props.setSelectedVariant(
									props.productDetails.details.variants[0]
								);
								props.setSelectedVariantImage(
									props.productDetails.images.mainImages[0]
								);
								setSelected(0);
							}}
						/>
					</div>
					<div className="more-colors-container__items__item__text">
						<SvgRupee fill="#362F2F" />
						<h3>
							{
								props.productDetails.details.variants[0]
									.priceDetails.listedPrice
							}
						</h3>
					</div>
				</div>
				<div className="more-colors-container__items__item">
					<div
						style={
							selected == "1"
								? { border: "1.5px solid #E3414F" }
								: {}
						}
						className="more-colors-container__items__item__image-container"
					>
						<img
							src={
								props.productDetails.moreColors[0].displayImage
							}
							alt="Coutloot: variant-image"
							className="more-colors-container__items__item__image-container__image"
							onClick={() => {
								props.setSelectedVariant(
									props.productDetails.details.variants[1]
								);
								props.setSelectedVariantImage(
									props.productDetails.moreColors[0]
										.displayImage
								);
								setSelected(1);
							}}
						/>
					</div>
					<div className="more-colors-container__items__item__text">
						<SvgRupee fill="#362F2F" />
						<h3>
							{
								props.productDetails.details.variants[1]
									.priceDetails.listedPrice
							}
						</h3>
					</div>
				</div>
				<div className="more-colors-container__items__item">
					<div
						style={
							selected == "2"
								? { border: "1.5px solid #E3414F" }
								: {}
						}
						className="more-colors-container__items__item__image-container"
					>
						<img
							src={
								props.productDetails.moreColors[1].displayImage
							}
							alt="Coutloot: variant-image"
							className="more-colors-container__items__item__image-container__image"
							onClick={() => {
								props.setSelectedVariant(
									props.productDetails.details.variants[2]
								);
								props.setSelectedVariantImage(
									props.productDetails.moreColors[1]
										.displayImage
								);
								setSelected(2);
							}}
						/>
					</div>
					<div className="more-colors-container__items__item__text">
						<SvgRupee fill="#362F2F" />
						<h3>
							{
								props.productDetails.details.variants[2]
									.priceDetails.listedPrice
							}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreColors;
