/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useMemo } from 'react';
import ProductLogic from '../../../Logic/ProductLogic';
import Logic_HomePageAdapter from './Adapters/Logic_HomePageAdapter';
import Logic_ProductPreviewAdapter from './Adapters/Logic_ProductPreviewAdapter';
import '../Styles/HomePage.css';
import ProductPreview from './ProductPreview';

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
			<div className="home-page-showcase">
				<label>Produtos Recomendados para você:</label>
				<div className="product-showcase">
					<div className="product-showcase-product">
						<img src="https://i.imgur.com/Ni6TMqg.jpg" />
						<div className="product-showcase-info">
							<label> Camisa Amugus Aniversário</label>
							<p>R$ 80.00</p>
							<button type="vejamais" className="veja-mais-button" onClick="">
								Veja Mais +
							</button>
						</div>
					</div>
					<div className="product-showcase-product">
						<img src="https://i.imgur.com/CFFkuxo.jpg" />
						<div className="product-showcase-info">
							<label> Camisa ShAKIRA</label>
							<p>R$ 120.37</p>
							<button type="vejamais" className="veja-mais-button" onClick="">
								Veja Mais +
							</button>
						</div>
					</div>
					<div className="product-showcase-product">
						<img src="https://i.imgur.com/0UbfMTv.jpg" />
						<div className="product-showcase-info">
							<label> Mochila HarryPotter</label>
							<p>R$ 500.00</p>
							<button type="vejamais" className="veja-mais-button" onClick="">
								Veja Mais +
							</button>
						</div>
					</div>
				</div>
			</div>
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
