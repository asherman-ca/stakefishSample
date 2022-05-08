import React, { useEffect, useState } from 'react'
import ExchangeItem from '../components/ExchangeItem'

const ExchangeList = () => {
  const [loading, setLoading] = useState(true)
  const [exchanges, setExchanges] = useState([]) 

  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10')
        .then(response => response.json())
        .then(exchanges => setExchanges(exchanges))
      setLoading(false)
  }, [])

  if (loading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div className="container">
      <div className="exchangeList">
        <div className="exchangeListHeader">
          <span className="exchangeListTitle">
            Exchanges
          </span>
          <span>
            Top Cryptocurrency Exchanges Ranking by Trust Score - Spot
          </span>
        </div>
        <div className="exchangeListTable">
          {exchanges.map(exchange => (
            <ExchangeItem 
              exchange={exchange} 
              key={exchange.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExchangeList;