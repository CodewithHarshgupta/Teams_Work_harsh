import React from 'react'
import Developer1 from '../Developer1'
// import {Link} from "react-router-dom"


const web_developer = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image mt-1"
        style={{
          backgroundImage: `url('./img/web1.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Web Developer</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="py-5 text-start">Web development is a crucial aspect of modern businesses and individuals who wish to establish their online presence. It involves designing, building, and maintaining websites, web applications, and other web-related projects. As the internet continues to grow and evolve, web development has become an essential part of any business strategy. One company that has been at the forefront of web development is Obicule Technologies.
Kanthariya Technologies is a web development company that provides a wide range of web-related services to clients. This article will explore the services provided by Kanthariya Technologies, their approach to web development, and why they are a top choice for businesses and individuals looking to establish their online presence.</p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-center align-items-center">
        <p className="h2 p-4">Web development Services provided by Kanthariya Technologies</p>
        <p className="fs-6 text center">Kanthariya Technologies  provides a wide range of web-related services to clients. These services include web development, web design, e-commerce development, mobile app development, and digital marketing. Let's take a closer look at each of these services.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
  {Developer1.map((datas) => (
    <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/web/${datas.id}`} className="text-decoration-none"> */}
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

export default web_developer
