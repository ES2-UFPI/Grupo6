const Logic_NotificationsAdapter = (notificationObject) => {
	return {
		id: notificationObject.id,
		image:
			notificationObject.type === 'message'
				? 'https://i.imgur.com/bPxZOaN.png'
				: 'https://i.imgur.com/Np5JaD8.png',
		message: notificationObject.content,
		isRead: notificationObject.isRead,
		time: `${notificationObject.date.toDate().getHours()}:${
			notificationObject.date.toDate().getMinutes() < 10
				? '0' + notificationObject.date.toDate().getMinutes()
				: notificationObject.date.toDate().getMinutes()
		}`,
	};
};

export default Logic_NotificationsAdapter;
