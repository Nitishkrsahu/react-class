import React, { useState } from 'react'

export default function ElementState() {
    const [userName, setUserName] = useState('');
    const [msg, setMsg] = useState('');

    function handleFocus(){
        setMsg('Name in Block Letters');
    }
    function handleBlur(){
        setMsg('');
        setUserName(userName.toLowerCase());
    }
    function handleNameChange(e){
        setUserName(e.target.value);
    }
  return (
    <div>
        <h3>Register User</h3>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" value={userName} onChange={handleNameChange} onBlur={handleBlur} onFocus={handleFocus}/></dd>
            <dd className='text-warning'>{msg}</dd>
        </dl>
    </div>
  )
}
