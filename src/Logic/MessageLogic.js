import RealTimeDatabase from '../Data/RealTimeDatabase';

const MessageLogic = (() => {
	const getMessagesForUser = (userId, callback) => {
		RealTimeDatabase.listenToMessages((newValue) => {
			callback(
				Object.fromEntries(
					Object.keys(newValue)
						.filter(
							(key) =>
								newValue[key].sender === userId ||
								newValue[key].receiver === userId
						)
						.map((key) => [key, newValue[key]])
				)
			);
		});
	};

	const sendMessage = (senderId, receiverId, str) => {
		// Trigger notification
		return RealTimeDatabase.pushToMessages({
			sender: senderId,
			receiver: receiverId,
			content: str,
			date: new Date(),
			isRead: false,
		});
	};

	const deleteMessage = (messageKey) => {
		RealTimeDatabase.deleteFromMessages(messageKey);
	};

	const readChatMessages = (messageArray) => {
		// Delete notifications for chat messages
		messageArray.forEach((message) => {
			RealTimeDatabase.updateMessage(message.id, { ...message, isRead: true });
		});
	};

	return {
		getMessagesForUser,
		sendMessage,
		deleteMessage,
		readChatMessages,
	};
})();

export default MessageLogic;
