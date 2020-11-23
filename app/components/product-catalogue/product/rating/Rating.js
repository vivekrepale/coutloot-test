import React from "react";

import SvgStarGrey from "../../../../assets/svg/SvgStarGrey.js";
import SvgStarYellow from "../../../../assets/svg/SvgStarYellow.js";

const Rating = (props) => {
	const rating_stars = [];

	for (let i = 1; i <= 5; i++) {
		i <= props.rating
			? rating_stars.push(
					<SvgStarYellow
						className="rating-container__svg-grey"
						key={i}
					/>
			  )
			: rating_stars.push(
					<SvgStarGrey
						className="rating-container__svg-grey"
						key={i}
					/>
			  );
	}

	return <div className="rating-container">{rating_stars}</div>;
};

export default Rating;
