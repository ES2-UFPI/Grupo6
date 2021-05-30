/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const HomePageMockup = () => {
	//const [productName]

	const mainContent = (
		<div className="home-page-mockup-main-content">
			<div className="header">
				<div className="logo">
					<img src="https://i.imgur.com/cXCcFKH.jpg" />
				</div>
				<div className="menu">
					<ul>
						<li>
							<a href="/homepage">HOME</a>
						</li>
						<li>
							<a href="">VESTUÁRIO</a>
						</li>
						<li>
							<a href="">ELETRÔNICO</a>
						</li>
						<li>
							<a href="">LIVROS</a>
						</li>
						<li>
							<a href="">ELETRODOMÉSTICOS</a>
						</li>
						<li>
							<a href="">COSMÉTICO</a>
						</li>
						<li>
							<a href="">ESPORTIVO</a>
						</li>
						<li>
							<a href="">JOGOS</a>
						</li>
					</ul>
				</div>
				<div className="busca">
					<input type="text" placeholder="Busque um produto" id="busca" />
					<a href="/product/add">
						<span></span>
					</a>
				</div>
				<div className="dropdown">
					<div className="profile">
						<ul>
							<li>
								<a href="">
									<img src="https://i.imgur.com/15AJNre.png" />
								</a>
							</li>
						</ul>
						<div className="profile-menu">
							<a href=""> Gerenciar Perfil </a>
							<a href="/shoppingCart"> Carrinho (0) </a>
							<a href="/product/add"> Cadastrar Produto </a>
							<a href=""> Sair </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return <div className="home-page-mockup">{mainContent}</div>;
};

//logo: https://i.imgur.com/xKf5ztQ.png
//logo micro: https://i.imgur.com/HKOM9l3.jpg
//logo 66px: https://i.imgur.com/cXCcFKH.jpg
//profile picture test: https://i.imgur.com/OwMJFsw.png
//micro profile picture test: https://i.imgur.com/wQtFcqM.png
//https://i.imgur.com/cCzIZYI.png

//Colors
//Verde - #7DD359
//Cinza - #737373

export default HomePageMockup;
