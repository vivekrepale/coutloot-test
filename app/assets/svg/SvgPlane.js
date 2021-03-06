import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 425.062 425.062"
			{...props}
		>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M186.966 99.912a32.079 32.079 0 00-20.446-7.381h-20.05a2 2 0 00-1.577 3.224l50.442 64.744 65.4.105-73.769-60.692z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				d="M395.579 176.531h-.013l-321.954-.37a29.513 29.513 0 01-25.56-14.549l-28.238-34.14a11.16 11.16 0 00-8.623-4.057C5.011 123.414.001 128.424 0 134.604c0 1.62.351 3.221 1.03 4.691l30.564 66.221c.058.126.113.253.164.381a13.945 13.945 0 0011 8.894L195.15 231.21a8 8 0 015.045 13.354l-77.52 84.713a2 2 0 001.554 3.254h29.43c7.678 0 15.1-2.76 20.913-7.776.063-.055.126-.1.191-.158l102.3-82.918a8.039 8.039 0 015.182-1.784l113.4 2.053c16.227-.041 29.417-14.777 29.417-32.709.001-18.26-12.95-32.708-29.483-32.708z"
			/>
		</svg>
	);
}

export default SvgComponent;
