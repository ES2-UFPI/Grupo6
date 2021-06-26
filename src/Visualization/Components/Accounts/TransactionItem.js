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
				<Link
					to={`/account/${props.sellerId}`}
					className="seller-name-link"
				>{`${props.sellerName}`}</Link>
				<div className="transation-item-info">
					<div className="left">
						<div className="info-row">
							<label>Localizar: </label>
                            <span>{props.localizationCode}</span>
						</div>
						<div className="info-row">
							<label>Status: </label>
                            <span>{props.status}</span>
						</div>
					</div>
					{<Rating rating={props.rating} wouldBarterAgain={props.wouldBarterAgain} update={props.update} />}
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
};

export default TransactionItem;
