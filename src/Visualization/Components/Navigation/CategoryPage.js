import React, { useEffect, useState } from 'react';
import ProductLogic from '../../../Logic/ProductLogic';
import ProductPreview from './ProductPreview';
import '../Styles/CategoryPage.css';

const CategoryPage = ({ match }) => {
	const {
		params: { category },
	} = match;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchCategoryProducts = async () => {
			setProducts(
				await ProductLogic.filterProducts(
					(product) => product.category === category
				)
			);
		};
		fetchCategoryProducts();
	}, [category]);

	return (
		<div className="category-page">
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
	);
};

export default CategoryPage;
