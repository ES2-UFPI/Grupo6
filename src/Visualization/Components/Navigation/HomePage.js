/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useMemo } from 'react';
import ProductLogic from '../../../Logic/ProductLogic';
import Logic_HomePageAdapter from './Adapters/Logic_HomePageAdapter';
import Logic_ProductPreviewAdapter from './Adapters/Logic_ProductPreviewAdapter';
import '../Styles/HomePage.css';
import ProductPreview from './ProductPreview';
import AdRow from '../Main/AdRow';

const HomePage = () => {
	const limit = 32;
	const categories = useMemo(() => ['tech', 'livros', 'cosmeticos'], []);
	const [categoryProducts, setCategoryProducts] = useState(
		categories.map((_c) => [])
	);

	useEffect(() => {
		const fetchProducts = async () => {
			setCategoryProducts(
				await Promise.all(
					categories.map(async (category) => {
						const rawProducts = await ProductLogic.getProducts(
							null,
							null,
							category
						);
						return Logic_HomePageAdapter(rawProducts);
					})
				)
			);
		};

		fetchProducts();
	}, [categories]);

	return (
		<div className="home-page">
			<AdRow />
			{categories.map((category, categoryIndex) => {
				return (
					<div className="home-page-category-section" key={categoryIndex}>
						<h2>{category}</h2>
						<div className="product-grid">
							{categoryProducts[categoryIndex]
								.filter((_p, index) => index < limit)
								.map((product, index) => {
									return (
										<ProductPreview
											{...Logic_ProductPreviewAdapter(product)}
											key={index}
										/>
									);
								})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

//logo: https://i.imgur.com/xKf5ztQ.png
//logo micro: https://i.imgur.com/HKOM9l3.jpg
//logo 66px: https://i.imgur.com/cXCcFKH.jpg
//profile picture test: https://i.imgur.com/OwMJFsw.png
//micro profile picture test: https://i.imgur.com/wQtFcqM.png
//https://i.imgur.com/cCzIZYI.png

//Colors
//Verde - #7DD359
//Cinza - #737373

export default HomePage;
