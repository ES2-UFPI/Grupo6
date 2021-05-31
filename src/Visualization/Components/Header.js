import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Results from './Results';

import './Styles/Header.css';

const Header = () => {
    const [category, setCategory] = useState('');
    let rota = useLocation();

    const mainContent = (
        <div>
            <head>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
            </head>

            <body>
                <header className = "header-homepage">
                    <main className = "column-100">
                        <div className = "header">
                            <div className = "logo">
                                <img src= "https://i.imgur.com/cXCcFKH.jpg" />
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={()=>{setCategory('')}}>HOME</Link>
                                    </li>
                                    <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Vestuario')}}*/>
                                    <Link onClick={()=>{setCategory('Vestuario')}}>VESTUÁRIO</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Eletronicos')}}*/>
                                    <Link onClick={()=>{setCategory('Eletronicos')}}>ELETRÔNICOS</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Livros')}}*/>
                                    <Link onClick={()=>{setCategory('Livros')}}>LIVROS</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Eletrodomesticos')}}*/>
                                    <Link onClick={()=>{setCategory('Eletrodomesticos')}}>ELETRODOMÉSTICOS</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Beleza')}}*/>
                                    <Link onClick={()=>{setCategory('Beleza')}}>COSMÉTICO</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Esporte')}}*/>
                                    <Link onClick={()=>{setCategory('Esporte')}}>ESPORTIVO</Link>
                                </li>
                                <li /*onClick={async ()=>{await userLogic.addCategory(props.user.id, 'Jogos')}}*/>
                                    <Link onClick={()=>{setCategory('Jogos')}}>JOGOS</Link>
                                </li>
                                </ul>
                            </div>
                            <div className = "busca">
                                <input type="text" placeholder="Busque um produto" id="busca" /><button onClick = "http://localhost:3000/product/add"></button>
                            </div>
                            <div className = "dropdown">
                                <div className = "profile">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src="https://i.imgur.com/15AJNre.png" />
                                                </a>
                                        </li>
                                    </ul>
                                    <div className = "profile-menu">
                                        <a href = ""> Gerenciar Perfil </a>
                                        <Link to="/shoppingCart"> Carrinho (0) </Link>
                                        <Link to= "/product/add"> Cadastrar Produto </Link>
                                        <a href = ""> Sair </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </header>
            </body>
        </div>
    )

    if(category !== '' && rota.pathname === '/'){
        return(
            <div className="home-page-mockup">
                {mainContent}
                <Results category={category} />
                </div>
        )
    }
    return <div className="home-page-mockup">{mainContent}</div>;
}

export default Header;