import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionItem = (props) => {
	const [selectedRating, setSelectedRating] = useState(props.rating);

	const details = (
		<div id="dMain" className="details-main">
			<div className="details-close">
				<button
					onClick={() => {
						document.getElementById('dMain').style.visibility = 'hidden';
					}}
				></button>
			</div>
			<div className="details-img">
				<img src={props.productPicture} alt="product" />
			</div>
			<div>
				<label>cod: {props.id}</label>
			</div>
			<div>
				<label>would barter again? {props.wouldBarterAgain}</label>
			</div>
			<div>
				<label>Avaliação: {props.rating}</label>
			</div>
		</div>
	);

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
				>{`Vendedor: ${props.sellerName}`}</Link>
				<div className="transation-item-info">
					<div className="left">
						<h2>{props.productName}</h2>
						<div>
							<label>Vendedor: {props.sellerName}</label>
						</div>
						<div>
							<label>Localizar: {props.localizationCode}</label>
						</div>
						<div>
							<label>Status: {props.status}</label>
						</div>
					</div>
					<div className="right">
						<button
							onClick={() => {
								document.getElementById('dMain').style.visibility = 'visible';
							}}
						>
							Inspecionar
						</button>
					</div>
					{details}
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
};

export default TransactionItem;
