import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function FakestoreDetails() {

    const [product, setProduct] = useState({id: 0, title: '', price: 0, description: '', image: null, rating: {rate: 0, count: 0}})
 
    let params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response =>{
            console.log(response.data);
            setProduct(response.data);
        })
    },[])

  return (
    <div className='container-fluid'>
        <h3>Details</h3>
        <dl>
            <img src={product.image} width="200" height="200"/>
            <dt>Title</dt>
            <dd>{product.title}</dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Rating</dt>
            <dd>{product.rating.rate} <span className='bi bi-star-fill text-success'></span></dd>
        </dl>
    </div>
  )
}
