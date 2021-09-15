import React from "react";
import {useState, useEffect } from 'react'

function SideBar(){
    const [data, setData] = useState('')    

    useEffect(() => {
       fetch('/sidebarinfo')
       .then((res) => res.json())
       .then(data => console.log(data))
    }, [])

    return(<>
    {/* <h1>{data.name}</h1>
    <h2>{data.handle}</h2>
    <img src={data.src} alt={data.name}/> */}
    
    </>)
}


export default SideBar;