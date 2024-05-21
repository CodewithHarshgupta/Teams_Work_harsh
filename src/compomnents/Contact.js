import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendMail = () => {

    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      setErrorMessage('Invalid name format');
      return;
    }

    if (!numberRegex.test(number)) {
      setErrorMessage('Invalid phone number format (10 digits only)');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    // Clear error message if validation passes
    setErrorMessage('');
    
    axios.post("http://localhost:4000", {
      name,
      email,
      number,
      message,
    })
      .then(() => {
        setSuccessMessage('Email sent successfully');
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    
      })
      .catch((error) => {
        setErrorMessage('Error sending email');
        setSuccessMessage('');
        console.error("Failure", error);
      });
  }

  return (
    <>
      <div className="bg-image" style={{
        backgroundImage: `url('./img/r11.gif')`,
        backgroundSize: 'cover',
      }}>
        <div className="text-white text-center">
          <p className="p-5 head1 fs-1">Contact</p>
        </div>
      </div>

      <div className="container ">
      
        <div className="row p-2 justify-content-around ">
          <div className="col-md-5 col-sm-12 p-4 text-start rounded "><img src="./img/panther.png" height="400px" width="400px" alt="panther" /></div>
          <div className="col-md-5 col-sm-12 p-5 text-start shadow-lg rounded">
          <div className="mb-3">
              <label className="h5">Name :</label>
              <input className="form-control" type="text"
               value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="h5">Email :</label>
              <input className="form-control" type="email"
               value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="h5">Number :</label>
              <input className="form-control" type="tel"
              value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter your phone number" required />
            </div>

            <div className="mb-3">
              <label className="h5">Message :</label>
              <textarea className="form-control" rows="3"
              value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message" required />
            </div>


            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill"
                onClick={sendMail}
              >
                Submit
              </button>
            </div>

            {/* Display success or error message */}
            {successMessage && <div className="text-success mt-3">{successMessage}</div>}
            {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
          </div>
        </div>
    
      </div>
      
    </>
  );
}

export default Contact;
