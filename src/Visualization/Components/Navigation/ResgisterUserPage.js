/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Styles/RegisterUserPage.css';

const registerUserPage = () => {

    return (<div className="main">
        <div className="page-title">
            <h1>CADASTRAR USUÁRIO</h1>
        </div>
        <div className="form">
            <div className="name-section">
                <label htmlFor="username">Nome Completo * :</label>
                <input
                    required
                    type="text"
                    name="username"
                    maxLength={100}
                ></input>
                <span className="missing-name-span">{}</span>
            </div>
            <div className="profile-picture-section">
                <label htmlFor="picture">Foto de Perfil:</label>
                <input
                    name="pictures"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {}}
                ></input>
            </div>
            <div className="cpf-section">
                <label htmlFor="cpf">CPF * :</label>
                <input
                    required
                    type="text"
                    name="cpf"
                    maxLength={11}
                ></input>
                <span className="missing-cpf-span">{ }</span>
            </div>
            <div className="adress-section">
                <label>Endereço :</label>
                <div className="rua">
                    <label htmlFor="rua">- Rua * :</label>
                    <input
                        required
                        type="text"
                        name="rua"
                        maxLength={30}
                    ></input>
                    <span className="missing-rua-span">{ }</span>
                </div>
                <div className="numero">
                    <label htmlFor="numero">- Número * :</label>
                    <input
                        required
                        type="text"
                        name="numero"
                        maxLength={6}
                    ></input>
                    <span className="missing-numero-span">{ }</span>
                </div>
                <div className="complemento">
                    <label htmlFor="complemento">- Complemento  :</label>
                    <input
                        required
                        type="text"
                        name="complemento"
                        maxLength={100}
                    ></input>
                    <span className="missing-complemento-span">{ }</span>
                </div>
                <div className="cep">
                    <label htmlFor="cep">- CEP * :</label>
                    <input
                        required
                        type="text"
                        name="cep"
                        maxLength={8}
                    ></input>
                    <span className="missing-cep-span">{ }</span>
                </div>
                <div className="cidade">
                    <label htmlFor="cidade">- Cidade * :</label>
                    <input
                        required
                        type="text"
                        name="cidade"
                        maxLength={30}
                    ></input>
                    <span className="missing-cidade-span">{ }</span>
                </div>
                <div className="estado">
                    <label htmlFor="estado">- Estado * :</label>
                    <select
                        name="estado"
                    >
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
                    <div className="google-button">
                        <button
                            type="google"
                            className="g-btt"
                            onClick="" >
                            Logar com o Google
                        </button>
                        <img src="https://i.imgur.com/4294vBC.png" />
                    </div>
                </div>
            </div>
            <input
                type="submit"
                value="Cadastrar"
                className="submit-button"
                onClick={async (e) => {}}
            ></input>
        </div>
    </div>);
    
}

export default registerUserPage;