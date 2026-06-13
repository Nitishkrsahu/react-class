import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
export default function ReactRoute() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='p-2 text-center border border-1'>
                    <h2>Amazon</h2>
                    <nav>
                        <span className='mx-4'><Link to="/">Home</Link></span>
                        <span className='mx-4'><Link to="/about">About</Link></span>
                        <span className='mx-4'><Link to="/contact">Contact</Link></span>
                        <span className='mx-4'><Link to="/service">Service</Link></span>
                    </nav>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<div>Amazon Home Page</div>}></Route>
                        <Route path="/about" element={<div>About Page</div>}></Route>
                        <Route path="/contact" element={<div>Contact</div>}></Route>
                        <Route path="/service" element={<div>Service</div>}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}