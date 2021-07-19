import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DoubtLogic from '../../../Logic/DoubtLogic';
import '../Styles/QandA.css';

const QandA = (props) => {
	const [inputText, setInputText] = useState('');
	const [doubts, setDoubts] = useState([]);

	useEffect(() => {
		const load = async () => {
			const aux = await DoubtLogic.getDoubts();
			setDoubts(aux);
		};
		load();
	}, []);

	return (
		<div className="q-and-a">
			<div className="questions">
				<label htmlFor="question-title">Campo de dúvidas:</label>
				<input
					type="text"
					maxLength={1500}
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
				></input>
				<input
					type="submit"
					value="Enviar"
					className="submit-button"
					onClick={async () => {
						await DoubtLogic.postDoubt(
							props.productId,
							props.loggedInUser,
							inputText
						);
						const addDoubt = await DoubtLogic.getDoubts();
						setDoubts(addDoubt);
						setInputText('');
					}}
				></input>
			</div>
			<div className="old-questions">
				<div className="title">
					<label>Perguntas Realizadas:</label>
				</div>
				<div>
					{doubts.map((i, index) => {
						if (i.productId === props.productId) {
							return <div key={index}>{i.question}</div>;
						} else return <div key={index}></div>;
					})}
				</div>
				<div className="first-question">
					<label htmlFor="user-question1"> Usuário 1 preguntou:</label>
					<p>- Isso faz isso ?</p>
				</div>
				<div className="second-question">
					<label htmlFor="user-question2"> Usuário 2 preguntou:</label>
					<p>- Esse troço tá funcionando ?</p>
					<div className="response">
						<label> Resposta do vendedor:</label>
						<p>- Sim !!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

QandA.propTypes = {
	productId: PropTypes.string,
	loggedInUser: PropTypes.string,
};

export default QandA;
