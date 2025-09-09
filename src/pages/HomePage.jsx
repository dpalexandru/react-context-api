import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FavoritesContext } from "../context/FavoritesContext"

const url = "https://fakestoreapi.com/products"

const HomePage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => setProdotti(data))
      .catch(console.error);
  }, []);

  const preferiti = prodotti.filter(p => favorites.includes(p.id));

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

      {/* sezione preferiti */}
      <div className="mt-5">
        <h2 className="fw-bold mb-4">Preferiti</h2>

        {preferiti.length === 0 ? (
          <p className="text-muted">Nessun prodotto nei preferiti.</p>
        ) : (
          <div className="row">
            {preferiti.map(p => (
              <div className="col-md-3 mb-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="card-img-top p-3"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{p.title}</h6>
                    <p className="text-danger fw-bold">€ {p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
