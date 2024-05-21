import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { BsMessenger } from "react-icons/bs";
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className=" text-light py-5  " style={{backgroundColor:'darkblue'}}>
      <div className="container">
        <div className="row  flex-wrap  justify-content-around">
          <div className="col-md-4 text-start ">
            <img src="./img/kanthAriya.gif" alt="company logo" height="100px" width="150px" />
            <p className="pt-2 footer-hov">
              <FaLocationDot  className=" text-warning  py-1 " size={30}  />H-15 305 BSI Business Park <br />
              Noida, 201301, India
            </p>
            <p className=" footer-hov" >
              <  BsMessenger  className="text-bold text-warning py-1 " size={30}  />info@kanthariyatechnologies.com
            </p>
            <p className=" footer-hov">
              <FaPhone  className="text-bold text-warning py-1 " size={30}  />0123456789
            </p>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light text-start ">Useful Links</p>
            <ul className="list-unstyled fs-6 text-start  lh-base h4 footer-hov">
              <li>
                <NavLink to="/" className="text-decoration-none text-light footer-hov p-2">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-decoration-none text-light footer-hov p-2">About</NavLink>
              </li>
              <li>
                <NavLink to="/service" className="text-decoration-none text-light footer-hov p-2">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-decoration-none text-light footer-hov p-2">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light text-start">Service Links</p>
            <ul className="list-unstyled  fs-6 lh-base text-start  h4  footer-hov">
              <li>
                <NavLink to="/digit" className="text-decoration-none text-light  footer-hov p-2">Digital Marketing</NavLink>
              </li>
              <li>
                <NavLink to="/web" className="text-decoration-none text-light x footer-hov p-2">Web Developer</NavLink>
              </li>
              <li>
                <NavLink to="/design" className="text-decoration-none text-light footer-hov p-2">Word Press</NavLink>
              </li>
              <li>
                <NavLink to="/developer" className="text-decoration-none text-light footer-hov p-2 ">Software Developer</NavLink>
              </li>
              <li>
                <NavLink to="/tsting" className="text-decoration-none text-light footer-hov p-2">Software Testing</NavLink>
              </li>
              <li>
                <NavLink to="/android" className="text-decoration-none text-light footer-hov p-2 ">Anbroid</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light pb-2 text-start">  Network</p>
            <ul className="list-unstyled d-flex   h4 fs-6  ">
              <li className="p-2">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1 ">
                  <FaFacebook  size={30} className="pb-2 bg-primary  p-1  rounded-circle"/>
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  <FaInstagramSquare   size={30} className="pb-2  bg-danger p-1  rounded-circle"/>
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/" className="text-decoration-none text-light  footer-hov1  ">
                  <FaSquareTwitter  size={30} className="pb-2 bg-info   p-1   rounded-circle" />
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/" className="text-decoration-none  text-light footer-hov1">
                  <FaLinkedin  size={30} className="pb-2 bg-warning p-1  rounded-circle"/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
