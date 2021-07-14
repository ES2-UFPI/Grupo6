import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserLogic from '../../../Logic/UserLogic';
import '../Styles/ProductPreview.css';

const ProductPreview = (props) => {

	/*async function addCategory(){
		await UserLogic.addCategory(props.category)
	}*/

	return (
		<Link to={`/product/${props.id}`} className="product-preview" onClick={''/*addCategory()*/}>
			<div className="top-section">
				<img src={props.picture} alt={props.name} />
			</div>
			<div className="info-section">
				<span className="product-name-span">{props.name}</span>
				<span className="product-price-span">
					{'R$ ' + props.price.toFixed(2).toString()}
				</span>
			</div>
			<div className="bottom-section">
				{props.tags.map((tag, index) => {
					return (
						<span className="tag-span" key={index}>
							{tag}
						</span>
					);
				})}
			</div>
		</Link>
	);
};

ProductPreview.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	picture: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProductPreview;
