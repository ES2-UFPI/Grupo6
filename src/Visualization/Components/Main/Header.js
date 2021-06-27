import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Reducer from '../../../Reducers/Reducer';
import SearchBar from './SearchBar';
import MessagesTab from './MessagesTab';
import '../Styles/Header.css';

const Header = () => {
	const dispatch = useDispatch();
	const messagesTab = useRef();
	const [isMessagesTabOpen, setIsMessagesTabOpen] = useState(false);

	const numberOfItemsInCartSelector = useSelector(
		(state) => state.cart.cart.products.length
	);

	const userSelector = useSelector((state) => state.user.userId);
	const userInfoSelector = useSelector((state) => state.user.userInfo);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				messagesTab.current !== null &&
				!messagesTab.current.contains(e.target)
			) {
				setIsMessagesTabOpen(false);
			}
		};

		window.addEventListener('click', handleClickOutside, { capture: true });
	}, []);

	useEffect(() => {
		dispatch(
			Reducer.login('LrQkwykN4dPWjm7VkNIB', {
				name: 'Usuário 1',
				surname: 'Sobrenome 1',
				profilePicture:
					'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg',
			})
		);
	}, [dispatch]);

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
						loggedInUser={userSelector}
						isOpen={isMessagesTabOpen}
						toggleIsOpen={() => setIsMessagesTabOpen((previous) => !previous)}
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
						<Link to="/shoppingCart">{`Carrinho (${numberOfItemsInCartSelector})`}</Link>
						<Link to="/history"> Histórico </Link>
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
