
import 'animate.css';
import './About.css';

const About = () => {
  return (
    <div className=' p-3 m-3 bg-body-tertiary rounded animate__animated animate__fadeInLeft'>
      <div className='container'>
        <div className='row'>
          <div className='fs-1 p-3 bg-highlight text-center'>About</div>
          <div className='col-md-6'>
            <div className='d-flex flex-column justify-content-center about-content'>
              <div className="fade-in-left">
              <p className='h1' style={{ color: '#342D73' }}>
                Who Are We?
              </p>
              <p className='fs-6 py-2 text-start'>
              Welcome to Kanthariya Technologies, where tradition meets cutting-edge technology in a century-long legacy of excellence. Since 1922, we have been pioneering success stories across diverse industries, including Kanthariya Textile (1950), Kanthariya Automobile (2010), Kanthariya Mills (1990), Vanshika Creation (2010), and more.
              </p>

              </div>
              
            </div>
          </div>
          <div className='col-md-6 align-items-center about-image'>
            <img src="./img/about.jpg" alt="logo" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
