import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotificationLogic from '../../../Logic/NotificationLogic';
import Component_PageNavigationAdapter from '../Main/Adapters/Component_PageNavigationAdapter';
import PageNavigation from '../Main/PageNavigation';
import Logic_NotificationsAdapter from './Adapters/Logic_NotificationsAdapter';
import '../Styles/NotificationPage.css';

const NotificationPage = () => {
	const query = new URLSearchParams(useLocation().search);
	const page = query.get('page') !== null ? query.get('page') : '1';
	const perPage = 15;
	const [notifications, setNotifications] = useState([]);
	const userSelector = useSelector((state) => state.user.userId);

	useEffect(() => {
		const getNotifications = async () => {
			if (userSelector !== null) {
				setNotifications(
					(await NotificationLogic.fetchUserNotifications(userSelector)).map(
						Logic_NotificationsAdapter
					)
				);
				await NotificationLogic.readAllNotifications(userSelector);
			}
		};
		getNotifications();
	}, [userSelector]);

	const mainContent = (
		<div className="main">
			<div className="page-title">
				<h1>Notificações</h1>
			</div>
			{notifications.length > 0 ? (
				<div className="notification-list">
					{notifications
						.filter((_notification, index) => {
							return (
								index >= (Number.parseInt(page) - 1) * perPage &&
								index <= Number.parseInt(page) * perPage - 1
							);
						})
						.map((notification, index) => {
							return (
								<div className="notification" key={index}>
									<div className="alert">
										<img src={notification.image} alt="Brechonline" />
									</div>
									<div className="content">
										<Link to="/">{notification.message}</Link>
										<span className="notification-time-span">
											{notification.time}
										</span>
									</div>
								</div>
							);
						})}
				</div>
			) : (
				<span className="no-notification-span">Não há notificações</span>
			)}
			{notifications.length > perPage ? (
				<PageNavigation
					{...Component_PageNavigationAdapter({
						currentPage: page,
						numberOfPages: Math.ceil(notifications.length / perPage),
						newPageLink: '/notifications?page=',
					})}
				/>
			) : null}
		</div>
	);

	return <div className="notificationpage">{mainContent}</div>;
};

export default NotificationPage;
