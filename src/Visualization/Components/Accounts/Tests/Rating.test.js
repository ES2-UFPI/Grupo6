import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating from '../Rating';

test('exhibiting would barter again message', () => {
	render(<Rating rating={2} wouldBarterAgain={true} update={(_r, _w) => {}} />);
	expect(
		screen.queryByText('Faria negócios novamente', { exact: false })
	).toBeTruthy();
});

test('colors stars on hover correctly', () => {
	const { container } = render(
		<Rating rating={2} wouldBarterAgain={true} update={(_r, _w) => {}} />
	);
	const interactiveStars = container.firstChild.firstChild;

	expect(interactiveStars.firstChild).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(1)).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(2)).not.toHaveClass('checked');
	expect(interactiveStars.childNodes.item(3)).not.toHaveClass('checked');
	expect(interactiveStars.childNodes.item(4)).not.toHaveClass('checked');

	fireEvent.mouseOver(interactiveStars.firstChild);
	expect(interactiveStars.firstChild).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(1)).not.toHaveClass('checked');
	expect(interactiveStars.childNodes.item(2)).not.toHaveClass('checked');
	expect(interactiveStars.childNodes.item(3)).not.toHaveClass('checked');
	expect(interactiveStars.childNodes.item(4)).not.toHaveClass('checked');

	fireEvent.mouseOver(interactiveStars.childNodes.item(3));
	expect(interactiveStars.firstChild).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(1)).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(2)).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(3)).toHaveClass('checked');
	expect(interactiveStars.childNodes.item(4)).not.toHaveClass('checked');
});

test('updating rating correctly', () => {
	const update = jest.fn();
	const { container } = render(
		<Rating rating={0} wouldBarterAgain={true} update={update} />
	);
	const interactiveStars = container.firstChild.firstChild;

	fireEvent.click(interactiveStars.childNodes.item(4));
	expect(update).toHaveBeenCalledWith(5, true);
});
