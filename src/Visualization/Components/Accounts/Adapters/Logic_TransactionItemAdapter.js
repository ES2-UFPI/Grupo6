const Logic_TransactionItemAdapter = (transactionObject) => {
    return {
        ...transactionObject,
        wouldBarterAgain: transactionObject.wouldBuyAgain !== undefined ? transactionObject.wouldBuyAgain : transactionObject.wouldBarterAgain,
    };
};

export default Logic_TransactionItemAdapter;