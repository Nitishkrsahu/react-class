import React from 'react'

import { useReducer } from 'react';

let initialState = {
    viewersCount: 0
}

function reducer(state, action){
    switch(action.type){
        case "join":
        return {viewersCount : state.viewersCount + 1}
        case "exit":
        return { viewersCount: state.viewersCount - 1}
    }
}

export default function Reducer() {

    const [state, dispatch] = useReducer(reducer, initialState);
    function handleJoinClick(){
        dispatch({type: "join"})
    }
    function handleExitClick(){
        dispatch({type: "exit"})
    }
  return (
    <div className='container-fluid'>
        <h3>Youtube Live</h3>
        <iframe src="https://www.youtube.com/embed/a-wVHL0lpb0" width="400" height="300"></iframe>
        <div className='my-4 bi bi-eye'>
            {state.viewersCount} Viewing
        </div>
        <div className='mt-4'>
            <button onClick={handleJoinClick} className='bi bi-door-open btn btn-success'>Join</button>
            <button onClick={handleExitClick} className='bi bi-door-closed btn btn-danger mx-3'>Exit</button>
        </div>
    </div>
  )
}
