import React, { useEffect, useState } from 'react';
import ProductLogic from '../../../Logic/ProductLogic';
import ProductPreview from './ProductPreview';
import '../Styles/CategoryPage.css';
import FiltersBar from './FiltersBar';

const CategoryPage = ({ match }) => {
	const {
		params: { category },
	} = match;
	const [products, setProducts] = useState([]);
	const [priceRange, setPriceRange] = useState([null, null]);

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
			<FiltersBar updateProducts={setPriceRange} />
			<div className="product-grid">
				{products
					.filter((product) => {
						return (
							(priceRange[0] === null || product.price > priceRange[0]) &&
							(priceRange[1] === null || product.price <= priceRange[1])
						);
					})
					.map((product, index) => {
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
