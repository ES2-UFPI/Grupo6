import React from 'react';
import Firebase from '../../../Data/Firebase';
import UserLogic from '../../../Logic/UserLogic';
import '../Styles/LoginPage.css';

const loginPage = () => {

	const funcaoBotaoLogar = async () => {
		let resultUser = await Firebase.googleLogin()

		if(resultUser){
			let user = {
				id: resultUser.uid,
				name: resultUser.displayName,
				photo: resultUser.photoURL,
				email: resultUser.email
			}
			UserLogic.socialAuth(user)
		}else{
			alert('Error')
		}
	}

	return (
		<div className="main-login">
			<div className="title-login">
				<label>Bem vindo ao </label>
				<div className="logo-img">
					<img src="https://i.imgur.com/eKuNqoi.png" alt="Brechonline" />
				</div>
			</div>
			<div className="subtitle-login">
				<label>uma nova experiência de compra ! </label>
			</div>
			<div className="description-login">
				<label>Realize seu login:</label>
				<button type="google" className="g-btt" onClick={funcaoBotaoLogar()}>
					Logar com o Google
				</button>
			</div>
			<div className="register-login">
				<a href="/registerUser">Não é cadastrado? Clique aqui :D</a>
			</div>
			<div className="images-login">
				<div className="back-img">
					<img
						src="https://i.imgur.com/ITXbiHd.png"
						alt="Ladrão segurando cartão de crédito"
					/>
				</div>
			</div>
		</div>
	);
};

export default loginPage;
