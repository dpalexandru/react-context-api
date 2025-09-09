import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// link recupero dati
const url = "https://fakestoreapi.com/products"

const Prodotti = () => {

  // U S E S T A T E
  const [prodotti, setProdotti] = useState([])

  //recupero i dati dei prodotti tramite chiama axios
  useEffect(() => {
    axios.get(url)
      .then(resp => {
        setProdotti(resp.data)
      })
  }, []
  )

  return (
    <div className="container section-light">
      <div className="row mt-5">
        <h1>I nostri prodotti: </h1>
        {prodotti.map(prodotto => (
          <div className="col-md-4 mb-4" key={prodotto.id}>
            {/* Avvolgo l'intera card con Link */}
            <Link
              to={`/prodotti/${prodotto.id}`}
              state={prodotto}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={prodotto.image}
                  className="card-img-top p-3"
                  alt={prodotto.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{prodotto.title}</h5>
                  <p className="card-text fst-italic text-muted">{prodotto.category}</p>
                  <p className="card-text small">{prodotto.description}</p>
                  <h6 className="mt-auto text-danger fw-bold fst-italic">
                    € {prodotto.price}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;