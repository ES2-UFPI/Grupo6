import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductLogic from '../../../Logic/ProductLogic';
import UserLogic from '../../../Logic/UserLogic';
import Reducer from '../../../Reducers/Reducer';
import '../Styles/ProductPage.css';

const ProductPage = ({ match }) => {
	const {
		params: { productId },
	} = match;
	const [isLoaded, setIsLoaded] = useState(false);
	const [productInfo, setProductInfo] = useState({});

	const isItemInCartSelector = useSelector((state) =>
		state.cart.cart.products.some((product) => product.id === productId)
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchProductInfo = async () => {
			const productInfo = {
				...(await ProductLogic.getProductInfo(productId)),
				sellerName: (
					await UserLogic.getUser(
						(
							await ProductLogic.getProductInfo(productId)
						).sellerId
					)
				).name,
			};
			setProductInfo(productInfo);
			setIsLoaded(true);
		};
		fetchProductInfo();
	}, [productId]);

	return isLoaded ? (
		<div className="product-page">
			<div className="left-section">
				<img
					src={productInfo.pictures.length > 0 ? productInfo.pictures[0] : ''}
					alt={productInfo.name}
				/>
				<div className="product-details">
					<h2 className="product-name-h2">{productInfo.name}</h2>
					<p>{productInfo.description}</p>
				</div>
			</div>
			<div className="right-section">
				<div className="product-price-area">
					<label htmlFor="product-price">Valor:</label>
					<span className="product-price">
						{'R$ ' + productInfo.price.toFixed(2).toString()}
					</span>
				</div>
				{!isItemInCartSelector ? (
					<button
						className="add-to-cart-button"
						onClick={(_e) =>
							dispatch(
								Reducer.addItem({
									id: productId,
									...productInfo,
								})
							)
						}
					>
						Adicionar ao carrinho
					</button>
				) : (
					<button
						className="remove-from-cart-button"
						onClick={(_e) => dispatch(Reducer.removeItem(productId))}
					>
						Remover do carrinho
					</button>
				)}
				<button
					className="talk-to-seller-button"
					onClick={(_e) =>
						dispatch(
							Reducer.openChat(productInfo.sellerId, productInfo.sellerName)
						)
					}
				>
					Falar com o vendedor
				</button>
			</div>
		</div>
	) : null;
};

export default ProductPage;
