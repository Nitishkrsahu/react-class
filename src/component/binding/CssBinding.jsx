import React, { useEffect, useState } from 'react'
import './cssbind.css'

export default function CssBinding() {
    
    const [font, SetFont] = useState('effect');

    useEffect()
  return (
    <div>
        <p className={`${font} bg-style`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo sunt magni nam optio, eligendi minus asperiores consectetur expedita aspernatur quisquam, accusantium incidunt soluta ullam voluptatibus aliquam aliquid quis unde.</p>
    </div>
  )
}
