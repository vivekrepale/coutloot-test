import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={8.304}
			height={17.689}
			viewBox="0 0 8.304 17.689"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M8.179 7.447H5.571L7.507.407A.322.322 0 007.196 0h-4.97a.3.3 0 00-.289.234L.006 9.307a.126.126 0 00.12.153h3.065l-2.26 8.1a.1.1 0 00.181.087l7.17-10a.126.126 0 00-.1-.2z"
				fill="#fff"
			/>
		</svg>
	);
}

export default SvgComponent;
