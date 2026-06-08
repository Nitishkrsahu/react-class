import React, { useEffect, useState } from 'react'

export default function TimerEvent() {
    const [time, setTime] = useState();
    function Timer(){
        var now = new Date();
        var time = now.toLocaleTimeString();
        setTime(time);
    }
    useEffect(()=>{
        setInterval(Timer, 1000)
    },[])
    return (
        <div className='container-fluid'>
            <div className='mt-4 text-center'>
                {time}
            </div>
        </div>
    )
}
