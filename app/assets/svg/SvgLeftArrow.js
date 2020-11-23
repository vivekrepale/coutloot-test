import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={64}
			height={64}
			viewBox="0 0 64 64"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				strokeWidth={5}
				strokeLinejoin="bevel"
				strokeMiterlimit={10}
				d="M37 15L20 32l17 17"
			/>
		</svg>
	);
}

export default SvgComponent;
