import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react";
import Navbar from "../Components/Navbar"
import Home from "../Components/Home"
import  Product from "../Components/Product"
export default function Homes() {
    const [product, setProduct] = useState([])
    

    useEffect(() => {
      
      axios.get("http://localhost:2000/view/view-products").then((res)=>{
        console.log(res.data)
        setProduct(res.data.data)
      })
    
    }, [])
    console.log(product)
  return (
    <>
    <Navbar/>
    <Home/>
    <Product  newdata={product}/>
  </>
  )
}
