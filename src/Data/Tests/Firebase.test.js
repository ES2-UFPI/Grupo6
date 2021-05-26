/**
 * @jest-environment node
 */

import Firebase from '../Firebase';

test('product set function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			setProductCategory: expect.any(Function),
			setProductTags: expect.any(Function),
			setProductPictures: expect.any(Function),
			setProductPrice: expect.any(Function),
			setProductPublicationDate: expect.any(Function),
			setProductDescription: expect.any(Function),
		})
	);
});

test('user set function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			setUserName: expect.any(Function),
			setUserSurname: expect.any(Function),
			setUserNickname: expect.any(Function),
			setUserProfilePicture: expect.any(Function),
			setUserEmail: expect.any(Function),
			setUserPassword: expect.any(Function),
			setUserCep: expect.any(Function),
			setUserResidenceNumber: expect.any(Function),
			setUserComplement: expect.any(Function),
			setUserAccountCreateDate: expect.any(Function),
			setUserCategoryClicks: expect.any(Function),
		})
	);
});

test('get function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			getProduct: expect.any(Function),
			getUser: expect.any(Function),
		})
	);
});

test('creation function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			createProduct: expect.any(Function),
			createUser: expect.any(Function),
		})
	);
});

test('delete function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			deleteProduct: expect.any(Function),
			deleteUser: expect.any(Function),
		})
	);
});

test('get all function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			getAllProducts: expect.any(Function),
			getAllUsers: expect.any(Function),
		})
	);
});

test('product functions working as intended', (done) => {
	const getCallback = (productInfo) => {
		try {
			expect(productInfo.category).toBe('Tech');
			expect(productInfo.tags).toEqual(['gadget', 'latest']);
			expect(productInfo.pictures).toEqual(['lorem', 'ipsum']);
			expect(productInfo.price).toBe(2000.25);
			expect(productInfo.description).toBe('Hello world');
			done();
		} catch (error) {
			done(error);
		}
	};

	const createProduct = async () => {
		const productId = await Firebase.createProduct();
		await Firebase.setProductCategory(productId, 'Tech');
		await Firebase.setProductTags(productId, ['gadget', 'latest']);
		await Firebase.setProductPictures(productId, ['lorem', 'ipsum']);
		await Firebase.setProductPrice(productId, 2000.25);
		await Firebase.setProductDescription(productId, 'Hello world');

		const productInfo = await Firebase.getProduct(productId);

		getCallback(productInfo);
	};

	createProduct();
});
