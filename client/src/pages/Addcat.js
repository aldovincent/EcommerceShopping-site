import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function Addcat() {

  const [cat, setCat] = useState({})

  const change = (event) => {
    var value = event.target.value

    setCat({ ...cat, input: value })
  }

  axios.post("http://localhost:2000/add/add-category", cat).then((res) => {
    console.log(res);
  })



  return (
    <>
      <Navbar/>


      <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">ADD CATEGORY</h2>
                    <form>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={change} />
                        <label className="form-label" htmlFor="form3Example1cg">category Name</label>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div> */}
                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
