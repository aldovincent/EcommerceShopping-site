import axios from 'axios'
import React,{useState} from 'react'
// import { post } from '../../../server/routes/Productrouter'
// import { Link } from 'react-router-dom'

export default function Addprod() {
const [file,setFile]=useState("")
const [first, setfirst] = useState({})
  

   const change=(event)=>{
    var name=event.target.name
    var value=event.target.value

    setfirst({...first,[name]:value})
    console.log(first);
  }


  const addItem=(e)=>{
    e.preventDefault()
    console.log(file);
    
      let formData=new FormData();
      const filename=file.name
      console.log(filename);
      formData.append('name',filename)
      formData.append('file',file)  
      console.log(file);
      console.log("=====>",formData);
      for( var key of formData.entries()){
        console.log("nameessss===>",key);
      }
      // axios.post("http://localhost:5000/product/upload",file)
      // .then((response)=>{
      //   console.log(response)
      // })
      // fetch("http://localhost:8000/product/upload",{method:'POST',body:data})
      // .then((response)=>{
      //     console.log(response)
      //  })
    
    // fetch("http://localhost:8000/product/add-product",{method:'POST',body:first})
    axios.post("http://localhost:2000/product/add-product",first)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err);
    })

    
    

  }

  return (
   <>






     <section className="vh-120 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-10">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: '15px'}}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">ADD PRODUCT</h2>
                    <form encType='multipart/form-data' onSubmit={addItem}>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" name="productname" onChange={change}className="form-control form-control-lg" />
                        <label className="form-label" name="productname" htmlFor="form3Example1cg"> Product Name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="file" id="form3Example3cg" name="image" onChange={(e)=>{setFile(e.target.files[0]);setfirst({...first,image:e.target.files[0].name})}} className="form-control form-control-lg" />
                        <label className="form-label"  name="productimage" htmlFor="form3Example3cg">Product Image</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" name="price" onChange={change} className="form-control form-control-lg" />
                        <label className="form-label"  htmlFor="form3Example4cg">price</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" name="title" onChange={change} className="form-control form-control-lg" />
                        <label className="form-label"  htmlFor="form3Example4cg">Title</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" name="description" onChange={change}  className="form-control form-control-lg" />
                        <label className="form-label"  htmlFor="form3Example4cdg">Description</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" name="quantity" onChange={change} className="form-control form-control-lg" />
                        <label className="form-label"  htmlFor="form3Example4cdg">Quantity</label>
                      </div>
                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div> */}
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
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