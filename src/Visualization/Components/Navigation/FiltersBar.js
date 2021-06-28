import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/FiltersBar.css';

const FiltersBar = (props) => {
	return (
		<div className="filters-bar">
			<label>Preço</label>
			<Link
				className="price-range-link"
				to={props.updateProductsLink + 'from=0&to=100'}
			>
				R$ 0.00 — R$ 100.00
			</Link>
			<Link
				className="price-range-link"
				to={props.updateProductsLink + 'from=100&to=500'}
			>
				R$ 100.00 — R$ 500.00
			</Link>
			<Link
				className="price-range-link"
				to={props.updateProductsLink + 'from=500&to=1000'}
			>
				R$ 500.00 — R$ 1000.00
			</Link>
			<Link
				className="price-range-link"
				to={props.updateProductsLink + 'from=1000&to=5000'}
			>
				R$ 1000.00 — R$ 5000.00
			</Link>
			<Link
				className="price-range-link"
				to={props.updateProductsLink + 'from=5000'}
			>
				R$ 5000.00 —
			</Link>
		</div>
	);
};

FiltersBar.propTypes = {
	updateProductsLink: PropTypes.string,
};

export default FiltersBar;
