import RealTimeDatabase from '../Data/RealTimeDatabase';
import NotificationLogic from './NotificationLogic';

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
		NotificationLogic.triggerNotification(
			'message',
			`Nova mensagem de ${senderId}`,
			receiverId
		);
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

	return {
		getMessagesForUser,
		sendMessage,
		deleteMessage,
	};
})();

export default MessageLogic;
