const noImageAvailableURL =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';

const Logic_ProductPreviewAdapter = (productObject) => {
	return {
		...productObject,
		picture:
			productObject.pictures.length > 0
				? productObject.pictures[0]
				: noImageAvailableURL,
	};
};

export default Logic_ProductPreviewAdapter;
