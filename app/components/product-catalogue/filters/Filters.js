import React, { useState } from "react";

const Filters = () => {
	const [selectedSort, setSelectedSort] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState(false);
	const [selectedNearBy, setSelectedNearBy] = useState(false);

	return (
		<div className="filters-container">
			<div className="filters-container__block">
				<label>
					<h3
						style={
							selectedSort
								? { color: "#ef3d53" }
								: { color: "#1c1c1c" }
						}
						className="filters-container__block__text"
					>
						Sort by
					</h3>
				</label>

				<select
					className="select"
					name="sort by"
					id="sort by"
					onChange={(e) => {
						if (e.target.value != "select") {
							setSelectedSort(true);
							// alert(e.target.value);
						} else {
							setSelectedSort(false);
						}
						// if (e.target.value == "select") {
						// }
					}}
				>
					<option className="select__options" value="select">
						Select
					</option>
					<option className="select__options" value="High to low">
						High to low
					</option>
					<option className="select__options" value="Low to high">
						Low to high
					</option>
				</select>
			</div>
			<div className="filters-container__block middle">
				<label>
					<h3
						style={
							selectedFilters
								? { color: "#ef3d53" }
								: { color: "#1c1c1c" }
						}
						className="filters-container__block__text"
					>
						Filters
					</h3>
				</label>
				<select
					className="select"
					name="filters"
					id="filters"
					onChange={(e) => {
						if (e.target.value != "select") {
							setSelectedFilters(true);
							// alert(e.target.value);
						} else {
							setSelectedFilters(false);
						}
					}}
				>
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
					<h3
						style={
							selectedNearBy
								? { color: "#ef3d53" }
								: { color: "#1c1c1c" }
						}
						className="filters-container__block__text"
					>
						Nearby
					</h3>
				</label>
				<select
					className="select"
					name="near by"
					id="near by"
					onChange={(e) => {
						if (e.target.value != "select") {
							setSelectedNearBy(true);
							// alert(e.target.value);
						} else {
							setSelectedNearBy(false);
						}
					}}
				>
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
