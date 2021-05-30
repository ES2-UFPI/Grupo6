/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './Styles/ShoppingCart.css';

const ShoppingCart = () => {

    const mainContent = (

        <div className="shopping-cart-main-content">
            <head>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
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
                                <input type="text" placeholder="Busque um produto" id="busca" /><button onClick="http://localhost:3000/product/add"></button>
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
                                        <a href="http://localhost:3000/shoppingCart"> Carrinho (0) </a>
                                        <a href="http://localhost:3000/product/add"> Cadastrar Produto </a>
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
                    <div className="page-title">
                        <h1>Carrinho de Compras</h1>
                    </div>
                    <div className="product">
                        <h2>- Nome do Produto</h2>
                        <img src="https://i.imgur.com/Or3qkoW.jpeg"/>
                        <h3>Valor:</h3>
                        <h4>Vendedor:</h4>
                        <div className="item-removal">
                            <h3>Remover Item ?</h3>
                            <button>✔</button>
                        </div>
                    </div>
                    <div className="subtotal">
                        <h1>Subtotal:</h1>
                        <div className="confirm">
                            <button>Confirmar</button>
                        </div>
                        <div className="cancel">
                            <button>Cancelar</button>
                        </div>
                    </div>
                </main>
            </body>
        </div>

    )

    return <div className="home-page-mockup">{mainContent}</div>;
};

export default ShoppingCart;
