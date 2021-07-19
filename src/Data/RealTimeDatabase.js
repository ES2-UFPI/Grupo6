import firebase from 'firebase/app';
import 'firebase/database';
import Firebase from './Firebase';

const RealTimeDatabase = (() => {
	const database = Firebase.realTimeDatabase;

	const databaseFields = ['messages'];

	const convertToCamelCase = (...names) => {
		return (
			names[0].toLowerCase() +
			names
				.slice(1)
				.map((name) => name[0].toUpperCase() + name.slice(1))
				.join('')
		);
	};

	const generateListenMethodName = (field) => {
		return convertToCamelCase('listen', 'to', field);
	};

	const generatePushMethodName = (field) => {
		return convertToCamelCase('push', 'to', field);
	};

	const generateUpdateMethodName = (field) => {
		return convertToCamelCase('update', field.slice(0, field.length - 1));
	};

	const generateDeleteMethodName = (field) => {
		return convertToCamelCase('delete', 'from', field);
	};

	const generateListenMethod = (field) => {
		const reference = database.ref(field);
		return (callback) => {
			reference.on('value', (snapshot) => {
				callback(snapshot.val());
			});
		};
	};

	const generatePushMethod = (field) => {
		const reference = database.ref(field);
		return (newItem) => {
			const newReference = reference.push();
			newReference.set(
				Object.fromEntries(
					Object.keys(newItem).map((key) => {
						return [
							key,
							newItem[key] instanceof Date
								? firebase.firestore.Timestamp.fromDate(newItem[key])
								: newItem[key],
						];
					})
				)
			);
			return newReference.key;
		};
	};

	const generateUpdateMethod = (field) => {
		return (itemId, newValue) => {
			const reference = database.ref(field + '/' + itemId);
			reference.update(newValue);
		};
	};

	const generateDeleteMethod = (field) => {
		return (itemId) => {
			const reference = database.ref(field + '/' + itemId);
			reference.remove();
		};
	};

	return {
		...Object.fromEntries(
			databaseFields.map((field) => {
				return [generateListenMethodName(field), generateListenMethod(field)];
			})
		),
		...Object.fromEntries(
			databaseFields.map((field) => {
				return [generatePushMethodName(field), generatePushMethod(field)];
			})
		),
		...Object.fromEntries(
			databaseFields.map((field) => {
				return [generateUpdateMethodName(field), generateUpdateMethod(field)];
			})
		),
		...Object.fromEntries(
			databaseFields.map((field) => {
				return [generateDeleteMethodName(field), generateDeleteMethod(field)];
			})
		),
	};
})();

export default RealTimeDatabase;
