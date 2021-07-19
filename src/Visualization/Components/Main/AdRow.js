import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdsLogic from '../../../Logic/AdsLogic';
import '../Styles/AdRow.css';
import Product_AdAdapter from './Adapters/Product_AdAdapter';

const AdRow = () => {
	const [ads, setAds] = useState([]);
	const userSelector = useSelector((state) => state.user.userId);

	useEffect(() => {
		const generateAds = async () => {
			setAds(Product_AdAdapter(await AdsLogic.generateRandomAds(userSelector)));
		};

		generateAds();
	}, [userSelector]);

	return (
		<div className="ad-row">
			<label>Produtos Recomendados para você:</label>
			<div className="product-showcase">
				{ads.map((ad, index) => {
					return (
						<div className="product-showcase-product" key={index}>
							<img src={ad.picture} alt={ad.label} />
							<div className="product-showcase-info">
								<label>{ad.label}</label>
								<p>{`R$ ${ad.price.toFixed(2)}`}</p>
								<Link to={ad.link} className="veja-mais-link">
									Veja Mais +
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AdRow;
