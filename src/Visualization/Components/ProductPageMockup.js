/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import './Styles/ProductPageMockup.css';

const ProductPageMockup = () => {
	const mainContent = (
		<div className="product-page-mockup-main-content">
			<head>
				<link
					rel="stylesheet"
					type="text/css"
					href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
				/>
			</head>

			<body>
				<header className="header-homepage">
					<main className="column-100">
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
								<button onClick="http://localhost:3000/product/add"></button>
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
										<a href="http://localhost:3000/shoppingCart">
											{' '}
											Carrinho (0){' '}
										</a>
										<a href="http://localhost:3000/product/add">
											{' '}
											Cadastrar Produto{' '}
										</a>
										<a href=""> Sair </a>
									</div>
								</div>
							</div>
						</div>
					</main>
				</header>
			</body>
			<body>
				<main className="column-100 body">
					<div className="header2">
						<div className="title">
							<h1>Nome do Produto</h1>
						</div>
						<div className="product-first-block">
							<img
								className="seller-product"
								src="https://i.imgur.com/Or3qkoW.jpeg"
							/>
							<h2>DESCRIÇÃO:</h2>
							<p className="description-body">
								God of War II é um jogo eletrônico de ação-aventura e hack and
								slash desenvolvido pela Santa Monica Studio e publicado pela
								Sony Computer Entertainment (SCE). Lançado pela primeira vez em
								13 de março de 2007 para PlayStation 2, é o segundo jogo da
								franquia God of War e o sexto em ordem cronológica, sendo a
								continuação de God of War (2005). O jogo é vagamente baseado na
								mitologia grega e ambientado no interior do Ceará , com a
								vingança sendo o tema central. O personagem do jogador é o
								protagonista Crateús, o novo deus da rapadura que tomou o lugar
								de Zezinho Cana Seca depois de ter o matado. Crateús é traído
								por JooJ, o rei das Canas de Açucar, que tira dele sua
								propriedade e o mata. Lentamente arrastado para o submundo do
								crime, ele é salvo pelo Proerd, que o instrui a encontrar a
								Polícia Militar do Ceará, pois elas possuem o poder para fazer
								Crateús voltar no tempo, impedir a traição de JooJ e
								consequentemente sua morte
							</p>
							<div className="seller-box">
								<img
									className="seller-profile"
									src="https://i.imgur.com/6wn6pV5.png"
								/>
								<h3>Nome do Vendedor</h3>
								<h3>Estado - UF:</h3>
								<h3>Cidade:</h3>
								<h3>Avaliação:</h3>
								<div className="message">
									<img
										className="send-message"
										src="https://i.imgur.com/ljsriLj.png"
									/>
									<p>Envie uma menssagem ao vendedor</p>
								</div>
								<div className="box-message">
									<button onClick="http://localhost:3000/product/add"></button>
								</div>
							</div>
							<div className="value">
								<h1>Valor:</h1>
								<div className="cart">
									<a href="http://localhost:3000/shoppingCart">
										Adicionar ao Carrinho
									</a>
								</div>
							</div>
						</div>
					</div>
				</main>
			</body>
		</div>
	);

	return <div className="product-page-mockup">{mainContent}</div>;
};

export default ProductPageMockup;
