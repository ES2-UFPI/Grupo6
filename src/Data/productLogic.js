/*
import Firebase from './Firebase';

const productLogic = (() => {

    function isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    const addPhoto = async (product) => {
        await Firebase.setProductPicture(product.id, product.picture);
    }

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

})();

//http://localhost:3000/product/
//add?product-name=Celular&description=Samsung+j1+mini&price=10.00&category=Eletr%C3%B4nicos

export default productLogic;
*/