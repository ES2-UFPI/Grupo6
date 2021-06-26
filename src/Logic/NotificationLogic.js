import Firebase from '../Data/Firebase';

const NotificationLogic = (() => {

    const fetchUserNotifications = async (userId) => {
        return (await Firebase.getAllNotifications()).filter((notification) => notification.userId === userId).sort((a, b) => a.date.toDate() - b.date.toDate());
    };

    return {
        fetchUserNotifications,
    };

})();

export default NotificationLogic;