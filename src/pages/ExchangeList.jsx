import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        {exchanges.map(exchange => (
          <ExchangeItem 
            exchange={exchange} 
            key={exchange.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ExchangeList;