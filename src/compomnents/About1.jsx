import React from 'react';

const About1 = () => {
  return (
    <>
      <div className="container gx-3">
        <div className="row m-3 ">
        <div className="col-md-6 align-items-center col-sm-12 d-flex justify-content-center"  style={{backgroundColor:'lightblue', height:'80vh',}}>
  <img
    src="./img/about1.jpg"
    height="300px"
    width="300px"
  />
</div>
          <div className="col-md-5 col-sm-12 p-5  text-white text-start " style={{backgroundColor:'darkblue'}}>
           <p className="h5">  Ensuring your Success</p>
            <p className="h1">Vision and Mission</p>
            <p className="fs-6">
          

<span className="h5">Vision</span> - Furthering digital transformation with a vision of disrupting technology through seamless development solutions.  </p>
<p><span className="h5">Mission</span> - To create an unparalleled digital space for catering to the software development needs of clients worldwide  </p>
          
          </div>
         
        </div>
      </div>
    </>
  );
};

export default About1;
