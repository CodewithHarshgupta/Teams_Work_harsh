import React from 'react'

import web from '../web'
// import {Link} from "react-router-dom"


const webdesign = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image  mt-1"
        style={{
          backgroundImage: `url('./img/word1.png')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Word Press</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="h3 p-4">"Crafting Beautiful and Functional Websites design for Your Business"</p>
      <p className="py-3 text-start">At Kanthariya technologies, we understand that having a well-designed website is essential for any business that wants to establish a strong online presence. That's why we specialize in creating custom websites that are not only visually stunning, but also user-friendly and optimized for search engines. Our team of experienced web designers and developers are committed to delivering high-quality solutions that meet the unique needs of each of our clients. We work closely with you to understand your business goals and create a website that reflects your brand identity and message. Our services include everything from website design and development to maintenance and support. We use the latest technologies and best practices to ensure that your website is not only beautiful, but also secure and functional. Whether you need a simple brochure website or a complex e-commerce platform, we've got you covered.</p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-center align-items-center">
        <p className="h2 p-4">Web designing Services provided by Kanthariya Technologies</p>
        <p className="fs-6 p-2">We pride ourselves on our attention to detail and commitment to customer satisfaction. We work tirelessly to ensure that every aspect of your website is perfect, from the layout and color scheme to the content and functionality. Our goal is to help you succeed online and grow your business So if you're looking for a reliable and experienced web design company, look no further than Kanthariya Technologies. Contact us today to learn more about our services and how we can help your business thrive online.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
  {web.map((datas) => (
    <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/design/${datas.id}`} className="text-decoration-none"> */}
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

export default webdesign
