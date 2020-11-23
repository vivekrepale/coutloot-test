import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={12.278}
			height={11.766}
			viewBox="0 0 12.278 11.766"
			{...props}
		>
			<path
				d="M12.246 4.446a.651.651 0 00-.562-.449L8.14 3.676 6.739.396a.653.653 0 00-1.2 0l-1.4 3.279-3.546.323a.653.653 0 00-.37 1.142L2.9 7.489l-.79 3.479a.652.652 0 00.97.7l3.057-1.827 3.056 1.827a.652.652 0 00.971-.7l-.79-3.479 2.679-2.349a.653.653 0 00.193-.694zm0 0"
				fill="#eae9e5"
			/>
		</svg>
	);
}

export default SvgComponent;
