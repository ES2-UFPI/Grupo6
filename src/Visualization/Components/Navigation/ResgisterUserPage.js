/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import UserLogic from '../../../Logic/UserLogic';
import '../Styles/RegisterUserPage.css';

const RegisterUserPage = () => {

	const [name, setName] = useState('');
	const [photo, setPhoto] = useState('');
	const [cpf, setCpf] = useState('');
	const [cep, setCep] = useState('');
	const [residenceNumber, setResidenceNumber] = useState('');
	const [street, setStreet] = useState('');
	const [complement, setComplement] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');

	function containsNumber(str) {
		return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].any((number) =>
			str.includes(number)
		);
	}

	function isNumber(str) {
		return !isNaN(parseFloat(str)) && isFinite(str);
	}

	function register(){
		if(
			name === '' || cpf === ''
		){
			alert('Campos obrigatórios não preenchidos!')
			return
		}else if(!isNumber(cep)){
			alert('Campo de cep deve ser um valor numérico!')
			return
		}else if(containsNumber(name)){
			alert('Campo de nome não permite valores numéricos!')
			return
		}else {
			const user = {
				name: name,
				surname: '',
				nick: '',
				photo: photo,
				cep: cep,
				addres: residenceNumber,
				complement: '',
				email: '',
				password: '',
				date: new Date(),
			};
	
			const registerUser = async () => {
				await UserLogic.createAccount(user)
			};
	
			registerUser();
		}
	}

	return (
		<div className="main">
			<div className="page-title">
				<h1>CADASTRAR USUÁRIO</h1>
			</div>
			<div className="form">
				<div className="name-section">
					<label htmlFor="username">Nome Completo * :</label>
					<input required type="text" name="username" maxLength={100} onChange={(e)=>setName(e.target.value)}></input>
					<span className="missing-name-span">{}</span>
				</div>
				<div className="profile-picture-section">
					<label htmlFor="picture">Foto de Perfil:</label>
					<input
						name="pictures"
						type="file"
						multiple
						accept="image/*"
						onChange={(e) => {setPhoto(e.target.value)}}
					></input>
				</div>
				<div className="cpf-section">
					<label htmlFor="cpf">CPF * :</label>
					<input required type="text" name="cpf" maxLength={11} onChange={(e) => {setCpf(e.target.value)}}></input>
					<span className="missing-cpf-span">{}</span>
				</div>
				<div className="adress-section">
					<label>Endereço :</label>
					<div className="rua">
						<label htmlFor="rua">- Rua * :</label>
						<input required type="text" name="rua" maxLength={30} onChange={(e) => {setStreet(e.target.value)}}></input>
						<span className="missing-rua-span">{}</span>
					</div>
					<div className="numero">
						<label htmlFor="numero">- Número * :</label>
						<input required type="text" name="numero" maxLength={6} onChange={(e) => {setResidenceNumber(e.target.value)}}></input>
						<span className="missing-numero-span">{}</span>
					</div>
					<div className="complemento">
						<label htmlFor="complemento">- Complemento :</label>
						<input
							required
							type="text"
							name="complemento"
							maxLength={100}
							onChange={(e) => {setComplement(e.target.value)}}
						></input>
						<span className="missing-complemento-span">{}</span>
					</div>
					<div className="cep">
						<label htmlFor="cep">- CEP * :</label>
						<input required type="text" name="cep" maxLength={8} onChange={(e) => {setCep(e.target.value)}}></input>
						<span className="missing-cep-span">{}</span>
					</div>
					<div className="cidade">
						<label htmlFor="cidade">- Cidade * :</label>
						<input required type="text" name="cidade" maxLength={30} onChange={(e) => {setCity(e.target.value)}}></input>
						<span className="missing-cidade-span">{}</span>
					</div>
					<div className="estado">
						<label htmlFor="estado">- Estado * :</label>
						<select name="estado" onChange={(e) => {setState(e.target.value)}}>
							<option value="">{''}</option>
							<option value={'Acre'}>Acre</option>
							<option value={'Alagoas'}>Alagoas</option>
							<option value={'Amapá'}>Amapa</option>
							<option value={'Amazonas'}>Amazonas</option>
							<option value={'Bahia'}>Bahia</option>
							<option value={'Ceará'}>Ceara</option>
							<option value={'Espírito Santo'}>Espirito Santo</option>
							<option value={'Goiás'}>Goias</option>
							<option value={'Maranhão'}>Maranhao</option>
							<option value={'Mato Grosso'}>Mato Grosso</option>
							<option value={'Mato Grosso do Sul '}>Mato Grosso do Sul </option>
							<option value={'Minas Gerais'}>Minas Gerais</option>
							<option value={'Pará'}>Para</option>
							<option value={'Paraíba'}>Paraiba</option>
							<option value={'Paraná'}>Parana</option>
							<option value={'Pernambuco'}>Pernambuco</option>
							<option value={'Piauí'}>Piaui</option>
							<option value={'Rio de Janeiro'}>Rio de Janeiro</option>
							<option value={'Rio Grande do Norte'}>Rio Grande do Norte</option>
							<option value={'Rio Grande do Sul '}>Rio Grande do Sul </option>
							<option value={'Rondônia'}>Rondonia</option>
							<option value={'Roraima'}>Roraima</option>
							<option value={'Santa Catarina '}>Santa Catarina </option>
							<option value={'São Paulo'}>Sao Paulo</option>
							<option value={'Sergipe'}>Sergipe</option>
							<option value={'Tocantins'}>Tocantins</option>
							<option value={'Distrito Federal '}>Distrito Federal </option>
						</select>
						<span className="missing-category-span"></span>
					</div>
				</div>
				<div className="login-section">
					<label htmlFor="login-type">Tipo de Login * :</label>
					<div className="login-buttons">
						<button type="google" className="g-btt" onClick="">
							Logar com o Google
						</button>
					</div>
				</div>
				<input
					type="submit"
					value="Cadastrar"
					className="submit-button"
					onClick={register}
				></input>
			</div>
		</div>
	);
};

export default RegisterUserPage;
