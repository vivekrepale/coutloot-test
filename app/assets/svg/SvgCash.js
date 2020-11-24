import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={14.94}
			height={9.493}
			viewBox="0 0 14.94 9.493"
			{...props}
		>
			<defs>
				<style>{".prefix__a{fill:#76848b}"}</style>
			</defs>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				className="prefix__a"
				d="M1.631 7.731h9.917A1.631 1.631 0 0013.179 6.1V1.631A1.631 1.631 0 0011.548 0H1.631A1.631 1.631 0 000 1.631V6.1a1.631 1.631 0 001.631 1.631zm-.979-6.1a.979.979 0 01.979-.979h9.917a.979.979 0 01.979.979V6.1a.979.979 0 01-.979.979H1.631A.979.979 0 01.652 6.1z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				className="prefix__a"
				d="M6.589 5.791a1.925 1.925 0 10-1.941-1.925 1.925 1.925 0 001.941 1.925zm0-3.213A1.272 1.272 0 115.317 3.85a1.289 1.289 0 011.272-1.273zM14.94 2.74a.326.326 0 10-.652 0v4.8a1.3 1.3 0 01-1.3 1.3h-9.3a.326.326 0 100 .652h9.3a1.957 1.957 0 001.957-1.957z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				className="prefix__a"
				d="M9.965 6.132h1.289a.326.326 0 000-.652H9.965a.326.326 0 100 .652zM1.924 2.25h1.289a.326.326 0 100-.652H1.924a.326.326 0 100 .652z"
			/>
		</svg>
	);
}

export default SvgComponent;
