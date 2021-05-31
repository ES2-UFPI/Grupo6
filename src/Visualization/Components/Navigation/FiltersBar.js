import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/FiltersBar.css';

const FiltersBar = (props) => {
	return (
		<div className="filters-bar">
			<label>Preço</label>
			<button
				className="price-range-button"
				onClick={(_e) => props.updateProducts([0, 100])}
			>
				R$ 0.00 — R$ 100.00
			</button>
			<button
				className="price-range-button"
				onClick={(_e) => props.updateProducts([100, 500])}
			>
				R$ 100.00 — R$ 500.00
			</button>
			<button
				className="price-range-button"
				onClick={(_e) => props.updateProducts([500, 1000])}
			>
				R$ 500.00 — R$ 1000.00
			</button>
			<button
				className="price-range-button"
				onClick={(_e) => props.updateProducts([1000, 5000])}
			>
				R$ 1000.00 — R$ 5000.00
			</button>
			<button
				className="price-range-button"
				onClick={(_e) => props.updateProducts([5000, null])}
			>
				R$ 5000.00 —
			</button>
		</div>
	);
};

FiltersBar.propTypes = {
	updateProducts: PropTypes.func,
};

export default FiltersBar;
