import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function FakestoreProduct() {
  const [products, setProducts] = useState([{id: 0, title: '', price: 0, description: '', image: '', rating: {rate: 0, count: 0}}]);
  let params = useParams();
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
    .then(response=>{
      setProducts(response.data);
    })
  },[])
  return (
    <div className='container-fluid'>
      <h3>{params.category.toUpperCase()} PRODUCTS</h3>
      <section className='row'>
        <nav className='col-2 overflow-auto' style={{height: '500px'}}>
          {
            products.map(product=>
              <div className='card p-2 m-2' style={{width: '100px'}}>
                <img src={product.image} alt="product-image" className='card-img-top' height="50"/>
              </div>
            )
          }
        </nav>
      </section>
      <Link to="/">Back to Category</Link>
    </div>
  )
}
