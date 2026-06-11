import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`d-flex ${props.theme} justify-content-between p-3 align-items-center border border-2`}>
        <div>
            <span className='fs-4 fw-bold'>{props.brandName}</span>
        </div>
        <div>
            {
                props.menuItems.map(item=><span key={item} className='mx-4'>{item}</span>)
            }
        </div>
        <div>
            {
                (props.signin === true)?
                <div>
                    <button className={`${props.color}`}>Signin</button>
                </div>
                :null
            }
        </div>
    </nav>
  )
}
