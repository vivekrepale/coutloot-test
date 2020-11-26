import React from "react";

const Filters = () => {
	return (
		<div className="filters-container">
			<div className="filters-container__block">
				<label>
					<h3 className="filters-container__block__text">Sort by</h3>
				</label>

				<select className="select" name="sort by" id="sort by">
					<option className="select__options" value="select">
						Select
					</option>
					<option className="select__options" value="HtoL">
						High to low
					</option>
					<option className="select__options" value="LtoH">
						Low to high
					</option>
				</select>
			</div>
			<div className="filters-container__block middle">
				<label>
					<h3 className="filters-container__block__text">Filters</h3>
				</label>
				<select className="select" name="filters" id="filters">
					<option className="select__options" value="select">
						Select
					</option>
					<option className="select__options" value="price">
						Price
					</option>
					<option className="select__options" value="type">
						Type
					</option>
					<option className="select__options" value="location">
						Location
					</option>
				</select>
			</div>
			<div className="filters-container__block">
				<label>
					<h3 className="filters-container__block__text">Nearby</h3>
				</label>
				<select className="select" name="near by" id="near by">
					<option className="select__options" value="select">
						Select
					</option>
					<option className="select__options" value="saab">
						Mumbai
					</option>
					<option className="select__options" value="opel">
						Pune
					</option>
					<option className="select__options" value="audi">
						Bangaluru
					</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
