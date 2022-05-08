import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ExchangeView = () => {
  const params = useParams()
  const [exchange, setExchange] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
      .then(response => response.json())
      .then(exchanges => setExchange(exchanges))
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div>
      {exchange && exchange.name}
      Exchange
    </div>
  )
}

export default ExchangeView