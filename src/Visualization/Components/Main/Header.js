import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import Results from '../Results';
import SearchBar from './SearchBar';

import '../Styles/Header.css';

const Header = () => {
	const numberOfItemsInCartSelector = useSelector(
		(state) => state.cart.cart.products.length
	);

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
			<div className = "notification">
				<div className="icon">
					<a href="/">
						<img src="https://i.imgur.com/pAPOaav.png" alt="Notification Icon" />
					</a>
				</div>
				<div className="notification-dropdown">
					<a href="/"> Este é um exemplo de notificação ! </a>
					<a href="/"> Você tem uma nova mensagem de Fulano. </a>
					<a href="/"> O seu produto está a caminho, acompanhe com o código XSAI-ASXD-ASJD</a>
					<Link to="/notification"> Mais notificações (3) </Link>
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
