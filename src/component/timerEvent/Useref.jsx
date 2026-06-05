import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [msg, setMsg] = useState('volume 0%');
    let thread = useRef(null);

    function Level1(){
        setMsg('Volume increased to 20%');
    }
    function Level2(){
        setMsg('Volume increased to 60%');
    }
    function Level3(){
        setMsg('Volume increased to 100%');
    }

    function handleCancelClick(){
        clearTimeout(thread.current);
    }
    function handleVolumeUpClick(){
        setTimeout(Level1, 3000);
        thread.current = setTimeout(Level2, 5000);
        setTimeout(Level3, 10000);
    }
  return (
    <div className='container-fluid'>
        <div className='mt-4'>
            <button onClick={handleCancelClick} className='btn btn-warning mx-2'>Cancel Level2</button>
            <button onClick={handleVolumeUpClick} className='btn btn-primary bi bi-volume-up'></button>
            <span className='mx-2'>{msg}</span>
        </div>
    </div>
  )
}
