import React, { useState } from 'react'

export default function MouseEventNew() {
  const [styleObj, setStyleObj] = useState({position: '', top:'', left: ''});

  function handleMouseMove(e){
    setStyleObj({
      position: 'absolute',
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    })
  }
  return (
    <div className='container-fluid' onMouseMove={handleMouseMove}>
      <div style={{height: '1000px'}}>
        Move mouse Pointer to test
      </div>
      <img src='./images/india.gif' style={styleObj} alt="flag" width={50} />
    </div>
  )
}
