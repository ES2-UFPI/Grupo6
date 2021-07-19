import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TransactionItem from '../TransactionItem';

test('info being correctly displayed', () => {
	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Em andamento"
				rating={3}
				wouldBarterAgain={true}
				update={(_v, _w) => {}}
				valuePaid={30}
				isBuyer={false}
			/>
		</BrowserRouter>
	);
	expect(screen.queryByText('Urano')).toBeTruthy();
	expect(screen.queryByText('30', { exact: false })).toBeTruthy();
	expect(screen.queryByText('Em andamento')).toBeTruthy();
});

test('rating only being shown for settled transactions', () => {
	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Em andamento"
				rating={3}
				wouldBarterAgain={true}
				update={() => {}}
				valuePaid={30}
				isBuyer={false}
			/>
		</BrowserRouter>
	);
	expect(screen.queryByText('Urano')).toBeTruthy();
	expect(screen.queryByText('30', { exact: false })).toBeTruthy();
	expect(screen.queryByText('Em andamento')).toBeTruthy();
	expect(
		screen.queryByText('negócios novamente', { exact: false })
	).not.toBeTruthy();

	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Finalizada"
				rating={3}
				wouldBarterAgain={true}
				update={() => {}}
				valuePaid={30}
				isBuyer={true}
			/>
		</BrowserRouter>
	);
	expect(
		screen.queryByText('negócios novamente', { exact: false })
	).toBeTruthy();
});

test('cancel order only being shown for pending transactions', () => {
	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Em andamento"
				rating={3}
				wouldBarterAgain={true}
				update={() => {}}
				valuePaid={30}
				isBuyer={true}
			/>
		</BrowserRouter>
	);
	expect(screen.queryByText('Cancelar', { exact: false })).not.toBeTruthy();

	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Finalizada"
				rating={3}
				wouldBarterAgain={true}
				update={() => {}}
				valuePaid={30}
				isBuyer={true}
			/>
		</BrowserRouter>
	);
	expect(screen.queryByText('Cancelar', { exact: false })).not.toBeTruthy();

	render(
		<BrowserRouter>
			<TransactionItem
				transactionId="123"
				buyerId="123"
				sellerId="123"
				sellerName="Urano"
				productName="Caixa"
				localizationCode="123"
				productPicture={null}
				status="Pendente"
				rating={3}
				wouldBarterAgain={true}
				update={() => {}}
				valuePaid={30}
				isBuyer={true}
			/>
		</BrowserRouter>
	);
	expect(screen.queryByText('Cancelar', { exact: false })).toBeTruthy();
});
