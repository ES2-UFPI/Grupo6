import Firebase from "../Data/Firebase";

const DoubtLogic = (() => {
    const postDoubt = async (productId, userId, message) => {
        const doubtId = await Firebase.createDoubt();
        await Firebase.setDoubtProductId(doubtId, productId);
        await Firebase.setDoubtUserId(doubtId, userId);
        await Firebase.setDoubtQuestion(doubtId, message);
        await Firebase.setDoubtAnswer(doubtId, '');
    };

    const answerDoubt = async (doubtId, message) => {
        await Firebase.setDoubtAnswer(doubtId, message);
    };

    const updateAnswer = async (doubtId, message) => {
        await Firebase.setDoubtAnswer(doubtId, message);
    };

    const getDoubts = async () => {
        return await Firebase.getAllDoubts();
    };

    const deleteDoubt = async (doubtId) => {
        Firebase.deleteDoubt(doubtId);
    }

    return {
        postDoubt,
        answerDoubt,
        updateAnswer,
        getDoubts,
        deleteDoubt,
    };
})();

export default DoubtLogic;