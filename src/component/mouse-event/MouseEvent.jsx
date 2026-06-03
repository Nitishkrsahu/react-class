import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MouseEvent() {
    const [mobiles, setMobiles] = useState([{img_src: ""}]);
    const [previewSrc, setPreviewSrc] = useState('./images/1.jpeg');
    useEffect(()=>{

        axios.get('mobiles.json')
        .then(response =>{
            setMobiles(response.data);
        })
    },[])
    function handleMouseOver(e){
        setPreviewSrc(e.target.src)
    }
  return (
    <div className='container-fluid'>
        <div className='row mt-4'>
            <div className='col-1'>
                {
                    mobiles.map((mobile, index)=>
                    <div key={index} className='my-4 border border-3' >
                        <img src={mobile.img_src} alt="mobile-pics" width={50} height={50} onMouseOver={handleMouseOver} />
                    </div>
                    )
                }
            </div>
            <div className='col-11'>
                <img src={previewSrc} alt="mobile-pic" width={300} />
            </div>
        </div>
    </div>
  )
}
