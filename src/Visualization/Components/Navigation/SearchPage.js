import React, { useState, useEffect } from 'react';
import ProductPreview from './ProductPreview';
import ProductLogic from '../../../Logic/ProductLogic';
import { useLocation } from 'react-router-dom';
import PageNavigation from '../Main/PageNavigation';
import '../Styles/SearchPage.css';
import Component_PageNavigationAdapter from '../Main/Adapters/Component_PageNavigationAdapter';

const SearchPage = () => {
	const query = new URLSearchParams(useLocation().search);
	const searchTerm = query.get('search_term');
	const page = query.get('page') !== null ? query.get('page') : '1';
	const perPage = 28;
	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchResults = async () => {
			setResults(await ProductLogic.getProducts(searchTerm));
		};

		fetchResults();
	}, [searchTerm]);

	return (
		<div className="search-page">
			<div className="product-grid">
				{results
					.filter((_result, index) => {
						return (
							index >= (Number.parseInt(page) - 1) * perPage &&
							index <= Number.parseInt(page) * perPage - 1
						);
					})
					.map((result, index) => {
						return (
							<ProductPreview
								picture={result.pictures[0]}
								{...result}
								key={index}
							/>
						);
					})}
			</div>
			{results.length > perPage ? (
				<PageNavigation
					{...Component_PageNavigationAdapter({
						currentPage: page,
						newPageLink: `/product/search?search_term=${searchTerm}&page=`,
						numberOfPages: Math.ceil(results.length / perPage),
					})}
				/>
			) : null}
		</div>
	);
};

export default SearchPage;
