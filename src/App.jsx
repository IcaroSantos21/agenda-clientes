import { useState } from 'react'
import './App.css'
import data from './data/contacts.json'
import Cabecalho from './components/Cabecalho'
import FormularioContato from './components/FormularioContato'
import BuscaContato from './components/BuscaContato'
import ListaContatos from './components/ListaContatos'

function App() {
  // O JSON não tem id, então geramos um para cada contato inicial
  const [contacts, setContacts] = useState(() =>
    data.map(contact => ({ ...contact, id: crypto.randomUUID() }))
  )
  const [busca, setBusca] = useState('')

  function adicionarContato(novo) {
    setContacts([...contacts, { ...novo, id: crypto.randomUUID() }])
  }

  function excluirContato(id) {
    // filter devolve um array novo, o original não é alterado
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const contatosFiltrados = contacts.filter(contact =>
    contact.name.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <>
      <Cabecalho />
      <FormularioContato onAdicionar={adicionarContato} />
      <BuscaContato busca={busca} onBuscar={setBusca} />
      <ListaContatos contacts={contatosFiltrados} onExcluir={excluirContato} />
    </>
  )
}

export default App