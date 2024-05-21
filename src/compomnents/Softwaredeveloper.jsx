import React from 'react'
import Developersof from '../Developersof'
// import {Link} from "react-router-dom"


const softwaredeveloper = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image  mt-1"
        style={{
          backgroundImage: `url('./img/software.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white head1 text-xl-center ">
        <p  className="p-5  fs-1">Software Development</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="py-5 text-start">Planning is the initial phase of software development, during which the objectives and specifications for the software application are established. This includes assessing the project's scope, the intended users, and the resources needed for the development process. The analysis stage then entails collecting and analyzing data in order to pinpoint user requirements and produce a comprehensive project schedule. Use cases, process flows, and other types of documentation are often created during this stage to specify the functional and non-functional requirements of the software programme.</p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-start align-items-center">
        <p className="h2 p-4">Web development Services provided by  Technologies</p>
        <p className="fs-6 p-2">The software application's design must be created in detail. This entails creating the software application's user interface, database schema and other elements. Writing the code and creating the software application in accordance with the design specifications constitute the implementation step. To make sure the software application satisfies the functional and non-functional requirements, this entails developing, testing, and debugging. The software application is then continually updated, supported, and monitored during the maintenance stage to make sure it continues to function properly and meet user needs.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
  {Developersof.map((datas) => (
    <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/developer/${datas.id}`} className="text-decoration-none"> */}
        <div className="border shadow-lg rounded position-relative head1">
          <img src={datas.image} alt={datas.title} className="img-fluid head1 "
           style={{ width: '100%', height:'40vh' }} />
          <div className="overlay p-2">
            <p className='h3 text-warning head1'>{datas.title}</p>
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

export default softwaredeveloper
