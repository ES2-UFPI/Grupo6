import Firebase from '../Data/Firebase';
import ProductLogic from './ProductLogic';

const TransactionLogic = (() => {
	const getSellerId = async (transactionId) => {
		const transaction = await Firebase.getTransaction(transactionId);
		return (await ProductLogic.getProductInfo(transaction.productId)).creatorId;
	};

	const rateProduct = async (transactionId, rating) => {
		await Firebase.setTransactionRating(transactionId, rating);
	};

	const answerWouldBuyFromSellerAgain = async (
		transactionId,
		wouldBuyAgain
	) => {
		await Firebase.setTransactionWouldBuyAgain(transactionId, wouldBuyAgain);
	};

	const getUserTransactions = async (userId) => {
		return await Promise.all((await Firebase.getAllTransactions()).filter(
			(transaction) =>
				transaction.sellerId === userId || transaction.buyerId === userId
		).map(async (transaction) => {
			return {
				...transaction,
				sellerId: await getSellerId(transaction),
			};
		}));
	};

	const generateTransaction = async (transaction) => {
		const transactionId = Firebase.createTransaction();
		await Firebase.setTransactionDate(transactionId, new Date());
		await Firebase.setTransactionValuePaid(
			transactionId,
			transaction.valuePaid
		);
		await Firebase.setTransactionStatus(transactionId, transaction.status);
		await Firebase.setTransactionRating(transactionId, transaction.rating);
		await Firebase.setTransactionComment(transactionId, transaction.comment);
		await Firebase.setTransactionWouldBuyAgain(
			transactionId,
			transaction.wouldBuyAgain
		);
		await Firebase.setTransactionProductId(
			transactionId,
			transaction.productId
		);
		await Firebase.setTransactionSellerId(transactionId, transaction.sellerId);
		await Firebase.setTransactionBuyerId(transactionId, transaction.buyerId);
	};

	return {
		rateProduct,
		answerWouldBuyFromSellerAgain,
		getUserTransactions,
		generateTransaction,
	};
})();

export default TransactionLogic;
