import React, { useEffect } from "react";

const Block = (props) => {
	const blockStyleGenerator = () => {
		if (props.svg) {
			return { gridTemplateColumns: "max-content max-content" };
		} else if (props.subTitle) {
			return { gridTemplateColumns: "max-content 1fr" };
		} else {
			return { gridTemplateColumns: "1fr" };
		}
	};

	let styles = blockStyleGenerator();

	// useEffect(() => {
	// 	styles.push(blockStyleGenerator());
	// }, []);

	console.log("style", styles);
	return (
		<div className="block">
			<div style={{ ...styles }} className="block__title">
				{props.svg ? (
					<div className="block__title__svg">{props.svg}</div>
				) : (
					""
				)}

				<div className="block__title__title">{props.title}</div>

				{props.subTitle ? (
					<div className="block__title__sub-title">
						{props.subTitle}
					</div>
				) : (
					""
				)}
			</div>
			<div
				className={
					props.similarProducts
						? "block__content block__content--similar-products"
						: "block__content"
				}
			>
				{props.children}
			</div>
		</div>
	);
};

export default Block;
