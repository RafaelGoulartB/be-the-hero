import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import logo from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profileContainer">
      <header>
        <img src={logo} alt="Be the Hero"/>
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower isze={18} color="#e02041"/>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>PREÇO:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>PREÇO:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>PREÇO:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>PREÇO:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}