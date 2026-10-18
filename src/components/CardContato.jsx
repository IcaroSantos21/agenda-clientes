function CardContato({ id, name, phone, email, onExcluir }) {
  return (
    <li className="card-contato">
      <div className="card-info">
        <strong>{name}</strong>
        <span>{phone}</span>
        <span>{email}</span>
      </div>
      <button onClick={() => onExcluir(id)}>Excluir</button>
    </li>
  )
}

export default CardContato