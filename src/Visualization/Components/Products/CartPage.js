/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Reducer from '../../../Reducers/Reducer';
import MainTemplate from '../Main/MainTemplate';

import '../Styles/CartPage.css';

const CartPage = () => {
	const itemsSelector = useSelector((state) => state.cart.cart.products);
	const dispatch = useDispatch();

	const [items, setItems] = useState(
		Array(5).fill({
			id: '123',
			name: 'God of War II',
			picture: 'https://i.imgur.com/Or3qkoW.jpeg',
			price: 400.5,
			seller: 'Eduardo Gomes',
		})
	);

	useEffect(() => {
		setItems(itemsSelector);
	}, [itemsSelector]);

	const mainContent = (
		<div className="shopping-cart-main-content">
			<div className="page-title">
				<h1>Carrinho de Compras</h1>
			</div>
			<div className="items-list">
				{items.map((item, index) => {
					return (
						<Link className="item-link" to={`/product/${item.id}`} key={index}>
							<div className="cart-item">
								<div className="left-section">
									<img src={item.picture} alt={item.name} />
									<div className="item-info">
										<h2 className="item-name">{item.name}</h2>
										<div className="item-price-section">
											<label htmlFor="item-price">Valor:</label>
											<span className="item-price">
												{'R$ ' + item.price.toString()}
											</span>
										</div>
										<div className="item-seller-section">
											<label htmlFor="item-seller">Vendedor:</label>
											<span className="item-seller">{item.seller}</span>
										</div>
									</div>
								</div>
								<div className="right-section">
									<button
										className="remove-item-button"
										onClick={(e) => {
											e.stopPropagation();
											dispatch(Reducer.removeItem(item.id));
										}}
									></button>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
			<div className="subtotal">
				<div className="subtotal-value-section">
					<h2>Subtotal:</h2>
					<span className="subtotal-value">
						{'R$ ' +
							items
								.reduce((previous, current) => previous + current.price, 0)
								.toFixed(2)
								.toString()}
					</span>
				</div>
				<button className="confirm-button">Confirmar</button>
			</div>
		</div>
	);

	return (
		<MainTemplate>
			<div className="cart-page">{mainContent}</div>
		</MainTemplate>
	);
};

export default CartPage;
