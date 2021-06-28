import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import PropTypes from 'prop-types';
import '../Styles/TransactionItem.css';

const TransactionItem = (props) => {
	return (
		<div className="transaction-item">
			<div className="transaction-item-left-section">
				<img src={props.productPicture} alt={props.productName} />
			</div>
			<div className="transaction-item-right-section">
				<span className="transaction-item-name">{props.productName}</span>
				<div className="seller-buyer-name">
					<label htmlFor="seller-buyer-name">{props.isBuyer ? 'Comprado de ' : 'Vendido para'}</label>
					<Link
						to={`/account/${props.sellerId}`}
						className="seller-name-link"
						name="seller-buyer-name"
					>{`${props.sellerName}`}</Link>
				</div>
				<div className="transation-item-info">
					<div className="left">
						<div className="info-row">
							<label>Valor pago: </label>
							<span>{`R$ ${props.valuePaid.toFixed(2)}`}</span>
						</div>
						{props.status !== 'Finalizada' ? <div className="info-row">
							<label>Localizar: </label>
							<span>{props.localizationCode}</span>
						</div> : null}
						<div className="info-row">
							<label>Status: </label>
							<span>{props.status}</span>
						</div>
					</div>
					{props.status === 'Finalizada' && props.isBuyer ?
						<Rating
							rating={props.rating}
							wouldBarterAgain={props.wouldBarterAgain}
							update={props.update}
						/>
					: null}
				</div>
			</div>
		</div>
	);
};

TransactionItem.propTypes = {
	transactionId: PropTypes.string,
	buyerId: PropTypes.string,
	sellerId: PropTypes.string,
	sellerName: PropTypes.string,
	productName: PropTypes.string,
	localizationCode: PropTypes.string,
	productPicture: PropTypes.string,
	status: PropTypes.string,
	rating: PropTypes.number,
	wouldBarterAgain: PropTypes.bool,
	update: PropTypes.func,
	valuePaid: PropTypes.number,
	isBuyer: PropTypes.bool,
};

export default TransactionItem;
