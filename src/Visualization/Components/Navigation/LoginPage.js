/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Styles/LoginPage.css';

const loginPage = () => {
	return (
		<div className="main-login">
			<div className="title-login">
				<label>Bem vindo ao </label>
			</div>
			<div className="subtitle-login">
				<label>uma nova experiência de compra ! </label>
			</div>
			<div className="description-login">
				<label>Realize seu login:</label>
			</div>
			<div className="register-login">
				<a href="/registerUser">Não é cadastrado? Clique aqui :D</a>
			</div>
			<div className="images-login">
				<div className="back-img">
					<img src="https://i.imgur.com/ITXbiHd.png" />
				</div>
				<div className="logo-img">
					<img src="https://i.imgur.com/eKuNqoi.png" />
				</div>
			</div>
			<div className="buttons-login">
				<div className="google-button">
					<button type="google" className="g-btt" onClick="">
						Logar com o Google
					</button>
					<img src="https://i.imgur.com/4294vBC.png" />
				</div>
			</div>
		</div>
	);
};

export default loginPage;
