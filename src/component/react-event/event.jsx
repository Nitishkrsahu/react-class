import React from 'react'

export default function Event() {
    function display(){
        alert("button clicked");
    }
  return (
    <>
    <button onClick={display}>Alert</button>
    </>
  )
}
