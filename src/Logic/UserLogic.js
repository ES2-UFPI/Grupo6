import Firebase from '../Data/Firebase';
import TransactionLogic from './TransactionLogic';

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

	const getUser = async (userId, forProduct = false) => {
		const user = await Firebase.getUser(userId);
		const userTransactions = (
			await TransactionLogic.getUserTransactions(userId)
		).filter((transaction) => transaction.sellerId === userId);
		return {
			...user,
			averageRating: userTransactions.reduce(
				(previous, current) =>
					previous + current.rating / userTransactions.length,
				0
			),
			percentageWouldBarterAgain:
				userTransactions.length === 0
					? 0
					: userTransactions.filter((transaction) => transaction.wouldBuyAgain)
							.length / userTransactions.length,
			numberOfSales: userTransactions.length,
		};
	};

	const addCategory = async (userId, category) => {
		if (userId !== null && userId !== undefined) {
			const user = await Firebase.getUser(userId);
			let categories = user.categoryClicks;
			categories[category] = categories[category] + 1;
			await Firebase.setUserCategoryClicks(userId, categories);
		}
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
		await Firebase.setUserCategoryClicks(account, {
			vestuario: 0,
			eletronicos: 0,
			livros: 0,
			eletrodomesticos: 0,
			cosmeticos: 0,
			esportivo: 0,
			jogos: 0,
		});
	};

	const socialAuth = async (user) => {
		await Firebase.setUserName(user.id, user.name);
		await Firebase.setUserProfilePicture(user.id, user.photo);
	};

	const getFavoriteCategories = async (userId, limit = 3) => {
		if (userId === null || userId === undefined) {
			const users = await getUsers();
			const categories = users.reduce(
				(previous, current) => {
					Object.keys(previous).forEach(
						(key) => (previous[key] += current.categoryClicks[key])
					);
					return previous;
				},
				{
					vestuario: 0,
					eletronicos: 0,
					livros: 0,
					eletrodomesticos: 0,
					cosmeticos: 0,
					esportivo: 0,
					jogos: 0,
				}
			);
			return Object.keys(categories)
				.sort((a, b) => categories[b] - categories[a])
				.filter((_k, index) => index < limit);
		}
		const categories = (await Firebase.getUser(userId)).categoryClicks;
		return Object.keys(categories)
			.sort((a, b) => categories[b] - categories[a])
			.filter((_k, index) => index < limit);
	};

	return {
		addPhoto,
		updateData,
		getUsers,
		getUser,
		addCategory,
		deleteAccount,
		createAccount,
		socialAuth,
		getFavoriteCategories,
	};
})();

export default UserLogic;
