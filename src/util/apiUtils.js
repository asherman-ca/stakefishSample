const normalizeExchangeViewData = (exchange) => {
	let { name, facebook_url, reddit_url } = exchange;

	if (name?.split(' ')[1] === 'Exchange') {
		exchange.name = name.split(' ')[0];
	}
	if (name === 'Kraken') {
		exchange.url = 'https://www.kraken.com/';
	}
	if (facebook_url && facebook_url?.split('').slice(0, 4).join('') !== 'http') {
		exchange.facebook_url = `https://www.facebook.com/${facebook_url}/`;
	}
	if (reddit_url && reddit_url?.split('').slice(0, 4).join('') !== 'http') {
		exchange.reddit_url = `https://www.reddit.com${reddit_url}`;
	}
	return exchange;
};

const normalizeExchangeItemData = (exchange) => {
	let { name, id } = exchange;

	if (name.split(' ')[1] === 'Exchange') {
		exchange.name = name.split(' ')[0];
	}
	if (id === 'kraken') {
		exchange.url = 'https://www.kraken.com/';
	}
	return exchange;
};

export { normalizeExchangeItemData, normalizeExchangeViewData };
