import Firebase from '../Data/Firebase';
import NotificationLogic from './NotificationLogic';
import ProductLogic from './ProductLogic';
import UserLogic from './UserLogic';

const DoubtLogic = (() => {
	const postDoubt = async (productId, userId, message) => {
		const doubtId = await Firebase.createDoubt();
		await Firebase.setDoubtProductId(doubtId, productId);
		await Firebase.setDoubtUserId(doubtId, userId);
		await Firebase.setDoubtQuestion(doubtId, message);
		await Firebase.setDoubtAnswer(doubtId, '');
		const product = await ProductLogic.getProductInfo(productId);
		const user = await UserLogic.getUser(userId);
		await NotificationLogic.triggerNotification(
			'doubt',
			`${user.name} fez uma pergunta na página de ${product.name}`,
			product.creatorId
		);
		return doubtId;
	};

	const answerDoubt = async (doubtId, message) => {
		await Firebase.setDoubtAnswer(doubtId, message);
		const doubt = await Firebase.getDoubt(doubtId);
		const product = await ProductLogic.getProductInfo(doubt.productId);
		const owner = await UserLogic.getUser(product.creatorId);
		await NotificationLogic.triggerNotification(
			'doubt',
			`${owner.name} respondeu sua dúvida na página de ${product.name}`,
			doubt.userId
		);
	};

	const updateAnswer = async (doubtId, message) => {
		await Firebase.setDoubtAnswer(doubtId, message);
	};

	const getDoubts = async () => {
		const rawDoubts = await Firebase.getAllDoubts();
		return await Promise.all(
			rawDoubts.map(async (doubt) => {
				const user = await UserLogic.getUser(doubt.userId);
				return {
					...doubt,
					userName: user.name,
				};
			})
		);
	};

	const getDoubtsForProduct = async (productId) => {
		return (await getDoubts()).filter((doubt) => doubt.productId === productId);
	};

	const getDoubt = async (doubtId) => {
		return await Firebase.getDoubt(doubtId);
	};

	const deleteDoubt = async (doubtId) => {
		await Firebase.deleteDoubt(doubtId);
	};

	const deleteAll = async () => {
		await Firebase.deleteAllDoubts();
	};

	return {
		postDoubt,
		answerDoubt,
		updateAnswer,
		getDoubtsForProduct,
		deleteDoubt,
		getDoubt,
		deleteAll,
	};
})();

export default DoubtLogic;
