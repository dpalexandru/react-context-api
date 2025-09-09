import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";



const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // U S E S T A T E 
  const [product, setProduct] = useState({})

  // U S E E F F E C T 
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.data || !res.data.id) {
          navigate('/prodotti', { replace: true });
          return;
        }
        setProduct(res.data);
      })
  }, [id, navigate]);


  // F U N C T I O N 
  const Next = () => {
    navigate(`/prodotti/${parseInt(id) + 1}`)
  }

  const Back = () => {
    navigate(`/prodotti/${parseInt(id) - 1}`)
  }



  return (
    <div className="container py-4 section-light d-flex flex-column align-items-center">
      <Card className="shadow-sm">
        <div className="row">
          <div className="col-md-4">
            <Card.Img
              className="img-fluid h-100"
              src={product.image}
              alt={product.title}
              style={{ objectFit: "contain", padding: "1rem" }}
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="text-muted">
                {product.category}
              </Card.Text>
              <Card.Text>
                <strong>Description: </strong>{product.description}
              </Card.Text>
              <Card.Text className="fw-bold text-danger">Price:  € {product.price}</Card.Text>
              <Button as={Link} to="/prodotti" variant="primary">
                Vai ai Prodotti
              </Button>
              <Button disabled variant="danger m-3">Buy</Button>

            </Card.Body>
          </div>
        </div>
      </Card>
      <div className="d-flex justify-content-between mt-3" style={{ maxWidth: 420 }}>
        <Button
          variant="outline-secondary m-3"
          onClick={Back}
          disabled={parseInt(id) === 1}

        >
          <i className="bi bi-arrow-left-circle-fill fs-2"></i>
        </Button>

        <Button
          variant="outline-secondary m-3"
          onClick={Next}
          disabled={parseInt(id) === 20}

        >
          <i className="bi bi-arrow-right-circle-fill fs-2"></i>
        </Button>
      </div>
    </div>


  )
}

export default ProductPage
