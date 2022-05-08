import { Link } from 'react-router-dom'

const ExchangeItem = ({exchange}) => {
  const { id } = exchange
  console.log(exchange)
  return (
    <div className="exchangeItem">
      <div className="exchangeItemContent">
      <Link to={`/${id}`}>{id}</Link>
      </div>
    </div>
  )
}

export default ExchangeItem