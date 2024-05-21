import React from 'react'
import Testing from '../Testing'
import {Link} from "react-router-dom"


const softwaretsting = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image mt-1"
        style={{
          backgroundImage: `url('./img/testing.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Software Testing Services</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="py-5 text-start"></p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-center align-items-center">
        <p className="h2 p-4">Web development Services provided by Kanthariya Technologies</p>
        <p className="p-2 fs-6">Kanthariya Technologies offers a unique and comprehensive testing solution that can revolutionize your software development process. In this article, we will explore the key features and benefits of Kanthariya Technologies' software testing services.Kanthariya Technologies' comprehensive testing solutions cover a wide range of testing types, including functional testing, performance testing, security testing, compatibility testing, and more. By addressing different aspects of software quality, they leave no stone unturned in ensuring your software meets the highest standards.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
  {Testing.map((datas) => (
    <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/tsting/${datas.id}`} className="text-decoration-none"> */}
        <div className="border shadow-lg rounded position-relative">
          <img src={datas.image} alt={datas.title} className="img-fluid"
           style={{ width: '100%', height:'40vh' }} />
          <div className="overlay p-2">
            <p className='h3 text-warning'>{datas.title}</p>
            <p className='fs-6 text-dark'>{datas.description}</p>
          </div>
        </div>
      {/* </Link> */}
    </div>
  ))}
</div>
      </div>
</div>
</div> 
  </>
  )
}

export default softwaretsting
