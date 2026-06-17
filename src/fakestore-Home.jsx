import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FakestoreHome() {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response =>{
            setCategories(response.data);
        })
    },[])
  return (
    <div>
        <h3>Home</h3>
        <ul className='list-unstyled'>
            {
                categories.map(category => 
                    <li className='my-4' key={category}><Link className='btn btn-dark w-25' to={`products/${category}`}>{category}</Link></li>
                )
            }
        </ul>
    </div>
  )
}
