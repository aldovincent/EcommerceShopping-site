import React,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from "axios"
export default function Login() {
const [margin, setMargin] = useState({})
const navigate = useNavigate()
const change=(event)=>{
  var name=event.target.name
  var value=event.target.value
  console.log(name);
  setMargin({...margin,[name]:value})

}

  // const sub=(e)=>{
  //   e.preventDefault()
  //   axios.post("http:localhost:8000/log/login",margin).then((res)=>{
  //     console.log(margin);
  
  //   })
  // }

  const sub = (e) => {
    e.preventDefault();
    console.log(margin);
      axios.post("http://localhost:2000/log/login",margin).then((res)=>{
      
        var logindata={
          loginid:res.data.login_id,
          username:res.data.username,
        }
        console.log(logindata);
        localStorage.setItem("userDetails",JSON.stringify(logindata))
        navigate('/')
      }).catch((err)=>{
        console.log(err);
      })
  
    }

 
    return (
    <>
    <Navbar/>



   <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center" >
                  <form onSubmit={sub}>
                  <h3 className="mb-5">Login</h3>
                  <div className="form-outline mb-4">
                    <input type="text" id="typeEmailX-2" name="username" onChange={change} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX-2">username</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2"  name="password" onChange={change} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX-2">password</label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox"  defaultValue id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}} type="submit"><i className="fab fa-google me-2" /> Sign in with google</button>
                  <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998'}} type="submit"><i className="fab fa-facebook-f me-2" />Sign in with facebook</button>
               </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
