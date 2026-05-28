import React, { useState } from 'react'

export default function Undefined() {
    const [price] = useState(3456);
  return (
    <div>
        <p>{(price === undefined)?"Price is not Defined" : "Price is defined"}</p>
    </div>
  )
}
