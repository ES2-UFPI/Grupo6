import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TransactionLogic from '../../../Logic/TransactionLogic';
import ProductLogic from '../../../Logic/ProductLogic';
import UserLogic from '../../../Logic/UserLogic';
import '../Styles/History.css';
import TransactionItem from './TransactionItem';

const History = () => {
	const [items, setItems] = useState([]);
	const userSelector = useSelector((state) => state.user.userId);

	useEffect(() => {
		const updateItems = async () => {
			if (userSelector !== null) {
				const transactionItems = await TransactionLogic.getUserTransactions(
					userSelector
				);
				setItems(
					await Promise.all(
						transactionItems.map(async (item) => {
							const productInfo = await ProductLogic.getProductInfo(
								item.productId
							);
							return {
								...item,
								productName: productInfo.name,
								productPicture: productInfo.pictures[0],
								sellerName: (await UserLogic.getUser(item.sellerId)).name,
							};
						})
					)
				);
			}
		};
		updateItems();
	}, [userSelector]);

	const updateTransaction = async (transactionId, rating, wouldBarterAgain) => {
		await TransactionLogic.rateProduct(transactionId, rating);
		await TransactionLogic.answerWouldBuyFromSellerAgain(
			transactionId,
			wouldBarterAgain
		);
	};

	return (
		<div className="history-main">
			<h2 className="history-title">Histórico de Transações</h2>
			<div className="transation-items">
				{items.map((i, index) => {
					return (
						<TransactionItem key={index} {...i} update={updateTransaction} />
					);
				})}
			</div>
		</div>
	);
};

export default History;
