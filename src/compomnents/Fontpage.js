import React from 'react';
import About from './Abouts/About';
import About1 from '../compomnents/About1';
import About2 from '../compomnents/About2';
import BackgroundImage from './BackgroundImage';
import data from '../compomnents/data'
import {NavLink}  from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const Fontpage = () => {
  return (
    <>
<BackgroundImage/>
    <About/>
    <About1/>
    <About2/>
 <div className="container">
 <div claassName="d-flex ">
  <div className="  d-flex flex-wrap  justify-content-center   ">
    <p className=" head h2 p-2 pt- rounded "  style={{color:"#32D73"}}>Check Our Service</p>
    </div>
    </div> 
<div className="row d-flex flex-wrap justify-content-center align-items-center ">

 {data.map( datas =>(
  <div  key={datas.id} className="m-3 col-md-12 col-lg-3 p-2  border shadow-lg rounded  btn-customer">
    <img src={datas.image}  className="rounded" alt={datas.title} style={{width:"11rem"}}/>
  <p className='h '  style={{color:"#32D73"}}>{datas.title}</p>
  <p className=' text-dark'>{datas.description}</p>
</div>
 ))} 
 
</div>
</div>

<div >
  <p className="h2 p-">We are working with them</p>
  </div>
 <marquee 
  behavior='scroll'
  scrollamount='20'
  direction='right'
 >
    <div classNameName=" container h-20 w-10 pt-3 ">
 
    <img src="./img/w11.jpeg" classNameName="px-5 " alt="logo"/>
    <img src="./img/w12.jpeg" classNameName="px-5 " alt="logo"/>
    <img src="./img/w13.jpeg"  classNameName="px-5 " alt="logo"/>
    
    <img src="./img/w15.jpeg" classNameName="px-5 "alt="logo"/>
    <img src="./img/w16.jpeg" classNameName="px-5 "alt="logo"/>
    </div>
    </marquee>

<div className="head bg-warning text-white " >
  <p className=" text-start px-5 pt-5 h2">Discover Cutting-Edge Solutions and </p>
  <p className=" text-start px-5 h2">Transform your Business.</p>
 <div className="d-flex px-5">
  <NavLink to="/contact"  className="text-decoration-none text-light">
    <p className="  text-start flex px-5  py-2 border  bg-warning  h6">
      SPEAK THE EXPERT 
      <FaLongArrowAltRight /> 
      </p>
  </NavLink>
  </div> 
 
</div>
    </>
  )
}

export default Fontpage
