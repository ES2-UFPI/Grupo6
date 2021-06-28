import firebase from 'firebase/app';

const Logic_VisualizationDateAdapter = (object) => {
	return Object.fromEntries(
		Object.keys(object).map((key) => {
			return object[key] instanceof firebase.firestore.Timestamp
				? [key, object[key].toDate()]
				: [key, object[key]];
		})
	);
};

export default Logic_VisualizationDateAdapter;
