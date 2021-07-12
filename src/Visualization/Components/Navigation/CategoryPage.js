import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductLogic from '../../../Logic/ProductLogic';
import ProductPreview from './ProductPreview';
import '../Styles/CategoryPage.css';
import FiltersBar from './FiltersBar';
import PageNavigation from '../Main/PageNavigation';
import Component_PageNavigationAdapter from '../Main/Adapters/Component_PageNavigationAdapter';
import Logic_ProductPreviewAdapter from './Adapters/Logic_ProductPreviewAdapter';
import MainTemplate from '../Main/MainTemplate';

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
	const page = query.get('page') !== null ? query.get('page') : '1';
	const perPage = 28;
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
		<MainTemplate>
			<div className="category-page">
				<FiltersBar updateProductsLink={`/product/category/${category}?`} />
				<div className="product-grid-container">
					<div className="product-grid">
						{products
							.filter((_product, index) => {
								return (
									index >= (Number.parseInt(page) - 1) * perPage &&
									index <= Number.parseInt(page) * perPage - 1
								);
							})
							.map((product, index) => {
								return (
									<ProductPreview
										{...Logic_ProductPreviewAdapter(product)}
										key={index}
									/>
								);
							})}
					</div>
					{products.length > perPage ? (
						<PageNavigation
							{...Component_PageNavigationAdapter({
								currentPage: page,
								numberOfPages: Math.ceil(products.length / perPage),
								newPageLink: `/product/category/${category}?from=${priceRangeFrom}&to=${priceRangeTo}&page=`,
							})}
						/>
					) : null}
				</div>
			</div>
		</MainTemplate>
	);
};

export default CategoryPage;
