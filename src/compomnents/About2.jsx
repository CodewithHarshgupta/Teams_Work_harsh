import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="container " >
      <div className="row">
        {/* Background Image */}
        <div className="position-relative  col-md-12 col-sm-4 ">
          <img
            src='./img/itabout2.jpg'
            alt="background"
            style={{
              height: '70vh',
             
            }}
          />
          <div
          className="col-md-5 bg-light position-absolute  border p-2" 
        style={{top:30,left:0}}
        >
          
          <p className="text-start p-4 " >
          <p className="h5">Affordability</p>

<p className="fs-6">High-quality services at the most affordable prices.</p>

<p className="h5">Innovation</p>
<p className="fs-6">Embrace the future with solutions staying ahead of industry trends.
Customer-Centric Approach.</p>

<p className="fs-6">Your success is our priority-exceeding expectations every time.</p>
          </p>
        </div>
        </div>        
      </div>
    </div>
  );
};

export default AboutUsSection;
