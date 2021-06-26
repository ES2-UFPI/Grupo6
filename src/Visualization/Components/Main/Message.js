import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {

    return (
        <div className="message-outer-container">
            <span className="date-span">{`${props.date.getDate()}/${props.date.getMonth() + 1}/${props.date.getYear()} ${props.date.getHours()}:${props.date.getMinutes()}`}</span>
            <div className="message-inner-container">
                {props.content}
            </div>
            <button className="delete-message-button" onClick={() => props.delete()}>Deletar</button>
        </div>
    )
};

Message.propTypes = {
    content: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    delete: PropTypes.func,
};

export default Message;