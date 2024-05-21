import React from 'react'
import {NavLink} from 'react-router-dom'
import Format from '../compomnents/Format'
import Review from '../compomnents/Review'

const Service = () => {
  return (
  <>
<div>
      <div
        classNameName="bg-image"
        style={{
          backgroundImage: `url('./img/r11.gif')`,
          
          backgroundSize:'cover',
          
        
        }}
      >
        <div className=" text-white  text-xl-center ">
        <p  className="p-5 head1  fs-1">Our Service</p>
        </div>
      
      </div>

  
        <div className="container shadow-sm rounded mt-3 head1">
          <div className=" fs-6 row flex flex-wrap justify-content-center  ">
          <p className="mt-5  ">Our company offers a wide range of application services to help businesses improve their productivity, efficiency, and user experience. We help the businesses in achieving their digital goals. Our team of expert developers and designers can create custom applications tailored to your business needs that meet our client’s unique business needs. We are dedicated to providing the best IT solutions to our clients. Our services are both user-friendly and reasonably priced. We use the latest technologies and programming languages to ensure that your client’s websites and applications are user-friendly, responsive, and secure. Here are some of the application services we offer: Web Development, App Development, Search Engine Optimization, and Web Design.</p>
         </div>
      </div>
      <div className="container mt-4 shadow-lg rounded">
      <div className="row g-2 p-1">
        {Format.map((format) => (
          <div key={format.id} className="col-md-4  ">
      <div className="card m-2 shadow-lg rounded head1 p-2" style={{width: "22rem "}}>
      <img src={format.image} className="card-img-top head1 " alt="it"/>
       <div className="card-body">
       <p className="card-text fs-4 text-warning head1">{format.title}</p>
        <p className="card-text head1">{format.description}</p>
        <NavLink to={format.Link} className="btn btn-warning text-black text-decoration-none head1">Read More</NavLink> 
       </div>
  </div>
  </div>
     ))} 
</div>

</div>
<Review/>
</div>

</>
  )
}

export default Service;
