import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={17.515}
			height={9.102}
			viewBox="0 0 17.515 9.102"
			{...props}
		>
			<defs>
				<style>{".prefix__a{fill:#fff}"}</style>
			</defs>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				className="prefix__a"
				d="M17.424 1.003a2.486 2.486 0 00-2.938-.817l-3.7 1.515-5.491 2.245a1.585 1.585 0 01-1.133-.036L1.509 2.622a1.877 1.877 0 00-1.156-.1l-.243.07c-.134.039-.147.171-.03.3l2.706 2.884a2.911 2.911 0 003 .653L9.401 4.95 8.316 8.898c-.045.165.046.246.2.181l.3-.121a4.413 4.413 0 001.8-1.532l2.409-3.958 4.128-1.689a.518.518 0 00.271-.776z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "none"}
				className="prefix__a"
				d="M7.929 2.198l2.532-1.035-1.95-.851A4.275 4.275 0 005.945.175c-.165.045-.188.189-.057.3z"
			/>
		</svg>
	);
}

export default SvgComponent;
