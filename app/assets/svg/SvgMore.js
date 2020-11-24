import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={3.584}
			height={15.882}
			viewBox="0 0 3.584 15.882"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M0 14.09a1.792 1.792 0 111.792 1.792A1.8 1.8 0 010 14.09zM1.792 3.584A1.792 1.792 0 100 1.792a1.8 1.8 0 001.792 1.792zm0 6.149A1.792 1.792 0 100 7.941a1.8 1.8 0 001.792 1.792z"
				fill="#fff"
			/>
		</svg>
	);
}

export default SvgComponent;
