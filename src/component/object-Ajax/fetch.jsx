import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [product, setProduct] = useState([{id: 0, name: "", category: "", price: 0, brand: "", stock: 0, rating: 0}]);

    function GetData() {
        fetch('./data.json')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    useEffect(() => {
        GetData();
    }, [])

    return (
        <div>
            <h2>Product Details</h2>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Stock</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item) => {
                            return(
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td>{item.stock}</td>
                                <td>{item.rating}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
