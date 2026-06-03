import React, { useEffect, useState } from 'react'

export default function DynamicCss() {
    const [effects, setEffects] = useState({color: 'red', backgroundColor: 'yellow'});

    useEffect(()=>{
        setEffects({color: 'green', backgroundColor: 'black'})
    },[])
  return (
    <div>
        <div className='container-fluid'>
            <h2 style={effects}>React-style Binding</h2>
        </div>
    </div>
  )
}
