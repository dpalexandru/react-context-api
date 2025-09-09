import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

const Navbar = () => {

  //destructoring BudgetContext
  const { budgetMode, toggleBudgetMode } = useContext(BudgetContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* logo */}

        <NavLink className="navbar-brand fw-bold" to="/">
          Fake Store
        </NavLink>

        {/* bottone modalità budget */}
        <div className="mx-auto">
          <button className={`btn ${budgetMode ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => {
              toggleBudgetMode();
              console.log(budgetMode)
            }}
          >
            Imposta budget
            <i className="bi bi-cash-stack m-2"></i>
          </button>
        </div>

        {/* menu navigazione */}
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
