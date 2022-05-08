import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExchangeItem from '../components/ExchangeItem'

const ExchangeList = () => {
  const [loading, setLoading] = useState(true)
  const [exchanges, setExchanges] = useState(null) 

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
    <div>
      {exchanges && exchanges.map(exchange => {
        return(
          <ExchangeItem 
            exchange={exchange} 
            key={exchange.id}
          />
        )
      })}
    </div>
  )
}

export default ExchangeList;