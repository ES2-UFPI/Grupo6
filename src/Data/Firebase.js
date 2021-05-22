import firebase from 'firebase/app';
import 'firebase/firestore';

const Firebase = (() => {
	const firebaseConfig = {
		apiKey: 'AIzaSyCSqM26AC12B6tImWrB0q0M2H5bjtk2WuY',
		authDomain: 'brechonline-6119d.firebaseapp.com',
		projectId: 'brechonline-6119d',
		storageBucket: 'brechonline-6119d.appspot.com',
		messagingSenderId: '1014908798356',
		appId: '1:1014908798356:web:ceb80e1a5175ed49bb3b81',
		measurementId: 'G-8GFNB7354C',
	};

	firebase.initializeApp(firebaseConfig);

	const database = firebase.firestore();

	const productAttributes = [
		'category',
		'tags',
		'pictures',
		'price',
		'publicationDate',
		'description',
	];

	const getProductAttribute = async (productId, attribute) => {
		return (await database.collection('products').doc(productId).get()).data()[
			attribute
		];
	};

	const setProductAttribute = async (productId, attribute, newValue) => {
		return await database
			.collection('products')
			.doc(productId)
			.set({ [attribute]: newValue }, { merge: true });
	};

	return {
		...Object.fromEntries(
			productAttributes.map((attribute) => {
				return [
					'getProduct' + attribute[0].toUpperCase() + attribute.slice(1),
					async (productId) => {
						return await getProductAttribute(productId, attribute);
					},
				];
			})
		),
		...Object.fromEntries(
			productAttributes.map((attribute) => {
				return [
					'setProduct' + attribute[0].toUpperCase() + attribute.slice(1),
					async (productId, newValue) => {
						return await setProductAttribute(productId, attribute, newValue);
					},
				];
			})
		),
	};
})();

export default Firebase;
