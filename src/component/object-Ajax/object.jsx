import React, { useState } from 'react'

export default function Object() {
    const [product] = useState({Name: "Samsung TV", Price: 45000, Stock: true, Cities: ['Delhi', 'Hyd'], Rating:{Rate: 4.2, count: 5000}});
  return (
    <div>
        <h3>Product Details</h3>
        <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price.toLocaleString('en-IN', {style: 'currency', currency:'INR'})}</dd>
            <dt>Stock</dt>
            <dd>{(product.Stock === true)?"Available": "Out Of stock"}</dd>
            <dt>Cities</dt>
            <dd>
                <ul>
                {product.Cities.map((city, index)=> <li key={index}>{city}</li>)}
                </ul>
            </dd>
            <dt>Rating</dt>
            <dd>{product.Rating.Rate} - {product.Rating.count}</dd>
        </dl>
    </div>
  )
}
