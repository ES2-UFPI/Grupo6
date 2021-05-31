import Firebase from '../Data/Firebase';

const ProductLogic = (() => {
	/*function isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }*/

	/*const addPhoto = async (product) => {
        await Firebase.setProductPicture(product.id, product.picture);
    };

    const updateData = async (product) => {
        if (isNumber(product.price)) {
            throw "O campo só aceita valores numéricos.";
        }
        if (product.name !== '') {
            await Firebase.setProductName(product.id, product.name);
        }
        if (product.description !== '') {
            await Firebase.setProductDescription(product.id, product.description);
        }
        if (product.picture !== '') {
            await Firebase.setProductPicture(product.id, product.picture);
        }
        if (product.price !== '') {
            await Firebase.setProductPrice(product.id, product.price);
        }
    };*/

	const addNewProduct = async (product) => {
		const productId = await Firebase.createProduct();
		await Firebase.setProductName(productId, product.name);
		await Firebase.setProductCategory(productId, product.category);
		await Firebase.setProductTags(productId, product.tags);
		await Firebase.setProductPictures(productId, product.pictures);
		await Firebase.setProductPrice(productId, product.price);
		await Firebase.setProductPublicationDate(productId, new Date());
		await Firebase.setProductDescription(productId, product.description);
	};

	return {
		addNewProduct,
	};
})();

export default ProductLogic;
