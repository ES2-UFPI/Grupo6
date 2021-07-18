import React, { useState, useEffect } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import '../Styles/Chat.css';

const Chat = (props) => {
	const [messageInput, setMessageInput] = useState('');

	useEffect(() => {
		props.readAllMessages();
	}, [props]);

	return (
		<div className="chat">
			<div className="message-log">
				{props.messages.map((message, index) => {
					return (
						<Message
							key={index}
							content={message.content}
							date={message.date}
							isSentByLoggedInUser={message.isSentByLoggedInUser}
							delete={() => props.deleteMessage(message.id)}
						/>
					);
				})}
			</div>
			<div className="composing-area">
				<input
					type="text"
					value={messageInput}
					onChange={(e) => setMessageInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							props.sendMessage(messageInput);
							setMessageInput('');
						}
					}}
				></input>
				<button
					className="send-button fa fa-paper-plane"
					onClick={() => {
						props.sendMessage(messageInput);
						setMessageInput('');
					}}
				></button>
			</div>
		</div>
	);
};

Chat.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			isSentByLoggedInUser: PropTypes.bool,
			id: PropTypes.string,
			date: PropTypes.instanceOf(Date),
			content: PropTypes.string,
		})
	),
	sendMessage: PropTypes.func,
	deleteMessage: PropTypes.func,
	readAllMessages: PropTypes.func,
};

export default Chat;
