import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Message.css';

const Message = (props) => {
	return (
		<div
			className={
				props.isSentByLoggedInUser
					? 'message-outer-container sent'
					: 'message-outer-container received'
			}
		>
			<span className="date-span">{`${props.date.getDate()}/${
				props.date.getMonth() + 1
			}/${props.date
				.getFullYear()
				.toString()
				.slice(2)} ${props.date.getHours()}:${
				props.date.getMinutes() > 9
					? props.date.getMinutes()
					: `0${props.date.getMinutes()}`
			}`}</span>
			<div className="message-inner-container">{props.content}</div>
			{props.isSentByLoggedInUser ? (
				<button
					className="delete-message-button"
					onClick={() => props.delete()}
				>
					Deletar
				</button>
			) : null}
		</div>
	);
};

Message.propTypes = {
	isSentByLoggedInUser: PropTypes.bool,
	content: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	delete: PropTypes.func,
};

export default Message;
