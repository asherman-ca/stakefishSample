import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { normalizeExchangeViewData } from '../util/apiUtils';
import '../style/ExchangeView.css';

const ExchangeView = () => {
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [exchange, setExchange] = useState({});

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
			.then((response) => response.json())
			.then((exchange) => setExchange(exchange))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, [params.exchangeId]);

	if (loading) {
		return <Spinner />;
	}

	const {
		name,
		image,
		facebook_url,
		year_established,
		twitter_handle,
		reddit_url,
		trust_score_rank,
		description,
		country,
		url,
	} = normalizeExchangeViewData(exchange);

	return (
		<div className='container bg-white'>
			<div className='exchange-view'>
				<div className='exchange-view-header' data-testid='header-element'>
					<div className='flex'>
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<img src={image} alt='logo' />
						</a>
					</div>
					<div>
						<span>{name}</span>
					</div>
					<div className='exchange-view-socials'>
						{facebook_url && (
							<a href={facebook_url} target='_blank' rel='noopener noreferrer'>
								<i className='fa-brands fa-facebook'></i>
							</a>
						)}
						{twitter_handle && (
							<a
								href={`https://twitter.com/${twitter_handle}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fa-brands fa-twitter'></i>
							</a>
						)}
						{reddit_url && (
							<a href={reddit_url} target='_blank' rel='noopener noreferrer'>
								<i className='fa-brands fa-reddit'></i>
							</a>
						)}
					</div>
				</div>
				<div className='exchange-view-details'>
					<div>
						<span>Location:</span> {country}
					</div>
					<div>
						<span>Trust Rank:</span> {trust_score_rank}
					</div>
					{year_established && (
						<div>
							<span>Established:</span> {year_established}
						</div>
					)}
					{description && (
						<div>
							<span>Description:</span> {description}
						</div>
					)}
				</div>
				<div className='flex'>
					<Link className='exchange-view-nav' to={'/'}>
						<i className='fa-solid fa-chevron-left'></i> back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ExchangeView;
