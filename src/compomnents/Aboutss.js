import React from 'react';
import 'animate.css';

const Aboutss = () => {
  return (
    <>
    <div>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url('./img/r11.gif')`,
       
          backgroundSize:'cover',
           
        
        }}
      >
        <div className=" text-white  text-xl-center ">
        <p  className="p-5 head1  fs-1">About</p>
        </div>
      
      </div>
    </div>
    <div className="shadow-sm p-3 mb-5 bg-body rounded head1" >
      <div className="justify-content-center"><p className="h2 shadow-sm p-3  mb-5 bg-light rounded " style={{color:"#342D73"}}>Who We are</p></div>
    
    <p className= "    px-5  py-2 fs-6 justify-content-center animate__animated animate__fadeIn">To be competitive in the rapidly changing technological environment of today's business world, businesses need the expertise and experience that IT service providers can provide. Kantheriya Technologies, is not just a technology company.
We are a team of passionate individuals dedicated to making a difference in the world. Whether it's through our work with non-profit organizations or our commitment to sustainability and social responsibility, we strive to make a positive impact on the world around us. We believe that running a business involves both hard work and smart work. We firmly believe in providing high-quality services that satisfy our clients in terms of cost effectiveness, technical support, customer happiness. We are passionate about helping individuals, defending their morals and dedicating our time to the development of customer-focused products. Our team takes great pride in corresponding with you, responding to your emails, phone calls and support requests, as well as addressing any questions you may have regarding the services. In India as a whole, we have finished numerous projects related to SEO, product websites, business websites and Android and IOS development.</p>
    </div>
    <div class="  shadow-sm p-3 mb-5 bg-body rounded">
  <div class="row gx-5">
    <div class="col  ">
     <div class="p-3 head1 ">
      <p className="h2"  style={{color:"#342D73"}}>vision</p>
      <p className=" pt-3 text-center rounded animate__animated animate__fadeInLeft animate__slow">Our vision is to become the top supplier of technological solutions that can change how organizations function and add value for their clients. With a team of highly skilled and experienced professionals, we are dedicated to deliving high-quality and cost-effective solutions that meet the unique needs of our clients. To achieve our vision, we are dedicated to investing in our people, processes, and technology, and to fostering a culture of continuous learning, innovation, and collaboration.</p>
     </div>
    </div>
    <div class="col"> <div class="animate__animated animate__fadeIn animate__slow">
    <img src='./img/vision.jpg' alt='vision'  className=" mission" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  </div>
</div>

<div class="  shadow-sm p-3 mb-5 bg-body rounded">
  <div class="row gx-5">
   
    <div class="col ">
     <div class="animate__animated animate__fadeIn ">
    <img src='./img/mission.jpg' className=" mission" alt='vision' style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
      </div>
    </div>
    <div class="col head1  ">
     <div class="p-3">
      <p className="h2"  style={{color:"#342D73"}}>Mission</p>
      <p className=" pt-3 text-center animate__animated animate__fadeInRight head1 ">Our goal is to make your life easier and more comfortable, whether that's through our products or through the information we provide on our website. We can assist you in achieving your objectives and growing your business. We are committed to providing our clients with exceptional customer service, technical expertise and creativity that helps them achieve their goals and stand out in the digital world.</p>
     </div>
    </div>
  </div>
</div>
<div class="  head1 text-black  shadow-sm p-3 mb-5 bg-body rounded  animate__animated animate__fadeIn">
  <p className="h2 ">Some talk about of company</p>
  <p className="p-5 text-center">We understand that technology is constantly evolving, and businesses need to keep up with the latest trends and innovations in order to remain competitive. That's why we offer a range of services, including software development, website design and development, mobile app development and digital marketing. It is a leading technology company that prides itself on providing innovative solutions to complex problems. Our team of experts is dedicated to creating cutting-edge software and hardware that meets the needs of our clients. We are able to provide its clients with the most advanced and effective solutions available.
Whether you're a newly started small business or a large corporation looking to grow your digital presence, we have the skills and expertise to make you successful. To find out more about how our new technological solutions may assist you in achieving your goals, get in touch with us right away.</p>
</div>
    </>
  );
};

export default Aboutss;
