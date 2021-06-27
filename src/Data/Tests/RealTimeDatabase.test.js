/**
 * @jest-environment node
 */

import RealTimeDatabase from "../RealTimeDatabase";

test('function names being assigned correctly', () => {
    expect(RealTimeDatabase).toEqual(
        expect.objectContaining({
            listenToMessages: expect.any(Function),
            pushToMessages: expect.any(Function),
            deleteFromMessages: expect.any(Function),
        })
    );
});

test('addition, retrieval and removal of items working as intended', (done) => {
    let messages = [];
    let timesModified = 0;

    const callback = () => {
        try {
            expect(messages[0].sender).toBe('Sender 1');
            expect(messages[0].receiver).toBe('Receiver 1');
            expect(messages[0].content).toBe('Hello');
            expect(messages[0].date.toDate()).toBe(new Date(2020, 1, 1));
            expect(messages[1].sender).toBe('Sender 3');
            expect(messages[1].receiver).toBe('Receiver 3');
            expect(messages[1].content).toBe('.');
            expect(messages[1].date.toDate()).toBe(new Date(2020, 1, 3));
            done();
        } catch (error) {
            done(error);
        }
    };

    const updateMessages = (newArray, timeLimit = 4) => {
        messages = newArray;
        timesModified += 1;
        if (timesModified === timeLimit) {
            callback();
        }
    };

    const modifyMessages = () => {
        RealTimeDatabase.pushToMessages({
            sender: 'Sender 1',
            receiver: 'Receiver 1',
            date: new Date(2020, 1, 1),
            content: 'Hello',
        });
        const key2 = RealTimeDatabase.pushToMessages({
            sender: 'Sender 2',
            receiver: 'Receiver 2',
            date: new Date(2020, 1, 2),
            content: 'World',
        });
        RealTimeDatabase.pushToMessages({
            sender: 'Sender 3',
            receiver: 'Receiver 3',
            date: new Date(2020, 1, 3),
            content: '.',
        });
        RealTimeDatabase.deleteFromMessages(key2);
    }; 

    RealTimeDatabase.listenToMessages(updateMessages);
    modifyMessages();

});