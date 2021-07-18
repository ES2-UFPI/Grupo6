import RealTimeDatabase from '../Data/RealTimeDatabase';
import NotificationLogic from './NotificationLogic';
import UserLogic from './UserLogic';

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

	const sendMessage = async (senderId, receiverId, str) => {
		NotificationLogic.triggerNotification(
			'message',
			`Nova mensagem de ${(await UserLogic.getUser(senderId)).name}`,
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

	const readMessages = (senderId, receiverId, messages) => {
		if (messages.length > 0) {
			NotificationLogic.deleteAllMessageNotifications(senderId, receiverId);
			messages.forEach((message) => {
				RealTimeDatabase.updateMessage(message.id, {
					isRead: true,
				});
			});
		}
	};

	return {
		getMessagesForUser,
		sendMessage,
		deleteMessage,
		readMessages,
	};
})();

export default MessageLogic;
