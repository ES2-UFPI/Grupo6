import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import magnifyingGlass from './Images/lupa.png';
import './Styles/SearchBar.css';

const SearchBar = () => {
	const history = useHistory();
	const [inputText, setInputText] = useState('');
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	/*
    results: [{
        id,
        picture,
        name,
        price,
    }]
    */
	const genericProductPicture = '';

	return (
		<div className="top-search-bar">
			<div
				className="input-and-button-section"
				onKeyDown={(e) => {
					if (e.key === 'Enter' && inputText.length > 0) {
						history.push(`/product/search/${inputText}`);
					}
				}}
			>
				<input
					type="text"
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
						setIsLoading(true);
						setResults([
							{
								id: '123',
								picture:
									'https://www.cnet.com/a/img/1ZFV0MY_3OoN2lOrNg3shcgG8Cs=/470x836/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg',
								name: 'Geladeira',
								price: 10450.75,
							},
							{
								id: '123',
								picture:
									'https://www.cnet.com/a/img/1ZFV0MY_3OoN2lOrNg3shcgG8Cs=/470x836/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg',
								name: 'Geladeira',
								price: 10450.75,
							},
							{
								id: '123',
								picture:
									'https://www.cnet.com/a/img/1ZFV0MY_3OoN2lOrNg3shcgG8Cs=/470x836/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg',
								name: 'Geladeira',
								price: 10450.75,
							},
						]);
						setIsLoading(false);
					}}
				></input>
				<a className="search-anchor" href={`/product/search/${inputText}`}>
					<img src={magnifyingGlass} alt="search" />
				</a>
			</div>
			<div className="results-previews">
				{!isLoading ? (
					results.map((result, index) => {
						return (
							<a
								className="result-preview"
								href={`/product/${result.id}`}
								key={index}
							>
								<img
									src={
										result.picture !== null
											? result.picture
											: genericProductPicture
									}
									alt={result.name}
								/>
								<div className="right-section">
									<span className="product-name-span">{result.name}</span>
									<span className="product-price-span">
										{'R$ ' + result.price.toFixed(2).toString()}
									</span>
								</div>
							</a>
						);
					})
				) : (
					<div className="loading-spinner">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
