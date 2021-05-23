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

	const databaseStructure = {
		products: [
			'category',
			'tags',
			'pictures',
			'price',
			'publicationDate',
			'description',
		],

		users: [
			'name',
			'surname',
			'nickname',
			'profilePicture',
			'email',
			'password',
			'cep',
			'residenceNumber',
			'complement',
			'accountCreateDate',
			'categoryClicks',
		],
	};

	const convertToCamelCase = (...names) => {
		return (
			names[0].toLowerCase() +
			names
				.slice(1)
				.map((name) => name[0].toUpperCase() + name.slice(1))
				.join('')
		);
	};

	const generateGetMethodName = (collection, attribute) => {
		return convertToCamelCase(
			'get',
			collection.slice(0, collection.length - 1),
			attribute
		);
	};

	const generateSetMethodName = (collection, attribute) => {
		return convertToCamelCase(
			'set',
			collection.slice(0, collection.length - 1),
			attribute
		);
	};

	const generateGetMethod = (collection, attribute) => {
		return async (documentId) => {
			return (
				await database.collection(collection).doc(documentId).get()
			).data()[attribute];
		};
	};

	const generateSetMethod = (collection, attribute) => {
		return async (documentId, newValue) => {
			return await database
				.collection(collection)
				.doc(documentId)
				.set({ [attribute]: newValue }, { merge: true });
		};
	};

	return {
		...Object.fromEntries(
			...Object.keys(databaseStructure).map((collection) => {
				return databaseStructure[collection].map((attribute) => {
					return [
						generateGetMethodName(collection, attribute),
						generateGetMethod(collection, attribute),
					];
				});
			})
		),
		...Object.fromEntries(
			...Object.keys(databaseStructure).map((collection) => {
				return databaseStructure[collection].map((attribute) => {
					return [
						generateSetMethodName(collection, attribute),
						generateSetMethod(collection, attribute),
					];
				});
			})
		),
	};
})();

export default Firebase;
