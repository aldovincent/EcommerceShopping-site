import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate();
    const pageid = (id) => {
        console.log(id);
        navigate('/Product/')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
                <a class="navbar-brand  display-6  font-weight-bolder text-center py-3" href="#">FLIPKART</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                    <Link to='/' > <li class="nav-item active">
                            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                        </li></Link>
                        <Link to='/Items' > <li class="nav-item">
                            <a class="nav-link" href="#" >Products</a>
                        </li></Link>

                        <Link to='/Addcat' ><a href="#" className='btn btn-outline-dark mr-2'>Add category</a></Link>
                        <Link to='/Addprod'><a href="#" className='btn btn-outline-dark'>Add product</a></Link>

                    </ul>
                    <div className='buttons'>
                        <Link to='/login' > <a href='' className='btn btn-outline-dark   mr-2'>
                            <i className="fa fa-sign-in me-1"></i>Login</a></Link>
                        <Link to='/register'> <a href='' className='btn btn-outline-dark mr-2'>
                            <i className="fa fa-user-plus me-1 "></i>Register</a></Link>
                        <Link to='/cart' >  <a href='' className='btn btn-outline-dark mr-2'>
                            <i className="fa fa-shopping-cart me-1"></i>Cart(0)</a></Link>

                    </div>
                </div>
            </nav>



        </>
    )
}
