import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import './styles.css'

export default function Register() {
  return (
    <div className="newIncidentContainer">
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero"/>          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="backLink">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>

        <form action="">
          <input placeholder="Titulo do caso"/>
          <textarea name="descricao" placeholder="Descrição"></textarea>
          <input placeholder="Valor em reais"/>

          <button type="submit" className="button">Cancelar</button>
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}