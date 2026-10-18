function BuscaContato({ busca, onBuscar }) {
  return (
    <input
      type="search"
      className="busca"
      placeholder="Buscar por nome..."
      value={busca}
      onChange={e => onBuscar(e.target.value)}
    />
  )
}

export default BuscaContato