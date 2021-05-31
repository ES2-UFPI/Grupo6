import React, { useState, useEffect } from 'react';
import ProductLogic from '../../../Logic/ProductLogic';
import '../Styles/RegisterProductPage.css';

const NewProductPage = () => {
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [missingNameMessage, setMissingNameMessage] = useState('');
	const [priceInvalidMessage, setPriceInvalidMessage] = useState('');
	const [missingCategoryMessage, setMissingCategoryMessage] = useState('');
	const [tagsInput, setTagsInput] = useState('');
	const [tags, setTags] = useState([]);
	const [pictures, setPictures] = useState([]);

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
				<div className="pictures-section">
					<label htmlFor="pictures">Faça o upload de fotos:</label>
					<input
						name="pictures"
						type="file"
						multiple
						accept="image/*"
						onChange={(e) => {
							setPictures(
								Array.from(e.target.files).map((file) =>
									URL.createObjectURL(file)
								)
							);
						}}
					></input>
					<div className="pictures-previews-section">
						{pictures.map((picture, index) => {
							return <img src={picture} key={index} alt={productName} />;
						})}
					</div>
				</div>
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
				<div className="tags-section">
					<label htmlFor="tags">Tags:</label>
					<div className="tags-editor">
						<span className="tags-span">
							{tags.map((tag, index) => {
								return (
									<span className="tag-element" key={index}>
										{tag}
									</span>
								);
							})}
						</span>
						<input
							name="tags"
							type="text"
							value={tagsInput}
							onChange={(e) => {
								const newValue = e.target.value;
								if (
									newValue[newValue.length - 1] === ',' &&
									!tags.includes(newValue.slice(0, newValue.length - 1))
								) {
									const newTag = newValue.startsWith('#')
										? newValue.slice(0, newValue.length - 1)
										: '#' + newValue.slice(0, newValue.length - 1);
									setTags((previous) => previous.concat(newTag));
									setTagsInput('');
								} else {
									setTagsInput(newValue);
								}
							}}
							onKeyDown={(e) => {
								console.log(e.key, tagsInput.length);
								if (e.key === 'Enter' && !tags.includes(tagsInput)) {
									e.preventDefault();
									const newTag = tagsInput.startsWith('#')
										? tagsInput
										: '#' + tagsInput;
									setTags((previous) => previous.concat(newTag));
									setTagsInput('');
								} else if (e.key === 'Backspace' && tagsInput.length === 0) {
									setTags((previous) => previous.slice(0, previous.length - 1));
								}
							}}
						></input>
						<div className="tags-suggestions-area">
							{/* Depends on logic layer methods */}
						</div>
					</div>
				</div>
				<span className="required-asterisk-span">* Obrigatório</span>
				<input
					type="submit"
					value="Cadastrar"
					className="submit-button"
					onClick={async (e) => {
						e.preventDefault();
						if (
							productName.length > 0 &&
							price.length > 0 &&
							category.length > 0 &&
							missingNameMessage.length === 0 &&
							priceInvalidMessage.length === 0 &&
							missingCategoryMessage.length === 0
						) {
							await ProductLogic.addNewProduct({
								name: productName,
								description,
								price,
								category,
								tags: tags.map((tag) => tag.slice(1)),
								pictures,
							});
						}
						if (productName.length === 0) {
							setMissingNameMessage('Digite um nome para o produto');
						} else {
							setMissingNameMessage('');
						}
						if (price.length === 0) {
							setPriceInvalidMessage('Digite um valor para o produto');
						}
						if (category.length === 0) {
							setMissingCategoryMessage('Selecione uma categoria');
						} else {
							setMissingCategoryMessage('');
						}
					}}
				></input>
			</form>
		</div>
	);

	return <div className="new-product-page">{mainContent}</div>;
};

export default NewProductPage;
