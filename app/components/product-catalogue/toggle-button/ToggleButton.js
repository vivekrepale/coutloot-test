import React, { Fragment } from "react";

const ToggleButton = (props) => {
	return (
		<Fragment>
			<label className="toggle-button">
				<input
					id="checkbox"
					type="checkbox"
					onChange={() => props.setAssured(!props.assured)}
				/>
				<span className="slider round"></span>
			</label>
		</Fragment>
	);
};

export default ToggleButton;
