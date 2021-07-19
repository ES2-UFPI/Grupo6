import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import PageNavigation from '../PageNavigation';

test('correct number of pages', () => {
	const { container } = render(
		<BrowserRouter>
			<PageNavigation currentPage={2} numberOfPages={10} newPageLink="/" />
		</BrowserRouter>
	);
	expect(container.getElementsByClassName('page-navigation-link')).toHaveLength(
		12
	);
});

test('pages being changed correctly', () => {
	const { container } = render(
		<BrowserRouter>
			<PageNavigation currentPage={2} numberOfPages={10} newPageLink="/" />
		</BrowserRouter>
	);
	const forwardControl = container.firstChild.lastChild;
	fireEvent.click(forwardControl);
	expect(
		container.getElementsByClassName('page-navigation-link').item(2)
	).toHaveClass('disabled');
});
