import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Reducer from '../../../Reducers/Reducer';
import SearchBar from './SearchBar';
import MessagesTab from './MessagesTab';
import '../Styles/Header.css';
import NotificationLogic from '../../../Logic/NotificationLogic';

const Header = () => {
	const dispatch = useDispatch();
	const messagesTab = useRef();
	const [isMessagesTabOpen, setIsMessagesTabOpen] = useState(false);
	const [notifications, setNotifications] = useState([]);

	const numberOfItemsInCartSelector = useSelector(
		(state) => state.cart.cart.products.length
	);

	const userSelector = useSelector((state) => state.user.userId);
	const userInfoSelector = useSelector((state) => state.user.userInfo);
	const openChatSelector = useSelector((state) => state.chat.talkingToSeller);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				messagesTab.current !== null &&
				!messagesTab.current.contains(e.target)
			) {
				setIsMessagesTabOpen(false);
				dispatch(Reducer.closeChat());
			}
		};

		window.addEventListener('click', handleClickOutside, { capture: true });
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			Reducer.login('LrQkwykN4dPWjm7VkNIB', {
				name: 'Akiridion',
				surname: 'Folha',
				profilePicture:
					'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg',
			})
		);
	}, [dispatch]);

	useEffect(() => {
		const getNotifications = async () => {
			if (userSelector !== null) {
				setNotifications(
					await NotificationLogic.fetchUserNotifications(userSelector)
				);
			}
		};
		getNotifications();
	}, [userSelector]);

	const unreadNotificationsNumber = notifications.filter(
		(notification) => !notification.isRead
	).length;

	const mainContent = (
		<div className="header">
			<Link to="/" className="logo">
				<img src="https://i.imgur.com/cXCcFKH.jpg" alt="Brechonline" />
			</Link>
			<div className="menu">
				<ul>
					<li>
						<Link to="/product">HOME</Link>
					</li>
					<li>
						<Link to="/product/category/vestuario">VESTUÁRIO</Link>
					</li>
					<li>
						<Link to="/product/category/eletronicos">ELETRÔNICOS</Link>
					</li>
					<li>
						<Link to="/product/category/livros">LIVROS</Link>
					</li>
					<li>
						<Link to="/product/category/eletrodomesticos">
							ELETRODOMÉSTICOS
						</Link>
					</li>
					<li>
						<Link to="/product/category/beleza">COSMÉTICO</Link>
					</li>
					<li>
						<Link to="/product/category/esportivo">ESPORTIVO</Link>
					</li>
					<li>
						<Link to="/product/category/jogos">JOGOS</Link>
					</li>
				</ul>
			</div>
			<SearchBar />
			<div className="header-tabs">
				<div className="notification">
					<div
						className="icon"
						onClick={() => {
							NotificationLogic.readAllNotifications(userSelector);
							setNotifications((notifications) =>
								notifications.map((notification) => {
									return {
										...notification,
										isRead: true,
									};
								})
							);
						}}
					>
						{unreadNotificationsNumber > 0 ? (
							<div className="notifications-number-container">
								<span className="notifications-number-span">
									{unreadNotificationsNumber}
								</span>
							</div>
						) : null}
						<Link to="/notifications">
							<img
								src="https://i.imgur.com/pAPOaav.png"
								alt="Notification Icon"
							/>
						</Link>
					</div>
					<div className="notification-dropdown">
						{notifications
							.filter((_n, index) => index < 3)
							.map((notification, index) => {
								return (
									<Link
										to="/notifications"
										key={index}
										onClick={(e) => {
											if (notification.type === 'message') {
												e.preventDefault();
												setIsMessagesTabOpen(true);
											}
										}}
									>
										{notification.content}
									</Link>
								);
							})}
						{notifications.length > 3 ? (
							<Link to="/notifications">{`Mais notificações (${
								notifications.length - 3
							})`}</Link>
						) : null}
					</div>
				</div>
				<div className="messages-tab-container" ref={messagesTab}>
					<MessagesTab
						newChat={openChatSelector}
						loggedInUser={userSelector}
						isOpen={isMessagesTabOpen}
						toggleIsOpen={() => {
							setIsMessagesTabOpen((previous) => !previous);
							if (openChatSelector !== null) {
								dispatch(Reducer.closeChat());
							}
						}}
					/>
				</div>
			</div>
			<div className="dropdown">
				<div className="profile">
					<ul>
						<li>
							<a href="/">
								<img
									src={userInfoSelector.profilePicture}
									alt={userInfoSelector.name}
								/>
							</a>
						</li>
					</ul>
					<div className="profile-menu">
						<a href="/"> Gerenciar Perfil </a>
						<Link to="/login"> Login </Link>
						<Link to="/registerUser"> Cadastrar-se </Link>
						<Link to="/shoppingCart">{`Carrinho (${numberOfItemsInCartSelector})`}</Link>
						<Link to="/history"> Histórico </Link>
						<Link to="/product/add"> Cadastrar Produto </Link>
						<a href="/"> Sair </a>
					</div>
				</div>
			</div>
		</div>
	);

	return mainContent;
};

export default Header;
