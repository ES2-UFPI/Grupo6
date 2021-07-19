import '@testing-library/jest-dom';
import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Message from '../Message';

test('displaying date correctly', () => {
	render(
		<Message
			isSentByLoggedInUser={false}
			content="Olá"
			date={new Date(2005, 5, 6, 12, 3)}
			delete={() => {}}
		/>
	);
	expect(screen.queryByText('12:03', { exact: false })).toBeTruthy();
});

test('delete button only for logged in user messages', () => {
	render(
		<Message
			isSentByLoggedInUser={false}
			content="Olá"
			date={new Date(2005, 5, 6, 12, 3)}
			delete={() => {}}
		/>
	);
	expect(screen.queryByText('Deletar', { exact: false })).not.toBeTruthy();

	render(
		<Message
			isSentByLoggedInUser={true}
			content="Olá"
			date={new Date(2005, 5, 6, 12, 3)}
			delete={() => {}}
		/>
	);
	expect(screen.queryByText('Deletar', { exact: false })).toBeTruthy();
});

test('function passed to delete button being triggered', () => {
	const deleteFunction = jest.fn();
	render(
		<Message
			isSentByLoggedInUser={true}
			content="Olá"
			date={new Date(2005, 5, 6, 12, 3)}
			delete={deleteFunction}
		/>
	);

	fireEvent.click(screen.queryByText('Deletar'));
	expect(deleteFunction).toHaveBeenCalled();
});
