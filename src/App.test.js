import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import ExchangeItem from './components/ExchangeItem';
import ExchangeList from './pages/ExchangeList';
import ExchangeView from './pages/ExchangeView';

test('renders Navbar in App component', () => {
	render(<App />);
	const navElement = screen.getByTestId('nav-element');
	expect(navElement).toBeInTheDocument();
});

test('renders header in ExchangeList component', () => {
	render(<ExchangeList />);
	const headerElement = screen.getByTestId('header-element');
	expect(headerElement).toBeInTheDocument();
});

test('renders title in ExchangeItem component', () => {
	render(<ExchangeItem exchange={{ id: 'binance', name: 'binance' }} />, {
		wrapper: MemoryRouter,
	});
	const titleElement = screen.getByText(/binance/i);
	expect(titleElement).toBeInTheDocument();
});

test('renders header in ExchangeView component', () => {
	render(<ExchangeView />, { wrapper: MemoryRouter });
	const headerElement = screen.getByTestId('header-element');
	expect(headerElement).toBeInTheDocument();
});
