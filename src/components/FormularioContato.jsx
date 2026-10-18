import { useState } from 'react'

function FormularioContato({ onAdicionar }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    onAdicionar({ name, phone, email })

    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormularioContato