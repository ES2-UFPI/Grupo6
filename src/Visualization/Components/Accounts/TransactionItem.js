import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/TransactionItem.css';

const TransactionItem = (props) => {
	// const [selectedRating, setSelectedRating] = useState(props.rating);
    const [isDetailsHidden, setIsDetailsHidden] = useState(true);

	const details = (
		<div id="dMain" className={isDetailsHidden ? 'details-main hidden' : 'details-main'}>
			<div className="info-row">
				<label>cod:</label>
                <span>{props.id}</span>
			</div>
			<div className="info-row">
				<label>Faria negócios novamente? </label>
                <span>{props.wouldBarterAgain}</span>
			</div>
			<div className="info-row">
				<label>Avaliação: </label>
                <span>{props.rating}</span>
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
					<div className="right">
						<button
							onClick={() => {
								setIsDetailsHidden((previous) => !previous);
							}}
						>
							{isDetailsHidden ? 'Inspecionar' : 'Ocultar'}
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
