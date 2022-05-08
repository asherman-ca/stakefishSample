import { Link } from 'react-router-dom'

const ExchangeItem = ({exchange}) => {
  const { id, name, country, trust_score_rank } = exchange
  console.log('name', exchange)
  return (
    <div className="exchangeItem">
      <div className="exchangeItemContent">
        <div className="exchangeItemTitle">
          {exchange.id !== 'kraken' ? <a className="exchangeItemName" href={exchange.url}>{name}</a> :
          <span className="exchangeItemName">{name}</span>}
          <span className="exchangeItemCountry">{country}</span>
        </div>

        <img src={exchange.image} alt={name}></img>

        <div className="exchangeItemDetails">
          <span>Trust Score Rank</span>
          <span>{trust_score_rank}</span>
        </div>

        <Link className="exchangeItemButton" to={`/${id}`}>
          <span>View</span>
          <span>
            {`>`}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ExchangeItem