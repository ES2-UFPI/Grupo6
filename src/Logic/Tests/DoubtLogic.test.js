import DoubtLogic from "../DoubtLogic";


test('doubts working properly', (done) => {
    const postDoubt = async () => {
        const doubtId = await DoubtLogic.postDoubt('TIU6CY0xhB9ZPZqpK36U', '23', 'Tem quanto tempo de uso esse produto?');
        const doubt = await DoubtLogic.getDoubt(doubtId);

        expect(doubt.message).toBe('Tem quanto tempo de uso esse produto?');
        done();
    }

    postDoubt();

})