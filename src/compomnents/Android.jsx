import React from 'react'
import Mobile from '../Mobile'
// import {Link} from "react-router-dom"

const Android = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image  mt-1"
        style={{
          backgroundImage: `url('./img/mobile1.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Mobile App Development</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="py-5 text-start">App development can be a valuable investment for businesses looking to improve customer engagement and reach new markets. We develop Android and IOS applications for our clients, startups, and enterprises. Depending on your business needs, our experienced and dedicated developers can design and develop a creative, customer-focused mobile application that provides a distinctive and user-friendly experience for your users.Our company specializes in providing technology solutions, including app development services, to businesses of all sizes. We create high-quality apps that meet the unique needs of each client.</p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-center align-items-center">
        <p className="h2 p-4">Web development Services provided by GNK Solutions</p>
        <p className="fs-6 p-2">We developed a mobile app for different types of companies that allowed customers to browse products and services, make purchases, and receive personalized recommendations based on their shopping and using history. The app also included features such as in-store pickup and the ability to check product and service availability, which helped to increase sales and customer satisfaction.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
    {Mobile.map((datas) => (
     <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/android/${datas.id}`} className="text-decoration-none"> */}
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

export default Android
