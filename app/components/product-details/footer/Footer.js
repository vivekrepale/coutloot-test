import React from "react";

const Footer = (props) => {
	return (
		<div className="footer-container">
			{props.images.map((image, index) => {
				return (
					<img key={index} src={image} alt="Coutloot: footer-image" />
				);
			})}
		</div>
	);
};

export default Footer;
