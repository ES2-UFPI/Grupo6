import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import '../Styles/Header.css';
import MessagesTab from './MessagesTab';

const Header = () => {
	const messagesTab = useRef();
	const [isMessagesTabOpen, setIsMessagesTabOpen] = useState(false);

	const numberOfItemsInCartSelector = useSelector(
		(state) => state.cart.cart.products.length
	);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				messagesTab.current !== undefined &&
				!messagesTab.current.contains(e.target)
			) {
				setIsMessagesTabOpen(false);
			}
		};

		window.addEventListener('click', handleClickOutside, { capture: true });
	}, []);

	const mainContent = (
		<div className="header">
			<div className="logo">
				<img src="https://i.imgur.com/cXCcFKH.jpg" alt="Brechonline" />
			</div>
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
						<Link to="/product/category/esportivo">JOGOS</Link>
					</li>
				</ul>
			</div>
			<SearchBar />
			<div className="header-tabs">
				<div className="notification">
					<div className="icon">
						<Link to="/notification">
							<img
								src="https://i.imgur.com/pAPOaav.png"
								alt="Notification Icon"
							/>
						</Link>
					</div>
					<div className="notification-dropdown">
						<a href="/"> Este é um exemplo de notificação ! </a>
						<a href="/"> Você tem uma nova mensagem de Fulano. </a>
						<a href="/">
							{' '}
							O seu produto está a caminho, acompanhe com o código
							XSAI-ASXD-ASJD
						</a>
						<Link to="/notification"> Mais notificações (3) </Link>
					</div>
				</div>
				<div className="messages-tab-container" ref={messagesTab}>
					<MessagesTab
						isOpen={isMessagesTabOpen}
						toggleIsOpen={() => setIsMessagesTabOpen((previous) => !previous)}
						users={[
							{
								id: '1',
								name: 'Usuário 1',
								profilePicture: 'https://thiscatdoesnotexist.com/',
								messages: Array(15)
									.fill(0)
									.map((_v, index) => {
										return {
											id: `${index}`,
											content: `Mensagem ${index}`,
											date: new Date(2020, 5, 26, 15, index),
											isSentByLoggedInUser: index % 2 === 0,
										};
									}),
							},
							{
								id: '2',
								name: 'Usuário 2',
								profilePicture: 'https://thispersondoesnotexist.com/image',
								messages: Array(15)
									.fill(0)
									.map((_v, index) => {
										return {
											id: `${index}`,
											content: `Mensagem ${index}`,
											date: new Date(2020, 5, 25, 15, index),
											isSentByLoggedInUser: index % 2 === 0,
										};
									}),
							},
							{
								id: '3',
								name: 'Usuário 3',
								profilePicture: 'https://thishorsedoesnotexist.com/',
								messages: Array(15)
									.fill(0)
									.map((_v, index) => {
										return {
											id: `${index}`,
											content: `Mensagem ${index}`,
											date: new Date(2020, 5, 24, 15, index),
											isSentByLoggedInUser: index % 2 === 0,
										};
									}),
							},
						]}
					/>
				</div>
			</div>
			<div className="dropdown">
				<div className="profile">
					<ul>
						<li>
							<a href="/">
								<img src="https://i.imgur.com/15AJNre.png" alt="User Profile" />
							</a>
						</li>
					</ul>
					<div className="profile-menu">
						<a href="/"> Gerenciar Perfil </a>
						<Link to="/shoppingCart">{`Carrinho (${numberOfItemsInCartSelector})`}</Link>
						<Link to="/historic"> Histórico </Link>
						<Link to="/product/add"> Cadastrar Produto </Link>
						<a href="/"> Sair </a>
					</div>
				</div>
			</div>
		</div>
	);

	/*if (category !== '' && rota.pathname === '/') {
		return (
			<div className="home-page-mockup">
				{mainContent}
				<Results category={category} />
			</div>
		);
	}*/
	return <div className="home-page-mockup">{mainContent}</div>;
};

export default Header;
