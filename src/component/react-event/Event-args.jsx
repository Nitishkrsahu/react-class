import React from 'react'

export default function EventArgs() {
    function handleClick(e, msg, list, rating){
        console.log(`
            Button Id : ${e.target.id}\n
            Button Value : ${e.target.value}\n
            X Position : ${e.clientX}\n
            Message : ${msg}\n
            List: ${list.toString()}\n
            rating: ${rating.Rate}
            `)
    }
  return (
    <div>
        <h2>Events</h2>
        <button id='btnInsert' value="Insert" onClick={(event)=> handleClick(event, 'welcome', ['Delhi', 'Hyd'], {Rate: 4.2})}>Insert</button>
    </div>
  )
}
