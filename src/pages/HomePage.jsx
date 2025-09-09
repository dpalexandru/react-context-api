import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container section-light">
      <div className="text-center mb-4 mt-5">
        <h1 className="display-5 fw-bold">Benvenuto!</h1>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-3 mb-md-0">
          <img
            src="https://t4.ftcdn.net/jpg/01/15/04/39/360_F_115043913_g00I2WhOKYresf7JId9GTTnNy50FBDRi.jpg"
            alt="saldi"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">Oggi saldi su Fake Store!</h4>
          <p className="lead">
            Non perdere l'occasione! Dai un’occhiata ai nostri prodotti in super sconto e approfitta delle offerte di oggi.
          </p>
          <NavLink to="/prodotti" className="btn btn-warning fw-bold ms-2">
            Lista prodotti!
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage
