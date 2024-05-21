import React from 'react'
import {Link} from 'react-router-dom'
import Digital from '../Digital'

const Digitalmarket = () => {
  return (
    <>
    <div className="gx-5">
      <div className="bg-image  mt-1"
        style={{
          backgroundImage: `url('./img/digital1.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">DIGITAL MARKETING</p>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="py-5 text-start">We provide web design services that assist businesses in enhancing their online performance through digital marketing and numerous techniques. Your web audience can be found, expanded, and converted with the help of our devoted team of internet marketers. It relates to recent technologies like Social Media Optimisation (SMO), Search Engine Optimisation (SEO), and Social Media Marketing (SMO). It involves the use of many techniques and platforms to analyse the market and determine what is useful or not—typically in real time. Our programmes drive sales, increase traffic, and increase return on investment. The advertising of goods or services online is known as digital marketing. It saves money and is safe. You may reach, grow, and convert your online audience with the help of our dedicated staff.</p>
 <div class="container overflow-hidden">
 
<div class=" flex-wrap justify-content-center align-items-center">
        <p className="h2 p-4">Web development Services provided by kanthariya Technologies</p>
        <p>Kanthariya Technologies is a leading digital marketing agency that offers a wide range of services to help businesses improve their online presence and reach their target audience effectively. With a team of exharienced professionals and a proven track record of success, Obicule Technologies is committed to deliharing top-notch digital marketing solutions to clients across various industries.</p>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
  {Digital.map((datas) => (
    <div key={datas.id} className="col-md-12 col-lg-5 m-3">
      {/* <Link to={`/digit/${datas.id}`} className="text-decoration-none"> */}
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

export default Digitalmarket
