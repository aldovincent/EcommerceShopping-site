import React from 'react'
import { useParams } from 'react-router-dom'


export default function Details() {
    const { id } = useParams()
    console.log(id);
    // http://localhost:8000/singleprod/items
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 mt-5'>
                        <img src="../assets/prod2.jpg" style={{ width: 400 }} alt='' className='img-fluid'></img>
                    </div>
                    <div className='col-sm-6 mt-5'>
                        <h1 className='display-6'>Men's Clothing</h1>
                        <h2>Men's Casual Premium Slim Fit T-shirts</h2>
                        <h4>Rating 4.1  <span class="fa fa-star"></span></h4>
                        <br></br>
                        <h2>$22.3</h2>
                        <br></br>
                        <p>Care Instructions: Machine Wash
                            Fit Type: Slim Fit
                            Soft cotton breathable fabric
                            Stylish double pocket shirt with badge embroidery details
                            Sleeve type: Long Sleeve
                            Care Instructions: Machine Wash
                            Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours.
                            Regular Fit: The t-shirt is framed in a Regular Fit for a relaxed feel.
                            Polo Collar: This t-shirt is designed with a polo collar.
                            Solid: The t-shirt is available in solid pattern.
                            Soft Handfeel: The fabric is extremely soft and comfortable, keeping you at ease for hours.
                        </p>
                        <a href="#" className='btn btn-outline-dark'>Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}
