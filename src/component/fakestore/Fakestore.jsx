import axios from 'axios';
import React, { useEffect} from 'react'
import { setProducts } from './productSlice';
import { addToCart } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Fakestore() {
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products);
    const cart = useSelector((state)=> state.cart);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>dispatch(setProducts(res.data)));
    },[])
    const total = cart.reduce(
        (sum, item)=> sum + item.price,
        0
    )
  return (
    <div className='container mt-4'>
        <h2 className='text-center'>Fakestore</h2>
        <h4>cart Items:{cart.length}</h4>
        <h5>Total: &#8377;{total}</h5>
        <div className='row mt-lg-4'>
            {
                products.map((item)=>(
                    <div className=' col-md-3 mb-3' key={item.id}>
                        <div className='card h-100'>
                            <img src={item.image} height={220} className='p-3' />
                            <div className='card-body'>
                                <h6>{item.title.slice(0, 20)}</h6>
                                <p>&#8377;{item.price}</p>
                                <button className='btn btn-primary w-100' onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>

  )
}
