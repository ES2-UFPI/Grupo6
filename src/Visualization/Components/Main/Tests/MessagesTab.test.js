import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MessagesTab from '../MessagesTab';

test('chat navigation being shown first', () => {
	const { container } = render(
		<BrowserRouter>
			<MessagesTab
				newChat={null}
				isOpen={true}
				toggleIsOpen={() => {}}
				loggedInUser="LrQkwykN4dPWjm7VkNIB"
			/>
		</BrowserRouter>
	);
	expect(container.getElementsByClassName('chat-navigation')).toHaveLength(1);
});
