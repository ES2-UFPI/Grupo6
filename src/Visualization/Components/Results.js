import React, { useState } from 'react';
import './Styles/Results.css';

const Results = (props) => {
	const [min, setMin] = useState(0.0);
	const [max, setMax] = useState(99999.99);

	const [category, setCategory] = useState(props.category);

	return (
		<div>
			<div className="filtros">
				<select
					name="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="">{''}</option>
					<option value={'Vestuário'}>Vestuário</option>
					<option value={'Eletrônicos'}>Eletrônicos</option>
					<option value={'Livros'}>Livros</option>
					<option value={'Eletrodomésticos'}>Eletrodomésticos</option>
					<option value={'Beleza'}>Beleza</option>
					<option value={'Esporte'}>Esporte</option>
					<option value={'Jogos'}>Jogos</option>
				</select>
				<input
					type="number"
					placeholder="min"
					onChange={(e) => {
						setMin(e.target.value);
					}}
				/>
				<input
					type="number"
					placeholder="max"
					onChange={(e) => {
						setMax(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						if (min === '') {
							setMin(0.0);
						}
						if (max === '') {
							setMax(99999.99);
						}
					}}
				>
					filtrar
				</button>
			</div>
		</div>
	);
};

export default Results;
