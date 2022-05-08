const ExchangeItem = ({exchange}) => {
  const { id } = exchange
  console.log(exchange)
  return (
    <div className="exchangeItem">
      {id}
    </div>
  )
}

export default ExchangeItem