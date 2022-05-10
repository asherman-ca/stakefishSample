import { Link } from 'react-router-dom';
import '../style/ExchangeItem.css';

import { normalizeExchangeItemData } from '../util/apiUtils';

const ExchangeItem = ({ exchange }) => {
	const { id, name, country, trust_score_rank, url } =
		normalizeExchangeItemData(exchange);

	return (
		<div className='exchange-item' data-testid='exchange-item'>
			<div className='exchange-item-content'>
				<div className='exchange-item-title'>
					<a
						className='exchange-item-name'
						href={url}
						target='_blank'
						rel='noopener noreferrer'
					>
						{name} - <i className='fa-solid fa-arrow-up-right-from-square'></i>
					</a>
					<span className='reg-font'>{country}</span>
				</div>

				<img src={exchange.image} alt={name}></img>

				<div className='exchange-item-details'>
					<span>Trust Score Rank</span>
					<span>{trust_score_rank}</span>
				</div>

				<Link className='exchange-item-button' to={`/${id}`}>
					<span>View</span>
					<span>
						<i className='fa-solid fa-chevron-right'></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default ExchangeItem;
