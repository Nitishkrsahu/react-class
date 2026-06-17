import React from 'react'
import { useParams } from 'react-router-dom'

export default function Params() {
    let params = useParams();
  return (
    <div>
        <div>Products</div>
        <dl>
            <dt>Category</dt>
            <dd>{params.category}</dd>
            <dt>Brand</dt>
            <dd>{params.brand}</dd>
        </dl>
    </div>
  )
}
