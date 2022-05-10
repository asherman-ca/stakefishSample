import { QueryClientProvider, QueryClient } from 'react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ExchangeView from './pages/ExchangeView';
import ExchangeItem from './components/ExchangeItem';
import ExchangeList from './pages/ExchangeList';
import App from './App';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: false } },
});

const renderViewComponent = () =>
	render(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter initialEntries={['/coinbase']}>
				<Routes>
					<Route path='/:exchangeId' element={<ExchangeView />} />
				</Routes>
			</MemoryRouter>
		</QueryClientProvider>
	);

const renderListComponent = () =>
	render(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route path='/' element={<ExchangeList />} />
				</Routes>
			</MemoryRouter>
		</QueryClientProvider>
	);

const renderExchangeItem = () =>
	render(
		<ExchangeItem
			exchange={{ id: 'binance', name: 'Binance', country: 'Cayman Islands' }}
		/>,
		{
			wrapper: MemoryRouter,
		}
	);

describe('ExchangeList', () => {
	it('Renders spinner when data is fetching', async () => {
		renderListComponent();
		expect(screen.getByTestId('spinner-element')).toBeVisible();
	});
	it('Renders header element', async () => {
		renderListComponent();
		expect(await screen.findByTestId('header-element')).toBeVisible();
	});
	it('Renders list item details', async () => {
		renderListComponent();
		expect(await screen.findByText('Belize')).toBeVisible();
		expect(await screen.findByText(/OKX/i)).toBeVisible();
	});
	it('Renders additional list items', async () => {
		renderListComponent();
		expect(await screen.findByText('Seychelles')).toBeVisible();
		expect(await screen.findByText(/Kucoin/i)).toBeVisible();
	});
});

describe('ExchangeView', () => {
	it('Renders spinner when data is fetching', async () => {
		renderViewComponent();
		expect(screen.getByTestId('spinner-element')).toBeVisible();
	});
	it('Renders navigation', async () => {
		renderViewComponent();
		expect(await screen.findByText('back')).toBeVisible();
	});
	it('Renders exchange details', async () => {
		renderViewComponent();
		expect(await screen.findByText('Coinbase')).toBeVisible();
		expect(await screen.findByText('2012')).toBeVisible();
	});
});

describe('ExchangeListItem', () => {
	it('Renders exchange title', () => {
		renderExchangeItem();
		const titleElement = screen.getByText(/binance/i);
		expect(titleElement).toBeInTheDocument();
	});
	it('Renders exchange details', () => {
		renderExchangeItem();
		const countryElement = screen.getByText(/cayman/i);
		expect(countryElement).toBeInTheDocument();
	});
});

describe('App', () => {
	it('Renders Navbar in App component', () => {
		render(<App />);
		const navElement = screen.getByTestId('nav-element');
		expect(navElement).toBeInTheDocument();
	});
});
