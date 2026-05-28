import React, { useEffect, useState } from 'react'

export default function Ajax() {
    const [product, setProduct] = useState({id: 0, name: "", category: "", price: 0, brand: "", stock: 0, rating: 0});

   function GetData(){
    let http = new XMLHttpRequest();
    http.open("GET", 'data.json', true);
    http.send();
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            const data = JSON.parse(http.responseText)
            console.log(data);
        }
    }
   }

   useEffect(()=>{
    GetData();
   },[])

  return (
    <div>
        
    </div>
  )
}
