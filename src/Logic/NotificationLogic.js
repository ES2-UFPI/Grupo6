import Firebase from '../Data/Firebase';

const NotificationLogic = (() => {
	const fetchUserNotifications = async (userId) => {
		return (await Firebase.getAllNotifications())
			.filter((notification) => notification.userId === userId)
			.sort((a, b) => a.date.toDate() - b.date.toDate());
	};

	const setNotificationAsRead = async (notificationId) => {
		await Firebase.setNotificationIsRead(notificationId, true);
	};

	const triggerNotification = async (type, message, userId) => {
		const notificationId = await Firebase.createNotification();
		await Firebase.setNotificationDate(notificationId, new Date());
		await Firebase.setNotificationType(notificationId, type);
		await Firebase.setNotificationContent(notificationId, message);
		await Firebase.setNotificationUserId(notificationId, userId);
		await Firebase.setNotificationIsRead(notificationId, false);
	};

	const readAllNotifications = async (userId) => {
		await Promise.all(
			(
				await fetchUserNotifications(userId)
			).map(async (notification) => {
				await setNotificationAsRead(notification.id);
			})
		);
	};

	const deleteAllMessageNotifications = async (senderId, receiverId) => {
		const messageNotifications = (
			await fetchUserNotifications(receiverId)
		).filter((notification) => notification.senderId === senderId);
		await Promise.all(
			messageNotifications.map(async (notification) => {
				await Firebase.deleteNotification(notification.id);
			})
		);
	};

	return {
		fetchUserNotifications,
		readAllNotifications,
		triggerNotification,
		deleteAllMessageNotifications,
	};
})();

export default NotificationLogic;
