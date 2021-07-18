const Logic_NotificationsAdapter = (notificationObject) => {
	return {
		id: notificationObject.id,
		image:
			notificationObject.type === 'message'
				? 'https://i.imgur.com/bPxZOaN.png'
				: 'https://i.imgur.com/Np5JaD8.png',
		message: notificationObject.content,
		time: `${notificationObject.date
			.toDate()
			.getHours()}:${notificationObject.date.toDate().getMinutes()}`,
	};
};

export default Logic_NotificationsAdapter;
