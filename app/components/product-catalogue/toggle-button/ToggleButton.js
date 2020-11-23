import React, { Fragment } from "react";

const ToggleButton = () => {
	return (
		<Fragment>
			<label class="toggle-button">
				<input type="checkbox" />
				<span class="slider round"></span>
			</label>
		</Fragment>
	);
};

export default ToggleButton;
