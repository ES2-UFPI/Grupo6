import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductLogic from '../../../Logic/ProductLogic';
import Logic_HomePageAdapter from './Adapters/Logic_HomePageAdapter';
import Logic_ProductPreviewAdapter from './Adapters/Logic_ProductPreviewAdapter';
import '../Styles/HomePage.css';
import ProductPreview from './ProductPreview';
import AdRow from '../Main/AdRow';
import UserLogic from '../../../Logic/UserLogic';

const HomePage = () => {
	const limit = 32;
	const [categories, setCategories] = useState([]);
	const [categoryProducts, setCategoryProducts] = useState(
		categories.map((_c) => [])
	);
	const userSelector = useSelector((state) => state.user.userId);

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

	useEffect(() => {
		const fetchFavoriteCategories = async () => {
			setCategories(await UserLogic.getFavoriteCategories(userSelector));
		};

		fetchFavoriteCategories();
	}, [userSelector]);

	return (
		<div className="home-page">
			<AdRow />
			{categories.map((category, categoryIndex) => {
				return (
					<div className="home-page-category-section" key={categoryIndex}>
						<h2>{category}</h2>
						<div className="product-grid">
							{categoryProducts.length === categories.length
								? categoryProducts[categoryIndex]
										.filter((_p, index) => index < limit)
										.map((product, index) => {
											return (
												<ProductPreview
													{...Logic_ProductPreviewAdapter(product)}
													key={index}
												/>
											);
										})
								: null}
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
