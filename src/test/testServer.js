import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
	rest.get(
		'https://api.coingecko.com/api/v3/exchanges?per_page=10',
		(req, res, ctx) =>
			res(
				ctx.status(200),
				ctx.json([
					{
						id: 'okex',
						name: 'OKX',
						year_established: 2013,
						country: 'Belize',
						description: '',
						url: 'https://www.okx.com',
						image:
							'https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377',
						trust_score_rank: 2,
					},
					{
						id: 'kucoin',
						name: 'Kucoin',
						year_established: 2014,
						country: 'Seychelles',
						description: '',
						url: 'https://www.kucoin.com/',
						image:
							'https://assets.coingecko.com/markets/images/61/small/kucoin.png?1640584259',
						trust_score_rank: 6,
					},
				])
			)
	),
	rest.get(
		'https://api.coingecko.com/api/v3/exchanges/coinbase',
		(req, res, ctx) =>
			res(
				ctx.status(200),
				ctx.json({
					name: 'Coinbase Exchange',
					year_established: 2012,
					country: 'United States',
					description: '',
					url: 'https://www.coinbase.com',
					image:
						'https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875',
					facebook_url: 'https://www.facebook.com/coinbase/',
					reddit_url: '',
					twitter_handle: 'CoinbasePro',
				})
			)
	),
];

export const server = setupServer(...handlers);
