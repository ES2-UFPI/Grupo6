import React, { useState, useEffect } from 'react';
import './Styles/NewProductPage.css';

const NewProductPage = () => {
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [missingNameMessage, setMissingNameMessage] = useState('');
	const [priceInvalidMessage, setPriceInvalidMessage] = useState('');
	const [missingCategoryMessage, setMissingCategoryMessage] = useState('');

	useEffect(() => {
		if (price.length === 0) {
			setPriceInvalidMessage('');
		} else if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
			setPriceInvalidMessage('Valor inválido');
		} else if (price.includes(',')) {
			setPriceInvalidMessage('Use um ponto para separar a parte decimal');
		} else {
			setPriceInvalidMessage('');
		}
	}, [price]);

	useEffect(() => {
		if (productName.length > 0) {
			setMissingNameMessage('');
		}
	}, [productName]);

	useEffect(() => {
		if (category.length > 0) {
			setMissingCategoryMessage('');
		}
	}, [category]);

	const mainContent = (
		<div className="new-product-page-main-content">
			<h1>Cadastrar Produto</h1>
			<form className="new-product-page-form">
				<div className="product-name-section">
					<label htmlFor="product-name">Nome do Produto * :</label>
					<input
						required
						type="text"
						name="product-name"
						maxLength={50}
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					></input>
					<span className="missing-name-span">{missingNameMessage}</span>
				</div>
				<div className="description-section">
					<label htmlFor="description">Descrição:</label>
					<textarea
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className="price-section">
					<label htmlFor="price">Valor (R$) * :</label>
					<input
						type="text"
						name="price"
						maxLength={8}
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					></input>
					<span className="price-invalid-span">{priceInvalidMessage}</span>
				</div>
				<div className="categories-section">
					<label htmlFor="category">Categorias * :</label>
					<select
						name="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">{''}</option>
						<option value={'Vestuário'}>Vestuário</option>
						<option value={'Eletrônicos'}>Eletrônicos</option>
						<option value={'Livros'}>Livros</option>
						<option value={'Eletrodomésticos'}>Eletrodomésticos</option>
						<option value={'Beleza'}>Beleza</option>
						<option value={'Esporte'}>Esporte</option>
						<option value={'Jogos'}>Jogos</option>
					</select>
					<span className="missing-category-span">
						{missingCategoryMessage}
					</span>
				</div>
				<span className="required-asterisk-span">* Obrigatório</span>
				<input
					type="submit"
					value="Cadastrar"
					className="submit-button"
					onClick={(e) => {
						if (productName.length === 0) {
							setMissingNameMessage('Digite um nome para o produto');
							e.preventDefault();
						} else {
							setMissingNameMessage('');
						}
						if (price.length === 0) {
							setPriceInvalidMessage('Digite um valor para o produto');
							e.preventDefault();
						}
						if (category.length === 0) {
							setMissingCategoryMessage('Selecione uma categoria');
							e.preventDefault();
						} else {
							setMissingCategoryMessage('');
						}
						if (priceInvalidMessage.length > 0) {
							e.preventDefault();
						}
					}}
				></input>
			</form>
		</div>
	);

	return <div className="new-product-page">{mainContent}</div>;
};

export default NewProductPage;
