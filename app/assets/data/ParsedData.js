import React from "react";

import data from "./product-details.json";

import SvgDilevery from "../svg/SvgDilevery.js";
import SvgReturn from "../svg/SvgReturn.js";
import SvgCash from "../svg/SvgCash.js";
import SvgDiscount from "../svg/SvgDiscount.js";
import SvgMoney from "../svg/SvgMoney.js";

export const dileveryDetails = [
	{
		svg: (
			<SvgDilevery
				className="dilevery-details-block-container__dilevery-details-block__svg-container__svg"
				fill="#76848b"
			/>
		),
		term: data.product.terms[0],
	},
	{
		svg: (
			<SvgCash
				className="dilevery-details-block-container__dilevery-details-block__svg-container__svg"
				fill="#76848b"
			/>
		),
		term: data.product.terms[1],
	},
	{
		svg: (
			<SvgReturn
				className="dilevery-details-block-container__dilevery-details-block__svg-container__svg"
				fill="#76848b"
			/>
		),
		term: data.product.terms[2],
	},
];

export const availableOffers = [
	{
		svg: (
			<SvgDiscount
				className="dilevery-details-block-container__dilevery-details-block__svg-container__svg"
				// fill="#76848b"
			/>
		),
		offer: data.product.availableOffers[0],
	},
	{
		svg: (
			<SvgMoney
				className="dilevery-details-block-container__dilevery-details-block__svg-container__svg"
				// fill="#76848b"
			/>
		),
		offer: data.product.availableOffers[1],
	},
];
