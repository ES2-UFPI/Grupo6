import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductLogic from '../../../Logic/ProductLogic';
import ProductPreview from './ProductPreview';
import '../Styles/CategoryPage.css';
import FiltersBar from './FiltersBar';

const CategoryPage = ({ match }) => {
	const {
		params: { category },
	} = match;
	const query = new URLSearchParams(useLocation().search);
	const priceRangeFrom =
		query.get('from') !== null ? Number.parseInt(query.get('from')) : 0;
	const priceRangeTo =
		query.get('to') !== null
			? Number.parseInt(query.get('to'))
			: Number.MAX_SAFE_INTEGER;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			setProducts(
				await ProductLogic.getProducts(
					null,
					[priceRangeFrom, priceRangeTo],
					category
				)
			);
		};
		fetchProducts();
	}, [category, priceRangeTo, priceRangeFrom]);

	return (
		<div className="category-page">
			<FiltersBar updateProductsLink={`/product/category/${category}?`} />
			<div className="product-grid">
				{products.map((product, index) => {
					return (
						<ProductPreview
							picture={product.pictures[0]}
							{...product}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryPage;
