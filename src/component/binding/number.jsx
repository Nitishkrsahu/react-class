import React from 'react'
import { useState } from 'react';
export default function Number() {
    const [price] = useState(432328);
    const [marks] = useState(432328);
    const [weight] = useState(432328);
    const [views] = useState(8765476);
    return (
        <div>
            {/* <p>{price.toFixed(4)}</p> */}
            {/* <p>{price.toPrecision(4)}</p> */}
            {/* <p>{price.toLocaleString('en-IN')}</p> */}
            <p>Price = {price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
            <p>Percent = {marks.toLocaleString('en-IN', { style: 'percent' })}</p>
            <p>Weight = {weight.toLocaleString('en-IN', { style: 'unit', unit: 'centimeter' })}</p>
            <p>Views = {views.toLocaleString('en-US', {notation: 'compact'})}</p>
        </div>

    )
}
