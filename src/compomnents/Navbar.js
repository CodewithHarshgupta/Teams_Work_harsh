import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <>
      <nav className="sticky-top bg-light ">
        <div className="row mx-1">
          <div className="col-md-6 text-start p-1h6 ">info@kantheriyatechnologies.com</div>
          <div className="col-md-6 ">
            <ul className="list-unstyled d-flex h4 fs-6 justify-content-end">
              {/* Existing icons */}
              <li className="p-1">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  <FaFacebook size={30} className="pb-2 bg-primary p-1 rounded-circle" />
                </NavLink>
              </li>
              <li className="p-1">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  <FaInstagramSquare size={30} className="pb-2 bg-danger p-1 rounded-circle" />
                </NavLink>
              </li>
              <li className="p-1">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  <FaSquareTwitter size={30} className="pb-2 bg-info p-1 rounded-circle" />
                </NavLink>
              </li>
              <li className="p-1">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  <FaLinkedin size={30} className="pb-2 bg-warning p-1 rounded-circle" />
                </NavLink>
              </li>

              {/* Additional icons */}
              <li className="">
                <NavLink to="/" className="text-decoration-none text-light footer-hov1">
                  {/* Add your new icon component here */}
                  {/* Example: <FaNewIcon size={30} className="pb-2 bg-secondary p-1 rounded-circle" /> */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
