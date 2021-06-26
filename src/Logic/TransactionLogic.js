import Firebase from  '../Data/Firebase';

const TransactionLogic = (() => {
    
    const rateProduct = async (transactionId, rating) => {
        await Firebase.setTransactionRating(transactionId, rating);
    };

    const answerWouldBuyFromSellerAgain = async (transactionId, wouldBuyAgain) => {
        await Firebase.setTransactionWouldBuyAgain(transactionId, wouldBuyAgain);
    };

    const getUserTransactions = async (userId) => {
        return (await Firebase.getAllTransactions()).filter((transaction) => transaction.id.split('-')[0] === userId);
    };

    return {
        rateProduct,
        answerWouldBuyFromSellerAgain,
        getUserTransactions,
    }

})();

export default TransactionLogic;