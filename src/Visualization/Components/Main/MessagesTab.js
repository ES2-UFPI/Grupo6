import React, { useState, useRef } from 'react';
import Chat from './Chat';
import PropTypes from 'prop-types';
import '../Styles/MessagesTab.css';

const MessagesTab = (props) => {
	const overflowContent = useRef();
	const [openChat, setOpenChat] = useState(null);

	const openNewChat = (userId) => {
		// ...
		return {
			name: '',
			profilePicture: '',
		};
	};

	const chatNavigation = (
		<div className="chat-navigation">
			{props.users.map((user, index) => {
				return (
					<div
						className="chat-preview"
						key={index}
						onClick={() => setOpenChat(user)}
					>
						<div className="chat-preview-image-container">
							<img src={user.profilePicture} alt={user.name} />
						</div>
						<span className="user-name-span">{user.name}</span>
					</div>
				);
			})}
		</div>
	);

	return (
		<div
			className={
				props.isOpen
					? 'message-tab-icon fa fa-envelope'
					: 'message-tab-icon fa fa-envelope hidden'
			}
			onClick={(e) => {
				if (!overflowContent.current.contains(e.target)) {
					props.toggleIsOpen();
				}
			}}
		>
			<div className="overflow-content" ref={overflowContent}>
				<div className="message-tab-header">
					{openChat !== null ? (
						<button
							className="back-button fa fa-arrow-left"
							onClick={() => setOpenChat(null)}
						></button>
					) : null}
					<span>{openChat === null ? 'Mensagens' : openChat.name}</span>
				</div>
				{openChat === null ? (
					chatNavigation
				) : (
					<Chat messages={openChat.messages} />
				)}
			</div>
		</div>
	);
};

MessagesTab.propTypes = {
	isOpen: PropTypes.bool,
	toggleIsOpen: PropTypes.func,
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			profilePicture: PropTypes.string,
			messages: PropTypes.arrayOf(
				PropTypes.shape({
					isSentByLoggedInUser: PropTypes.bool,
					id: PropTypes.string,
					date: PropTypes.instanceOf(Date),
					content: PropTypes.string,
				})
			),
		})
	),
};

export default MessagesTab;
