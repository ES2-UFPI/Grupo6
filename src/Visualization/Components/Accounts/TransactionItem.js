import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionItem = (props) => {
    const [selectedRating, setSelectedRating] = useState(props.rating)
    
    return (
        <div className="transaction-item">
            <div className="transaction-item-left-section">
                <img src={props.productPicture} alt={props.productName} />
            </div>
            <div className="transaction-item-right-section">
                <span className="transaction-item-name">{props.productName}</span>
                <Link to={`/account/${props.sellerId}`} className="seller-name-link">{`Vendedor: ${props.sellerName}`}</Link>
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