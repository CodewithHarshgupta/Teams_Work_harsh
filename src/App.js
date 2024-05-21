
import './App.css';

import Navbar from './compomnents/Navbar'
import Footer from './compomnents/Footer'
import NavbarTab from './compomnents/NavbarTab'
import Contact from './compomnents/Contact'
import Service from './compomnents/Service'
import Aboutss from './compomnents/Aboutss'
import FontPage from './compomnents/Fontpage'
import Android from './compomnents/Android'
import Digitalmarket from './compomnents/Digitalmarket'
import Softwaredeveloper  from './compomnents/Softwaredeveloper'
import Webdesign from './compomnents/Webdesign'
import Webdeveloper from './compomnents/Webdeveloper'
import Softwaretsting from './compomnents/Softwaretsting'
import React,{useState,useEffect} from 'react';
import {  Route ,Routes} from 'react-router-dom';
// import Webpage from './compomnents/Webpage'
const  App=() => {
  const[loading,setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() =>{
      setLoading(false);
    },2000);
    return () =>clearTimeout(timer);
  },[]);
  return (
    <div className="App">
{loading ? (
  <p  className="loading">Loading...</p>
):(

  <>
      <Navbar />
      <NavbarTab/>
      <Routes>
    
          <Route path="/" element={<FontPage />} />
          <Route path="/about" element={<Aboutss/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/android" element={<Android />} />
          {/* <Route path="/android/:id" element={<Webpage/>} /> */}
        <Route path="/digit" element={<Digitalmarket />} />
        {/* <Route path="/digit/:id" element={<Webpage/>} /> */}
          <Route path="/developer" element={<Softwaredeveloper />} />
          {/* <Route path="/developer/:id" element={<Webpage/>} /> */}
  <Route path="/tsting" element={<Softwaretsting />} />
  {/* <Route path="/tsting/:id" element={<Webpage/>} /> */}
  <Route path="/design" element={<Webdesign />} />
  {/* <Route path="/design/:id" element={<Webpage/>} /> */}
  <Route path="/web" element={<Webdeveloper />} />
  {/* <Route path="/web/:id" element={<Webpage/>} /> */}
      </Routes>
      <Footer/>
   </>)}



     </div>
  );
}

export default App;
