import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

const Navbar = () => {

  //destructoring BudgetContext
  const { budgetMode, toggleBudgetMode, budgetLimit, setBudgetLimit } = useContext(BudgetContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* logo */}

        <NavLink className="navbar-brand fw-bold" to="/">
          Fake Store
        </NavLink>

        {/* bottone modalità budget */}
        <div className="mx-auto d-flex align-items-center gap-2">

          <div className="mx-auto">
            <button className={`btn ${budgetMode ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => {
                toggleBudgetMode();
              }}
            >
              Imposta budget
              <i className="bi bi-cash-stack m-2"></i>
            </button>
            {/* campo input */}
            {budgetMode && (
              <input
                type="text"
                min="0"
                className='form-control form-control-sm mt-2'
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(Number(e.target.value))}
                placeholder='Inserisci importo masssimo'
              />
            )
            }

          </div>
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
