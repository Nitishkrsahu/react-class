import React from 'react'

export default function Nulltype() {
  return (
    <div>
        <header>
            <span>Ecomm</span>
            {(sessionStorage.getItem("username") === null)?<button>Signin</button>:<span>{sessionStorage.getItem("username")}<button>SignOut</button></span>}
        </header>
    </div>
  )
}
