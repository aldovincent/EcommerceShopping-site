import React from 'react'

export default function Home() {
  return (
    <>
       <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../assets/bg6.jpg" alt="Los Angeles" width={1540} height={660} />
            <div className="carousel-caption">
            <h3 className='display-6 fw-bold'>NEW SEASON ARRIVALS</h3>
            <p  className='display-6 fw-bold'>CHECK OUT ALL THE TRENDS</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src="../../assets/bg2.jpg" alt="Chicago" width={1540} height={660} />
            <div className="carousel-caption">
            <h3 className='display-6 fw-bold'>NEW SEASON ARRIVALS</h3>
            <p className='display-6 fw-bold'>CHECK OUT ALL THE TRENDS</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src="../../assets/bg4.jpg" alt="New York" width={1540} height={660} />
            <div className="carousel-caption">
              <h3 className='display-6 fw-bold'>NEW SEASON ARRIVALS</h3>
              <p className='display-6 fw-bold'>CHECK OUT ALL THE TRENDS</p>
            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>





      {/* 
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="../../assets/bg1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../assets/bg2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../assets/bg3.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>  */}


      {/* 
            <div className="hero">
            <div class="card bg-dark text-white">
                <img src="../../assets/bg6.jpg" class="card-img" alt="background" />
                <div class="card-img-overlay d-flex flex-column  justify-content-center">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text">CHECK OUT ALL TRENDS</p>
                </div>
            </div>
        </div> */}
    </>
  )
}
