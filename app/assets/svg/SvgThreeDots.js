import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				cx={256}
				cy={256}
				r={64}
			/>
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				cx={256}
				cy={448}
				r={64}
			/>
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				cx={256}
				cy={64}
				r={64}
			/>
		</svg>
	);
}

export default SvgComponent;
