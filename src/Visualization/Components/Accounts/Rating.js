import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Rating.css';

const Rating = (props) => {
    const [rating, setRating] = useState(props.rating);
    const [wouldBarterAgain, setWouldBarterAgain] = useState(props.wouldBarterAgain);

    return (
        <div className="rating-area">
            <div className="interactive-stars">
                {[1, 2, 3, 4, 5].map((value) => {
                    return (
                        <span className={rating >= value ? 'interactive-star fa fa-star checked' : 'interactive-star fa fa-star'} key={value} onMouseOver={() => setRating(value)} onMouseOut={() => setRating(props.rating)} onClick={() => props.update(value, props.wouldBarterAgain)}></span>
                    );
                })}
            </div>
            <div className="would-barter-again-section">
                <label htmlFor="would-barter-again">Faria negócios novamente?</label>
                <div className="would-barter-again">
                    <button className={wouldBarterAgain ? 'fa fa-thumbs-up thumbs-up-button selected' : 'fa fa-thumbs-up thumbs-up-button'} onMouseOver={() => setWouldBarterAgain(true)} onMouseOut={() => setWouldBarterAgain(props.wouldBarterAgain)} onClick={() => props.update(props.rating, true)}>
                    </button>
                    <button className={wouldBarterAgain ? 'fa fa-thumbs-down thumbs-down-button' : 'fa fa-thumbs-down thumbs-down-button selected'} onMouseOver={() => setWouldBarterAgain(false)} onMouseOut={() => setWouldBarterAgain(props.wouldBarterAgain)} onClick={() => props.update(props.rating, false)}>
                    </button>
                </div>
            </div>
        </div>
    );

};

Rating.propTypes = {
    rating: PropTypes.number,
    wouldBarterAgain: PropTypes.bool,
    update: PropTypes.func,
};

export default Rating;