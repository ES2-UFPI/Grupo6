import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Component_PageNavigationAdapter from '../Main/Adapters/Component_PageNavigationAdapter';
import MainTemplate from '../Main/MainTemplate';
import PageNavigation from '../Main/PageNavigation';
import '../Styles/NotificationPage.css';

const NotificationPage = () => {
	const query = new URLSearchParams(useLocation().search);
	const page = query.get('page') !== null ? query.get('page') : '1';
	const perPage = 15;

	const notifications = [
		{
			image: 'https://i.imgur.com/Np5JaD8.png',
			content: '• Notificação do site.',
			time: '13:20',
		},
		{
			image: 'https://i.imgur.com/1T9L1rV.png',
			content:
				'• O seu produto está a caminho, acompanhe com o código XSAI-ASXD-ASJD.',
			time: '10:43',
		},
		{
			image: 'https://i.imgur.com/bPxZOaN.png',
			content: '• Você tem uma nova mensagem de Fulano.',
			time: '08:19',
		},
	];

	const mainContent = (
		<div className="main">
			<div className="page-title">
				<h1>Notificações</h1>
			</div>
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
									<Link to="/">{notification.content}</Link>
									<h1>{notification.time}</h1>
								</div>
							</div>
						);
					})}
			</div>
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

	return (
		<MainTemplate>
			<div className="notificationpage">{mainContent}</div>
		</MainTemplate>
	);
};

export default NotificationPage;
