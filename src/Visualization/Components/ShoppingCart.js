/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../Reducers/Carrinho';

import './Styles/ShoppingCart.css';

const ShoppingCart = () => {
    const items = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

    const mainContent = (

        <div className="shopping-cart-main-content">
            <head>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
            </head>

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
