import Firebase from '../Data/Firebase';

const UserLogic = (() => {
	function containsNumber(str) {
		return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].any((number) =>
			str.includes(number)
		);
	}

	function isNumber(str) {
		return !isNaN(parseFloat(str)) && isFinite(str);
	}

	const addPhoto = async (user) => {
		await Firebase.setUserProfilePicture(user.id, user.photo);
	};

	const updateData = async (user) => {
		if (containsNumber(user.name) || containsNumber(user.name)) {
			throw Error('Há campos que não permitem números com valores numéricos.');
		}

		if (isNumber(user.cep)) {
			throw Error('O campo deve ser um valor numérico.');
		}
		if (user.name !== '') {
			await Firebase.setUserName(user.id, user.name);
		}
		if (user.surname !== '') {
			await Firebase.setUserSurname(user.id, user.surname);
		}
		if (user.nick !== '') {
			await Firebase.setUserNickname(user.id, user.nick);
		}
		if (user.photo !== '') {
			await Firebase.setUserProfilePicture(user.id, user.photo);
		}
		if (user.cep !== '') {
			await Firebase.setUserCep(user.id, user.cep);
		}
		if (user.address !== '') {
			await Firebase.setUserResidenceNumber(user.id, user.address);
		}
		if (user.complement !== '') {
			await Firebase.setUserComplement(user.id, user.complement);
		}
	};

	const getUsers = async () => {
		return await Firebase.getAllUsers();
	};

	const addCategory = async (userId, category) => {
		let categories = await Firebase.getUserCategoryClicks(userId);
		categories.push(category);
		await Firebase.setUserCategoryClicks(userId, categories);
	};

	const deleteAccount = async (userId) => {
		await Firebase.deleteUser(userId);
	};

	const createAccount = async (user) => {
		if (
			user.name === '' ||
			user.surname === '' ||
			user.email === '' ||
			user.password === ''
		) {
			throw Error('Preenchimento do campo é obrigatório.');
		}

		if (containsNumber(user.name) || containsNumber(user.name)) {
			throw Error('Há campos que não permitem números com valores numéricos.');
		}

		if (isNumber(user.cep)) {
			throw Error('O campo deve ser um valor numérico.');
		}

		const account = await Firebase.createUser();
		await Firebase.setUserName(account, user.name);
		await Firebase.setUserSurname(account, user.surname);
		await Firebase.setUserNickname(account, user.nick);
		await Firebase.setUserProfilePicture(account, user.photo);
		await Firebase.setUserCep(account, user.cep);
		await Firebase.setUserResidenceNumber(account, user.addres);
		await Firebase.setUserComplement(account, user.complement);
		await Firebase.setUserEmail(account, user.email);
		await Firebase.setUserPassword(account, user.password);
		await Firebase.setUserAccountCreateDate(account, user.date);
		await Firebase.setUserCategoryClicks(account, []);
	};

	return {
		addPhoto,
		updateData,
		getUsers,
		addCategory,
		deleteAccount,
		createAccount,
	};
})();

export default UserLogic;
