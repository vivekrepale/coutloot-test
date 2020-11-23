import React from "react";

const Filters = () => {
	return (
		<div className="filters-container">
			<div className="filters-container__block">
				<label for="cars">
					<h3 className="filters-container__block__text">Sort by</h3>
				</label>
				<div className="custom-select">
					<select className="select" name="cars" id="cars">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</div>
			</div>
			<div className="filters-container__block middle">
				<label for="cars">
					<h3 className="filters-container__block__text">Filters</h3>
				</label>
				<select className="select" name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="opel">Opel</option>
					<option value="audi">Audi</option>
				</select>
			</div>
			<div className="filters-container__block">
				<label for="cars">
					<h3 className="filters-container__block__text">Nearby</h3>
				</label>
				<select className="select" name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="opel">Opel</option>
					<option value="audi">Audi</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
