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
		return RealTimeDatabase.pushToMessages({
			sender: senderId,
			receiver: receiverId,
			content: str,
			date: new Date(),
		});
	};

	const deleteMessage = (messageKey) => {
		RealTimeDatabase.deleteFromMessages(messageKey);
	};

	return {
		getMessagesForUser,
		sendMessage,
		deleteMessage,
	};
})();

export default MessageLogic;
