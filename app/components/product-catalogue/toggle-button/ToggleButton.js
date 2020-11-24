import React, { Fragment } from "react";

const ToggleButton = () => {
	return (
		<Fragment>
			<label className="toggle-button">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</Fragment>
	);
};

export default ToggleButton;
