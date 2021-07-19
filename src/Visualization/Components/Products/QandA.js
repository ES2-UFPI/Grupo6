import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DoubtLogic from '../../../Logic/DoubtLogic';
import '../Styles/QandA.css';

const QandA = (props) => {
	const [inputText, setInputText] = useState('');
	const [doubts, setDoubts] = useState([]);

	useEffect(() => {
		const load = async () => {
			const aux = await DoubtLogic.getDoubtsForProduct(props.productId);
			setDoubts(aux);
		};
		load();
	}, [props.productId]);

	const generateAnswerField = (doubtId) => {
		return (
			<div className="answer-field">
				<input
					type="text"
					placeholder="Responda"
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
				></input>
				<button
					className="send-answer-button"
					onClick={async (_e) => {
						await DoubtLogic.answerDoubt(doubtId, inputText);
						setDoubts(await DoubtLogic.getDoubtsForProduct(props.productId));
					}}
				>
					Enviar
				</button>
			</div>
		);
	};

	return (
		<div className="q-and-a">
			{props.loggedInUser !== props.productOwner ? (
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
							setDoubts(await DoubtLogic.getDoubtsForProduct(props.productId));
							setInputText('');
						}}
					></input>
				</div>
			) : null}
			<div className="old-questions">
				<div className="title">
					<label>Perguntas Realizadas:</label>
				</div>
				<div>
					{doubts.map((doubt, index) => {
						return (
							<div className="question" key={index}>
								<label htmlFor="user-question">{`${doubt.userName} perguntou:`}</label>
								<p>{`- ${doubt.question}`}</p>
								{doubt.answer.length > 0 ? (
									<div className="response">
										<label>Resposta do vendedor:</label>
										<p>{doubt.answer}</p>
									</div>
								) : null}
								{props.productOwner === props.loggedInUser &&
								doubt.answer.length === 0
									? generateAnswerField(doubt.id)
									: null}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

QandA.propTypes = {
	productOwner: PropTypes.string,
	productId: PropTypes.string,
	loggedInUser: PropTypes.string,
};

export default QandA;
