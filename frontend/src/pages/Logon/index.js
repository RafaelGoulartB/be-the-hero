import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(event) {
    event.preventDefault()

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongName', response.data.name)
      localStorage.setItem('ongId', id)

      history.push('/profile')
    } catch(err) {
      alert('Falha no login, tente novamente.')
      setId('')
    }
  }

  return (
    <div className="logonContainer">
      <section className="form">
        <img src={logo} alt="He the Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
          <button type="submit" className="button">Entrar</button>
          <Link to="/register" className="backLink">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}