const noImageAvailableURL =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';

const Product_AdAdapter = (products) => {
	return products.map((product) => {
		return {
			label: product.name,
			price: product.price,
			link: '/product/' + product.id,
			picture:
				product.pictures.length > 0 ? product.pictures[0] : noImageAvailableURL,
		};
	});
};

export default Product_AdAdapter;
