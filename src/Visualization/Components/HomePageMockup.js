import React, { useState, useEffect } from 'react';
import './Styles/HomePageMockup.css';

const HomePageMockup = () =>{

    //const [productName]
    
    const mainContent = (

        <div className = "home-page-mockup-main-content">
            <head>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
            </head>

            <body>
                <header class = "header-homepage">
                    <main class = "column-100">
                        <div class = "header">
                            <div class = "logo">
                                <img src= "https://i.imgur.com/cXCcFKH.jpg" />
                            </div>
                        
                            <div class = "busca">
                                <input type="text" placeholder="Busque um produto" id="busca"/><button onClick =""></button>
                            </div>
                            <div class = "dropdown">
                                <div class = "profile">
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=z9Uz1icjwrM">
                                                <img src="https://i.imgur.com/cCzIZYI.png" />
                                                </a>
                                        </li>
                                    </ul>
                                    <div class = "profile-menu">
                                        <a href = ""> Visualizar Perfil </a>
                                        <a href = ""> Sair </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </header>
            </body>

            <body>
                <header class = "menu">
                </header>
                <main class = "column-100 menu-categorys">
                    <div class = "header2">
                        <div class = "menu">
                            <ul>
                                <li>
                                    <a href = "/homepage">HOME</a>
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
                    </div>
                </main>
            </body>
        </div> 
        
    )

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
