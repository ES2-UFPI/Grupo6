import Firebase from "../Data/Firebase";

const DoubtLogic = ((productId, userId, message) => {
    const postDoubt = async () => {
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

    return {
        postDoubt,
        answerDoubt,
        updateAnswer,
    };
})();

export default DoubtLogic;