import moment from 'moment';
import React, { useEffect, useState } from 'react'

export default function Moment() {
    const [today, setToday] = useState();
    
    useEffect(()=>{
        var now = new Date("2026-06-01");
        setToday(moment(now).format('dddd Do, MMMM YYYY'))
    },[])
  return (
    <div>
        <h2>Moment</h2>
        <p>{today}</p>
    </div>
  )
}
