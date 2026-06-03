import React from 'react'

export default function EventPro() {
    function handleNavClick(){
        alert('Nav Clicked');
    }
    function handleSearchClick(e){
        e.stopPropagation();
        alert('Search Clicked');
    }
    function handleSubmit(e){
        e.preventDefault();
        alert('Form Submitted');
    }
  return (
    <div>
        <h2>Events</h2>
        <nav className='border border-2 p-2 d-flex justify-content-between bg-primary text-white' onClick={handleNavClick}>
            <h3>Shopping</h3>
            <button onClick={handleSearchClick} className='bi bi-search btn btn-warning'></button>
        </nav>
        <form onSubmit={handleSubmit} style={{border: '1px solid black', padding: '20px', backgroundColor: '#00ffff'}}>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" name='user' /></dd>
            </dl>
            <button>Submit</button>
        </form>
    </div>
  )
}
