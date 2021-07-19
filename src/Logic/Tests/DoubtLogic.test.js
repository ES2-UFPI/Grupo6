/**
 * @jest-environment node
 */

import DoubtLogic from '../DoubtLogic';

jest.setTimeout(10000);

test('doubts working properly', (done) => {
	const postDoubt = async () => {
		try {
			const doubtId = await DoubtLogic.postDoubt(
				'TIU6CY0xhB9ZPZqpK36U',
				'xfDuwWw3caYmDi2WHgVb',
				'Tem quanto tempo de uso esse produto?'
			);
			const doubt = await DoubtLogic.getDoubt(doubtId);

			expect(doubt.question).toBe('Tem quanto tempo de uso esse produto?');
			done();
		} catch (error) {
			done(error);
		}
	};

	postDoubt();
});
