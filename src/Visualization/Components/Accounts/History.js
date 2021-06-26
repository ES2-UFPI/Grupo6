import React from 'react';
import TransactionLogic from '../../../Logic/TransactionLogic';
import '../Styles/History.css';
import TransactionItem from './TransactionItem';

const History = () => {
	const updateTransaction = async (transactionId, rating, wouldBarterAgain) => {
		await TransactionLogic.rateProduct(transactionId, rating);
		await TransactionLogic.answerWouldBuyFromSellerAgain(
			transactionId,
			wouldBarterAgain
		);
	};

	const items = Array(5).fill({
		id: '1234',
		buyerId: '4321',
		sellerId: '0123',
		sellerName: 'Jô',
		productName: 'produto',
		localizationCode: 'localizationCode',
		productPicture:
			'https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		status: '¯|_(ツ)_/¯',
		rating: 3.5,
		wouldBarterAgain: true,
		update: (rating, wouldBarterAgain) => {
			updateTransaction('1234', rating, wouldBarterAgain);
		},
	});

	return (
		<div className="history-main">
			<h2 className="history-title">Histórico de Transações</h2>
			<div className="transation-items">
				{items.map((i, index) => {
					return <TransactionItem key={index} {...i} />;
				})}
			</div>
		</div>
	);
};

export default History;
