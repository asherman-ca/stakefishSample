import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const ExchangeView = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [exchange, setExchange] = useState({})

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
      .then(response => response.json())
      .then(exchange => setExchange(exchange))
    setLoading(false)
  }, [params.exchangeId])

  if (loading) {
    return (
      <Spinner />
    )
  }

  let {name, image, facebook_url, year_established, twitter_handle, reddit_url, trust_score_rank, description, country } = exchange
  if (name?.split(' ')[1] === 'Exchange') {
    name = name.split(' ')[0]
  }

  console.log(exchange)

  return (
    <div className="container bg-white">
      <div className="exchangeView">
        <div className="exchangeViewHeader">
            <div><img src={image} alt="exchange logo" /></div>
            <div>
              {name}
              {/* {facebook_url && <a href={facebook_url} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>}
              {twitter_handle && <a href={`https://twitter.com/${twitter_handle}`} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>}
              {reddit_url && <a href={reddit_url} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-reddit"></i>  
              </a>} */}
            </div>
            <div>
            {facebook_url && <a href={facebook_url} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>}
              {twitter_handle && <a href={`https://twitter.com/${twitter_handle}`} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>}
              {reddit_url && <a href={reddit_url} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-reddit"></i>  
              </a>}
            </div>
        </div>
        <div className="exchangeViewDetails">
          <div><span>Location:</span> {country}</div>
          {year_established && <div><span>Established:</span> {year_established}</div>}
          <div><span>Trust Rank:</span> {trust_score_rank}</div>
          {description && <div><span>Description:</span> {description}</div>}
        </div>
        <Link className="backButton" to={'/'}><i className="fa-solid fa-chevron-left"></i> back</Link>
      </div>
    </div>
  )
}

export default ExchangeView