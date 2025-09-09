import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Fake Store
        </NavLink>

        {/* Bottone modalità budget */}
        <div className="mx-auto">
          <button className="btn btn-outline-warning">
            Imposta budget
            <i className="bi bi-cash-stack m-2"></i>
          </button>
        </div>

        <ul className="navbar-nav ms-auto  ">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/prodotti">
              Prodotti
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chisiamo">
              Chi Siamo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
