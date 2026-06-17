import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FakestoreHome from './fakestore-Home';
import FakestoreProduct from './fakestoreProduct';
export default function FakestoreIndex() {
  return (
    <div className='container-fluid'>
        <BrowserRouter>
        <header className='border border-1 '>
            <h1 className='text-center'>Fakestore</h1>
        </header>
        <section>
            <Routes>
                <Route path="/" element={<FakestoreHome />}></Route>
                <Route path="products/:category" element={<FakestoreProduct />}></Route>
            </Routes>
        </section>
        </BrowserRouter>
    </div>
  )
}
