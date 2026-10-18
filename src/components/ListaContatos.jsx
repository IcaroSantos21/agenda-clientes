import CardContato from './CardContato'

function ListaContatos({ contacts, onExcluir }) {
  if (contacts.length === 0) {
    return <p className="vazio">Nenhum contato encontrado.</p>
  }

  return (
    <ul className="lista-contatos">
      {contacts.map(contact => (
        <CardContato
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          onExcluir={onExcluir}
        />
      ))}
    </ul>
  )
}

export default ListaContatos