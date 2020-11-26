import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			height={512}
			viewBox="0 0 192 192"
			width={512}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M155.109 74.028a4 4 0 00-3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 00-7.373-2.614L36.917 113.905A4 4 0 0040.324 120h51.617l-6.962 67.224a4.024 4.024 0 007.411 2.461l62.671-111.63a4 4 0 00.048-4.027z"
			/>
		</svg>
	);
}

export default SvgComponent;
