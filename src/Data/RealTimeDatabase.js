import firebase from 'firebase/app';
import 'firebase/database';

const RealTimeDatabase = (() => {
    const database = firebase.database();

})();

export default RealTimeDatabase;