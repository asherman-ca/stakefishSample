import React, { useEffect, useState } from 'react';
import '../style/ExchangeList.css';
import ExchangeItem from '../components/ExchangeItem';
import Spinner from '../components/Spinner';

const ExchangeList = () => {
	const [loading, setLoading] = useState(true);
	const [exchanges, setExchanges] = useState([]);

	useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10')
			.then((response) => response.json())
			.then((exchanges) => setExchanges(exchanges))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className='container'>
			<div className='exchange-list'>
				<div className='exchange-list-header' data-testid='header-element'>
					<span className='exchange-list-title'>Exchanges</span>
					<span>Top Cryptocurrency Exchanges Ranked by Trust Score</span>
				</div>
				<div className='exchange-list-table'>
					{exchanges.map((exchange) => (
						<ExchangeItem exchange={exchange} key={exchange.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ExchangeList;
