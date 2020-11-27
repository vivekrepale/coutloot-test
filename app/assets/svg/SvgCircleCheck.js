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
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				strokeWidth={2}
				strokeMiterlimit={10}
				cx={32}
				cy={32}
				r={30.999}
			/>
			<path
				fill="none"
				stroke="#fff"
				strokeWidth={6}
				strokeLinejoin="bevel"
				strokeMiterlimit={10}
				d="M13 33l12 12 24-24"
			/>
		</svg>
	);
}

export default SvgComponent;
