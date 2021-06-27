import MessageLogic from '../MessageLogic';

test('pegando mensagens', () => {
	const getMsg = async () => {
		const chatId = await MessageLogic.createChat();

		await MessageLogic.sendMessage(chatId, '1', 'Olá');
		await MessageLogic.sendMessage(chatId, '1', '?');

		const messages = await MessageLogic.getMessages(chatId);

		messages.map((m) => {
			expect(typeof m.text).toBe('string');
		});
	};

	getMsg();
});
