import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {NavLink} from 'react-router-dom'

const NavbarTab = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light bg-gradient content-justify-center 
">
  <div className="container-fluid">
 
    <NavLink className="navbar-brand" to="/">
    {/* <p className="fs-5 text-primary ">GNK <span className="text-warning ">Solutions...</span></p> */}
    <img src="./img/kanthAriya.png" alt="company logo" height="80px" width="100px" />
    </NavLink>
 
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="navbar-nav px-5 ">
        <li className="nav-item ">
          <NavLink className="nav-link text-primary  px-3"  to="/"><p className="h5">Home</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary  px-3 "  to="/about"><p className="h5">About</p></NavLink>
        </li>


<li className="nav-item dropdown">

   <NavLink className="nav-link text-primary px-3 " 
    to="/service"
    style={{ display: 'inline-block' }}>
      <p className="h5">Service</p>
      </NavLink>
    <NavLink className="nav-link text-primary px-1 btn dropdown-toggle" 
    to="/service" 
    id="navbarDropdown" 
    role="button"
     data-bs-toggle="dropdown"
      aria-haspopup="true"
       aria-expanded="false"
       style={{ display: 'inline' }}>

</NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/web">Web Development</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/design">Word Press</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/tsting">Software testing</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/developer">Software Development</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/Android">Mobile App Development </NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/digit">Digital Marketing</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/contact"></NavLink></li>
      </ul>
  
    </li>
      

        <li className="nav-item">
          <NavLink className="nav-link text-primary px-3"  to="/contact"><p className="h5">Contact</p></NavLink>
        </li>
        
      </ul>
      
    </div>
  {/* </div> */}
</nav>

    </div>
  )
}

export default NavbarTab
