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
		await Firebase.setNotificationType(notificationId, type);
		await Firebase.setNotificationContent(notificationId, message);
		await Firebase.setNotificationUserId(notificationId, userId);
		await Firebase.setNotificationIsRead(notificationId, false);
	};

	return {
		fetchUserNotifications,
		setNotificationAsRead,
		triggerNotification,
	};
})();

export default NotificationLogic;
