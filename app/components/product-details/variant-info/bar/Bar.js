import React, { useState } from "react";

import CoutlootLogo from "../../../../assets/images/coutloot.png";
import SvgPlane from "../../../../assets/svg/SvgPlane.js";
import SvgHeart from "../../../../assets/svg/SvgHeart.js";
import SvgShare from "../../../../assets/svg/SvgShare.js";

const Bar = (props) => {
	const [liked, setLiked] = useState(false);
	const [count, setCount] = useState(23);

	const handleLike = () => {
		setLiked((prevState) => !prevState);
		if (liked) {
			setCount((prevCount) => prevCount - 1);
		} else {
			setCount((prevCount) => prevCount + 1);
		}
	};

	const handleShare = () => {
		alert("Edit the handleShare funtion.");
	};

	return (
		<div className="bar-container">
			<div className="bar-container__left">
				<div className="bar-container__left__first">
					<SvgPlane
						fill="#fff"
						className="bar-container__left__first__svg"
					/>
					<h2>INTERNATIONAL</h2>
				</div>
				<div className="bar-container__left__second">
					<img
						src={CoutlootLogo}
						alt="Coutloot: logo"
						className="bar-container__left__second__image"
					/>
					<h2>ASSURED</h2>
				</div>
			</div>
			<div className="bar-container__right">
				<SvgShare
					fill="#000"
					stroke="#76848B"
					className="bar-container__right__first-svg"
					onClick={handleShare}
				/>

				<div className="bar-container__right__second">
					<SvgHeart
						fill={liked ? "#F14153" : "#FFF"}
						stroke={liked ? "#F14153" : "#76848B"}
						className="bar-container__right__second__svg"
						onClick={handleLike}
					/>
					<h3>{count}</h3>
				</div>
			</div>
		</div>
	);
};

export default Bar;
