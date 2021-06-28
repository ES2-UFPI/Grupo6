/**
 * @jest-environment node
 */

import RealTimeDatabase from '../RealTimeDatabase';

jest.setTimeout(10000);

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
	let messages = {};
	const keys = [];

	const callback = () => {
		try {
			expect(messages[keys[0]].sender).toBe('Sender 1');
			expect(messages[keys[0]].receiver).toBe('Receiver 1');
			expect(messages[keys[0]].content).toBe('Hello');
			expect(new Date(messages[keys[0]].date.seconds * 1000)).toStrictEqual(
				new Date(2020, 1, 1)
			);
			expect(messages[keys[2]].sender).toBe('Sender 3');
			expect(messages[keys[2]].receiver).toBe('Receiver 3');
			expect(messages[keys[2]].content).toBe('.');
			expect(new Date(messages[keys[2]].date.seconds * 1000)).toStrictEqual(
				new Date(2020, 1, 3)
			);
			done();
		} catch (error) {
			done(error);
		}
	};

	const updateMessages = (newObject) => {
		messages = newObject;
		callback();
	};

	const modifyMessages = () => {
		const key1 = RealTimeDatabase.pushToMessages({
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
		const key3 = RealTimeDatabase.pushToMessages({
			sender: 'Sender 3',
			receiver: 'Receiver 3',
			date: new Date(2020, 1, 3),
			content: '.',
		});
		keys.push(key1);
		keys.push(key2);
		keys.push(key3);
		RealTimeDatabase.deleteFromMessages(key2);
	};

	RealTimeDatabase.listenToMessages(updateMessages);
	modifyMessages();
});
