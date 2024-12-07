import {React,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Image from './assets/images/hero-img.png';
import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';
function Home(){
  useEffect(() => {
   
    const lightbox = GLightbox({
      selector: '.glightbox',  
    });

    return () => {
      lightbox.destroy();
    };
  }, []); 
 
    return (
     <>
       <main className="main">

<section id="hero" className="hero section dark-background">

  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
        <h1>Better Solutions For Your Business</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=6stlCkUDG_s" className="glightbox btn-watch-video d-flex align-items-center" data-lightbox="gallery" data-title="My Video">
    <i className="bi bi-play-circle"></i><span>Watch Video</span>
  </a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
        <img src={Image} loading='lazy' className="img-fluid animated" alt=""/>
      </div>
    </div>
  </div>

</section>



<section id="about" className="about section">

 
  <div className="container section-title" data-aos="fade-up">
    <h2>About Us</h2>
  </div>

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
        </ul>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <Link to="/about" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
      </div>

    </div>

  </div>

</section>


<section id="services" className="services section light-background">

    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div className="container">

      <div className="row gy-4">

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item position-relative">
            <div className="icon"><i className="bi bi-cast icon"></i></div>
            <h4><span className="stretched-link">Lorem Ipsum</span></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="service-item position-relative">
            <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
            <h4><span className="stretched-link">Sed ut perspici</span></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item position-relative">
            <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
            <h4><span className="stretched-link">Magni Dolores</span></h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div className="service-item position-relative">
            <div className="icon"><i className="bi bi-broadcast icon"></i></div>
            <h4><span className="stretched-link">Nemo Enim</span></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>

      </div>

    </div>

  </section>



<section id="skills" className="skills section">

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row">

      <div className="col-lg-6 d-flex align-items-center">
        <img src={Image} loading='lazy' className="img-fluid" alt=""/>
      </div>

      <div className="col-lg-6 pt-4 pt-lg-0 content">

        <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="skills-content skills-animation">
      <div className="progress mb-3">
        <span className="skill">
          <span>HTML</span>
          <i className="val">100%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow={100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="progress mb-3">
        <span className="skill">
          <span>CSS</span>
          <i className="val">90%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={90}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="progress mb-3">
        <span className="skill">
          <span>JavaScript</span>
          <i className="val">75%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow={75}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="progress mb-3">
        <span className="skill">
          <span>Photoshop</span>
          <i className="val">55%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "55%" }}
            aria-valuenow={55}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>


      </div>
    </div>

  </div>

</section>
















<section id="call-to-action" className="call-to-action section dark-background">

    <img src="assets/img/cta-bg.jpg" alt=""/>

    <div className="container">

      <div className="row" data-aos="zoom-in" data-aos-delay="100">
        <div className="col-xl-9 text-center text-xl-start">
          <h3>Call To Action</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-xl-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="tel:9800000000">Call To Action</a>
        </div>
      </div>

    </div>

  </section>


</main>

     </>

    );
}
export default Home