import React, { useState } from 'react'

export default function Boolean() {
    const [stock] = useState(false);
  return (
    <div>
        <p>Stock : {(stock===true) ? "Stock is Avaibale" : "Out of Stock"}</p>
    </div>
  )
}
