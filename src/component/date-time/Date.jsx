import React, { useEffect, useState } from 'react'

export default function DateTime() {
    const [today, setToday] = useState(new Date());
  return (
    <div>{today.toLocaleTimeString()}</div>
  )
}
