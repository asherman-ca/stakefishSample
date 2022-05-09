import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Nav from './components/Navbar';
import ExchangeList from './pages/ExchangeList';
import ExchangeView from './pages/ExchangeView';

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<ExchangeList />} />
					<Route path='/:exchangeId' element={<ExchangeView />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
