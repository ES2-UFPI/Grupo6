/**
 * @jest-environment node
 */
import Firebase from '../Firebase';

test('product set function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			setProductName: expect.any(Function),
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
			getTransaction: expect.any(Function),
			getNotification: expect.any(Function),
		})
	);
});

test('creation function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			createProduct: expect.any(Function),
			createUser: expect.any(Function),
			createTransaction: expect.any(Function),
			createNotification: expect.any(Function),
		})
	);
});

test('delete function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			deleteProduct: expect.any(Function),
			deleteUser: expect.any(Function),
			deleteTransaction: expect.any(Function),
			deleteNotification: expect.any(Function),
		})
	);
});

test('get all function names being assigned correctly', () => {
	expect(Firebase).toEqual(
		expect.objectContaining({
			getAllProducts: expect.any(Function),
			getAllUsers: expect.any(Function),
			getAllTransactions: expect.any(Function),
			getAllNotifications: expect.any(Function),
		})
	);
});

test('product functions working as intended', (done) => {
	const getCallback = async (productInfo) => {
		try {
			expect(productInfo.name).toBe('Cellphone');
			expect(productInfo.category).toBe('Tech');
			expect(productInfo.tags).toEqual(['gadget', 'latest']);
			expect(productInfo.pictures).toEqual(['lorem', 'ipsum']);
			expect(productInfo.price).toBe(2000.25);
			expect(productInfo.description).toBe('Hello world');
			expect(productInfo.publicationDate.toDate()).toEqual(
				new Date(2020, 1, 1)
			);
			await Firebase.deleteProduct(productInfo.id);
			done();
		} catch (error) {
			done(error);
		}
	};

	const createProduct = async () => {
		const productId = await Firebase.createProduct();
		await Firebase.setProductName(productId, 'Cellphone');
		await Firebase.setProductCategory(productId, 'Tech');
		await Firebase.setProductTags(productId, ['gadget', 'latest']);
		await Firebase.setProductPictures(productId, ['lorem', 'ipsum']);
		await Firebase.setProductPrice(productId, 2000.25);
		await Firebase.setProductPublicationDate(productId, new Date(2020, 1, 1));
		await Firebase.setProductDescription(productId, 'Hello world');

		const productInfo = await Firebase.getProduct(productId);

		getCallback(productInfo);
	};

	createProduct();
});
