import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { allCartData } from '../redux/cart';
export default function Cart() {
    const { cartData } = useSelector(state=>state.cart)
    const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id);
//   http://localhost:8000/cartremove/item
 // http://localhost:8000/cart/add-cart
//  http://localhost:8000/order/add-order

  const[data,setData]=useState([])

  useEffect(() => {
    const local_data= JSON.parse(localStorage.getItem('userDetails'))
    const id = local_data.loginid
      axios.get(`http://localhost:2000/cart/view-cart/${id}`).then((res)=>{
        const value = JSON.stringify(res.data.details);
        dispatch(allCartData(value)) 
        setData(res.data.details)
  })

  
  }, [])
   console.log(cartData,data)
  
const removeid = (id)=>{
    axios.get(`http://localhost:2000/cartremove/item/${id}`).then((res)=>{
       console.log(res);
       window.location.reload()
  })
}

    return (
        <>
            <section className="h-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                                </div>
                            </div>

                        {data.map((item)=>
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{item.product_name}</p>
                                            {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <input id="form1" min={0} name="quantity" defaultValue={2} type="number" className="form-control form-control-sm" />
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">{item.price}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" className="text-danger" onClick={()=>{removeid(item._id)}}><i className="fas fa-trash fa-lg" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
 )}
                            
                            {/* <div className="card mb-4">
                                <div className="card-body p-4 d-flex flex-row">
                                    <div className="form-outline flex-fill">
                                        <input type="text" id="form1" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form1">Discound code</label>
                                    </div>
                                    <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                </div>
                            </div> */}
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
