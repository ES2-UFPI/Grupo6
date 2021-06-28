import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CouponsLogic from '../../../Logic/CouponsLogic';
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
	const [sellerInfo, setSellerInfo] = useState({});
	const [couponInput, setCouponInput] = useState('');
	const [validCoupon, setValidCoupon] = useState(null);

	const isItemInCartSelector = useSelector((state) =>
		state.cart.cart.products.some((product) => product.id === productId)
	);
	const userSelector = useSelector((state) => state.user.id);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchProductInfo = async () => {
			const productInfo = {
				...(await ProductLogic.getProductInfo(productId)),
				sellerName: (
					await UserLogic.getUser(
						(
							await ProductLogic.getProductInfo(productId)
						).creatorId
					)
				).name,
			};
			setProductInfo(productInfo);
		};

		const fetchSellerInfo = async () => {
			if (productInfo.creatorId !== undefined) {
				setSellerInfo(await UserLogic.getUser(productInfo.creatorId));
				setIsLoaded(true);
			}
		};

		fetchProductInfo();
		fetchSellerInfo();
	}, [productId, productInfo.creatorId]);

	useEffect(() => {
		const lookForCoupon = async () => {
			if (couponInput.length > 0) {
				const coupon = await CouponsLogic.findCoupon(couponInput);
				setValidCoupon(
					coupon !== null &&
						coupon !== undefined &&
						coupon.userId === userSelector &&
						coupon.productId === productId
						? coupon
						: null
				);
			}
		};
		lookForCoupon();
	}, [couponInput, userSelector, productId]);

	const price =
		validCoupon === null
			? productInfo.price
			: productInfo.price + productInfo.price * validCoupon.reduction;

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
				<div className="buying-area">
					<div className="product-price-area">
						<label htmlFor="product-price">Valor:</label>
						<span className="product-price">{'R$ ' + price.toFixed(2)}</span>
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
				</div>
				<input
					type="text"
					value={couponInput}
					onChange={(e) => setCouponInput(e.target.value)}
					placeholder="Cupom de desconto"
				></input>
				<div className="seller-area">
					<div className="seller-area-top-section">
						<img src={sellerInfo.profilePicture} alt={sellerInfo.name} />
					</div>
					<div className="seller-area-bottom-section">
						<span className="seller-name-span">
							{sellerInfo.name + ' ' + sellerInfo.surname}
						</span>
						<div className="seller-total-sales-area">
							<label htmlFor="total-sales">Total de vendas: </label>
							<span name="total-sales">{sellerInfo.numberOfSales}</span>
						</div>
						{sellerInfo.numberOfSales > 0 ? (
							<div className="seller-rating-area">
								<label htmlFor="rating">Avaliação média: </label>
								<span name="rating">{sellerInfo.averageRating.toFixed(1)}</span>
							</div>
						) : null}
						{sellerInfo.numberOfSales > 0 ? (
							<div className="seller-would-barter-again-area">
								<span className="seller-would-barter-again-span">{`${
									sellerInfo.percentageWouldBarterAgain * 100
								}% dos compradores fariam negócio novamente`}</span>
							</div>
						) : null}
					</div>
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
		</div>
	) : null;
};

export default ProductPage;
