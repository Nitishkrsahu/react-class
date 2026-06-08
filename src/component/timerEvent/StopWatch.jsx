import React, { useRef, useState } from 'react'

export default function StopWatch() {

    const [ms, setMs] = useState(0);
    const [sec, setSeconds] = useState(0);

    let thread = useRef(null);

    var count = 0;
    var seconds = 0;
    function RunMilliSeconds(){
        count++;
        if(count === 999){
            seconds++;
            count = 0;
            setSeconds(seconds);
        }
        setMs(count);
    }

    function handleStartClick(){
        thread.current = setInterval(RunMilliSeconds, 0.1);
    }
    function handleStopClick(){
        clearInterval(thread.current);
    }
  return (
    <div className='container-fluid'>
        <div className='mt-4 text-center d-flex justify-content-center'>
            <div className='mx-4'>
                <span>00</span>
                <span style={{fontSize: '10px'}}>h</span>
            </div>
            <div className='mx-4'>
                <span>00</span>
                <span style={{fontSize: '10px'}}>m</span>
            </div>
            <div className='mx-4'>
                <span>{sec}</span>
                <span style={{fontSize: '10px'}}>s</span>
            </div>
            <div className='mx-4'>
                <span>{ms}</span>
                <span style={{fontSize: '10px'}}>ms</span>
            </div>
        </div>
        <button onClick={handleStartClick} className=' btn btn-primary'>Start</button>
        <button onClick={handleStopClick} className='btn btn-danger'>Stop</button>
    </div>
  )
}
