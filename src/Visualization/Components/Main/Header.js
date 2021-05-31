import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Results from '../Results';
import SearchBar from './SearchBar';

import '../Styles/Header.css';

const Header = () => {
	const [category, setCategory] = useState('');
	const rota = useLocation();

	const mainContent = (
		<div className="header">
			<div className="logo">
				<img src="https://i.imgur.com/cXCcFKH.jpg" alt="Brechonline" />
			</div>
			<div className="menu">
				<ul>
					<li>
						<Link
							to="/"
							onClick={() => {
								setCategory('');
							}}
						>
							HOME
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Vestuario')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Vestuario');
							}}
						>
							VESTUÁRIO
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Eletronicos')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Eletronicos');
							}}
						>
							ELETRÔNICOS
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Livros')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Livros');
							}}
						>
							LIVROS
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Eletrodomesticos')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Eletrodomesticos');
							}}
						>
							ELETRODOMÉSTICOS
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Beleza')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Beleza');
							}}
						>
							COSMÉTICO
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Esporte')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Esporte');
							}}
						>
							ESPORTIVO
						</Link>
					</li>
					<li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Jogos')}}*/
					>
						<Link
							onClick={() => {
								setCategory('Jogos');
							}}
						>
							JOGOS
						</Link>
					</li>
				</ul>
			</div>
			<SearchBar />
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
						<Link to="/shoppingCart"> Carrinho (0) </Link>
						<Link to="/product/add"> Cadastrar Produto </Link>
						<a href="/"> Sair </a>
					</div>
				</div>
			</div>
		</div>
	);

	if (category !== '' && rota.pathname === '/') {
		return (
			<div className="home-page-mockup">
				{mainContent}
				<Results category={category} />
			</div>
		);
	}
	return <div className="home-page-mockup">{mainContent}</div>;
};

export default Header;
