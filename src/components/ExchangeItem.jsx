import { Link } from 'react-router-dom'

const ExchangeItem = ({exchange}) => {
  let { id, name, country, trust_score_rank } = exchange
  if (name.split(' ')[1] === 'Exchange') {
    name = name.split(' ')[0]
  }

  return (
    <div className="exchangeItem">
      <div className="exchangeItemContent">
        <div className="exchangeItemTitle">
          <a className="exchangeItemName" href={exchange.id !== 'kraken' ? exchange.url : "https://www.kraken.com/"} target="_blank" rel="noopener noreferrer">{name} - <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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