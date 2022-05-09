import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ExchangeView = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [exchange, setExchange] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
      .then(response => response.json())
      .then(exchange => setExchange(exchange))
    setLoading(false)
  }, [params.exchangeId]);

  if (loading) {
    return (
      <Spinner />
    )
  }

  let {name, image, facebook_url, year_established, twitter_handle, reddit_url, trust_score_rank, description, country } = exchange;
  
  // reshapes a few cases of abnormally formatted API values
  if (name?.split(' ')[1] === 'Exchange') {
    name = name.split(' ')[0]
  }
  if (facebook_url && facebook_url?.split('').slice(0,4).join('') !== 'http') {
    facebook_url = `https://www.facebook.com/${facebook_url}/`
  }
  if (reddit_url && reddit_url?.split('').slice(0,4).join('') !== 'http') {
    reddit_url = `https://www.reddit.com${reddit_url}`
  }

  
  return (
    <div className="container bg-white">
      <div className="exchange-view">
        <div className="exchange-view-header">
          <div className="flex">
            <img src={image} alt="logo" />
          </div>
          <div>
            <span>{name}</span>
          </div>
          <div className="exchange-view-socials">
            {facebook_url && <a href={facebook_url} 
                                target="_blank" 
                                rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>}
            {twitter_handle && <a href={`https://twitter.com/${twitter_handle}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>}
            {reddit_url && <a href={reddit_url} 
                              target="_blank" 
                              rel="noopener noreferrer">
              <i className="fa-brands fa-reddit"></i>  
            </a>}
          </div>
        </div>
        <div className="exchange-view-details">
          <div>
            <span>Location:</span> {country}
          </div>
          <div>
            <span>Trust Rank:</span> {trust_score_rank}
          </div>
          {year_established && <div>
            <span>Established:</span> {year_established}
          </div>}
          {description && <div>
            <span>Description:</span> {description}
          </div>}
        </div>
        <div className="flex">
          <Link className="exchange-view-nav" to={'/'}><i className="fa-solid fa-chevron-left"></i> back</Link>
        </div>
      </div>
    </div>
  )
}

export default ExchangeView;