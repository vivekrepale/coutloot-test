import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={11.474}
			height={13.157}
			viewBox="0 0 11.474 13.157"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M10.794 5.25a5.711 5.711 0 00-1.165-1.731 5.311 5.311 0 00-1.735-1.17 5.773 5.773 0 00-1.759-.43v-1.4L2.426 2.658l3.685 2.116V3.395a4 4 0 11-4.326 4.612.724.724 0 00-.737-.618h0a.745.745 0 00-.737.856 5.37 5.37 0 001.521 3.019 5.311 5.311 0 001.735 1.165 5.457 5.457 0 002.139.428 5.544 5.544 0 002.139-.428 5.711 5.711 0 001.735-1.165 5.311 5.311 0 001.165-1.735 5.458 5.458 0 00.428-2.139 5.094 5.094 0 00-.379-2.14z"
				fill="#76848b"
				stroke="#fff"
				strokeWidth={0.6}
			/>
		</svg>
	);
}

export default SvgComponent;
