import React from 'react';
import '../Styles/AdRow.css';

const AdRow = () => {
	return (
		<div className="ad-row">
			<label>Produtos Recomendados para você:</label>
			<div className="product-showcase">
				<div className="product-showcase-product">
					<img src="https://i.imgur.com/Ni6TMqg.jpg" alt="Camisa" />
					<div className="product-showcase-info">
						<label> Camisa Amugus Aniversário</label>
						<p>R$ 80.00</p>
						<button type="vejamais" className="veja-mais-button" onClick="">
							Veja Mais +
						</button>
					</div>
				</div>
				<div className="product-showcase-product">
					<img src="https://i.imgur.com/CFFkuxo.jpg" alt="Camisa" />
					<div className="product-showcase-info">
						<label> Camisa ShAKIRA</label>
						<p>R$ 120.37</p>
						<button type="vejamais" className="veja-mais-button" onClick="">
							Veja Mais +
						</button>
					</div>
				</div>
				<div className="product-showcase-product">
					<img src="https://i.imgur.com/0UbfMTv.jpg" alt="Mochila" />
					<div className="product-showcase-info">
						<label> Mochila HarryPotter</label>
						<p>R$ 500.00</p>
						<button type="vejamais" className="veja-mais-button" onClick="">
							Veja Mais +
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdRow;
