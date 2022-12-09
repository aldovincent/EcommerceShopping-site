import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { allCartData } from '../redux/cart';


export default function Product({newdata}) {
  const { cartData } = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  console.log(cartData)
  let navigate=useNavigate();

  const filterproduct =(category)=>{
    console.log();
  }




  const productid = (id)=>{
    console.log(id);
    navigate('/Details/')
  }

  const{id}=useParams()
  console.log(id);


  const itemid = (id)=>{
    console.log(id);
   const local_data= JSON.parse(localStorage.getItem('userDetails'))
   const details_data ={
    user_id:local_data.loginid,
    product_id:id

   } 
   console.log(local_data,details_data)
    axios.post('http://localhost:2000/cart/add-cart',details_data).then((res)=>{
      console.log(res)
       navigate('/Cart/')
    })
    

  }

 
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 mb-3'>
            <h1 className='display-6 fw-bold text-center py-3'>Latest Products</h1>
            <hr/>
          </div>
          <div className='col-sm-12 text-center mb-5 py-3'>
            <a href="" className='btn btn-outline-dark mr-2'  >All</a>
            <a href="" className='btn btn-outline-dark mr-2' onClick={()=>filterproduct("mensclothing")}>Men's Clothing</a>
            <a href="" className='btn btn-outline-dark mr-2' onClick={()=>filterproduct("Womensclothing")}>Women's Clothing</a>
            <a href="" className='btn btn-outline-dark mr-2'onClick={()=>filterproduct("jwellery")}>jewelery</a>
            <a href="" className='btn btn-outline-dark mr-2'onClick={()=>filterproduct("electronic")}>Electronic</a>
          </div>


      {newdata.map((obj)=>
          <div className='col-sm-3 mb-5'>
            <div class="card h-100 text-center p-4">
              <img class="card-img-top" src={obj?.product_image} height="250px"  alt='image'  onClick={()=>productid(obj.id)} />
              <div class="card-body">
                <h5 class="card-title">{obj?.title.substring(0,12)}</h5>
                <p class="card-text fw-boilder">${obj?.price}</p>
                <a href="#" class="btn btn-outline-dark" onClick = {()=>itemid(obj._id)}>Add to cart</a>
              </div>
            </div>
          </div>
      )}




        </div>
      </div>
    </>
  )
}
