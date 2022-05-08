import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

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
      <div>loading</div>
    )
  }

  return (
    <div className="container bg-white">
      <div className="exchangeView">
        {exchange.name}
        <div className="flex">
          <Link to={'/'}>back</Link>
        </div>
      </div>
    </div>
  )
}

export default ExchangeView