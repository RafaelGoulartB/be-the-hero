import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import './styles.css'

export default function Register() {
  return (
    <div className="registerContainer">
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero"/>          
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link to="/" className="backLink">
            <FiArrowLeft size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </section>

        <form action="">
          <input placeholder="nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="Whatsapp"/>
          <div className="inputGroup">
            <input placeholder="City"/>
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}