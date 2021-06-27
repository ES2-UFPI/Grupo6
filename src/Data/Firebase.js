import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const Firebase = (() => {
	const firebaseConfig = {
		apiKey: 'AIzaSyCSqM26AC12B6tImWrB0q0M2H5bjtk2WuY',
		authDomain: 'brechonline-6119d.firebaseapp.com',
		projectId: 'brechonline-6119d',
		storageBucket: 'brechonline-6119d.appspot.com',
		databaseURL: 'https://brechonline-6119d-default-rtdb.firebaseio.com/',
		messagingSenderId: '1014908798356',
		appId: '1:1014908798356:web:ceb80e1a5175ed49bb3b81',
		measurementId: 'G-8GFNB7354C',
	};

	firebase.initializeApp(firebaseConfig);

	const database = firebase.firestore();
	const realTimeDatabase = firebase.database();

	const databaseStructure = {
		products: [
			'name',
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

		transactions: [
			'date',
			'valuePaid',
			'status',
			'localizationCode',
			'rating',
			'comment',
			'wouldBuyAgain',
			'productId',
			'sellerId',
			'buyerId',
		],

		notifications: ['type', 'content', 'isRead'],
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

	const generateGetMethodName = (collection) => {
		return convertToCamelCase(
			'get',
			collection.slice(0, collection.length - 1)
		);
	};

	const generateSetMethodName = (collection, attribute) => {
		return convertToCamelCase(
			'set',
			collection.slice(0, collection.length - 1),
			attribute
		);
	};

	const generateCreateMethodName = (collection) => {
		return convertToCamelCase(
			'create',
			collection.slice(0, collection.length - 1)
		);
	};

	const generateDeleteMethodName = (collection) => {
		return convertToCamelCase(
			'delete',
			collection.slice(0, collection.length - 1)
		);
	};

	const generateGetAllMethodName = (collection) => {
		return convertToCamelCase('get', 'all', collection);
	};

	const generateGetMethod = (collection) => {
		return async (documentId) => {
			return (
				await database.collection(collection).doc(documentId).get()
			).data();
		};
	};

	const generateSetMethod = (collection, attribute) => {
		return async (documentId, newValue) => {
			return await database
				.collection(collection)
				.doc(documentId)
				.set(
					{
						[attribute]:
							newValue instanceof Date
								? firebase.firestore.Timestamp.fromDate(newValue)
								: newValue,
					},
					{ merge: true }
				);
		};
	};

	const generateCreateMethod = (collection) => {
		return () => {
			return database.collection(collection).doc().id;
		};
	};

	const generateDeleteMethod = (collection) => {
		return async (documentId) => {
			return await database.collection(collection).doc(documentId).delete();
		};
	};

	const generateGetAllMethod = (collection) => {
		return async () => {
			return (await database.collection(collection).get()).docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
		};
	};

	return {
		...Object.fromEntries(
			Object.keys(databaseStructure).map((collection) => {
				return [
					generateGetMethodName(collection),
					generateGetMethod(collection),
				];
			})
		),
		...Object.fromEntries(
			Object.keys(databaseStructure)
				.map((collection) => {
					return databaseStructure[collection].map((attribute) => {
						return [
							generateSetMethodName(collection, attribute),
							generateSetMethod(collection, attribute),
						];
					});
				})
				.reduce((previous, current) => [...previous, ...current], [])
		),
		...Object.fromEntries(
			Object.keys(databaseStructure).map((collection) => {
				return [
					generateCreateMethodName(collection),
					generateCreateMethod(collection),
				];
			})
		),
		...Object.fromEntries(
			Object.keys(databaseStructure).map((collection) => {
				return [
					generateDeleteMethodName(collection),
					generateDeleteMethod(collection),
				];
			})
		),
		...Object.fromEntries(
			Object.keys(databaseStructure).map((collection) => {
				return [
					generateGetAllMethodName(collection),
					generateGetAllMethod(collection),
				];
			})
		),
		realTimeDatabase,
	};
})();

export default Firebase;
