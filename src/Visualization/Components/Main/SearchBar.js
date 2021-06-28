import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import magnifyingGlass from '../Images/lupa.png';
import ProductLogic from '../../../Logic/ProductLogic';
import '../Styles/SearchBar.css';

const SearchBar = () => {
	const wrapperRef = useRef(null);
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

	useEffect(() => {
		const updateResults = async () => {
			if (inputText.length === 0) {
				setResults([]);
			} else {
				setIsLoading(true);
				setResults(await ProductLogic.getProducts(inputText));
				setIsLoading(false);
			}
		};

		updateResults();
	}, [inputText]);

	let location = useLocation();
	useEffect(() => {
		setInputText('');
	}, [location]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setResults([]);
			}
		}

		document.addEventListener('mousedown', handleClickOutside, { capture: true });
		return () => {
			document.removeEventListener('mousedown', handleClickOutside, { capture: true });
		};
	}, []);

	return (
		<div className="top-search-bar" ref={wrapperRef}>
			<div
				className="input-and-button-section"
				onKeyDown={(e) => {
					if (e.key === 'Enter' && inputText.length > 0) {
						history.push(`/product/search?search_term=${inputText}`);
					}
				}}
			>
				<input
					type="text"
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
				></input>
				<a
					className="search-anchor"
					href={`/product/search?search_term=${inputText}&page=1`}
				>
					<img src={magnifyingGlass} alt="search" />
				</a>
			</div>
			<div className="results-previews">
				{!isLoading ? (
					results
						.filter((_result, index) => index <= 3)
						.map((result, index) => {
							console.log(result);
							return (
								<Link
									className="result-preview"
									to={`/product/${result.id}`}
									key={index}
								>
									<img
										src={
											result.pictures.length > 0
												? result.pictures[0]
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
								</Link>
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
