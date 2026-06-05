import React from 'react'

export default function ButtonEvent() {
    function handleDoubleClick(){
        window.open('./images/1.jpeg', 'iphone', 'width=300 height=400');
    }
    function handleContextMenu(){
        document.oncontextmenu = () =>{
            alert('Right click not Allowed');
        }
    }
  return (
    <div onContextMenu={handleContextMenu} className='container-fluid'>
        <img src="./images/1.jpeg" alt="iphone" width={100} height={100} onDoubleClick={handleDoubleClick}/>
        <p>Double click to view large</p>
        <h1>Right Click disable on this page</h1>
    </div>
  )
}
