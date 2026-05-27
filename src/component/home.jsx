import { useEffect, useState } from "react"

export const Home = ()=>{
    const [name, setName] = useState("Neha");

    useEffect(()=>{
        setName("Gayatri");
    }, [])
    return (
        <>
        <p>Your Name is {name}</p>
        </>
    )
}