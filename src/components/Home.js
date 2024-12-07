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
      <h1>Innovative Solutions for Every Challenge</h1>
      <p>Collaborate with experts who turn your business vision into outstanding results.</p>

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

        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        <p>
            At Sigma Tech, we are dedicated to delivering innovative solutions that help businesses achieve their goals. With years of experience in the industry, we understand the unique challenges that companies face and work tirelessly to create strategies that bring success.
        </p>
        <ul>
            <li><i class="bi bi-check2-circle"></i> <span>Providing top-notch services tailored to meet client needs.</span></li>
            <li><i class="bi bi-check2-circle"></i> <span>Delivering results through strategic collaboration and advanced technology.</span></li>
            <li><i class="bi bi-check2-circle"></i> <span>Committed to building long-term relationships with our partners.</span></li>
        </ul>
    </div>

    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <p>
            Our team of skilled professionals is passionate about solving complex problems and turning innovative ideas into successful projects. Whether it's digital transformation, software development, or custom solutions, Sigma Tech is your trusted partner in achieving business excellence.
        </p>
        <a href="/about" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
    </div>


    </div>

  </div>

</section>


<section id="services" className="services section light-background">

<div class="container section-title" data-aos="fade-up">
    <h2>Our Services</h2>
    <p>We provide tailored solutions to help your business grow, with a focus on innovation, efficiency, and customer satisfaction.</p>
</div>

    <div className="container">

      <div className="row gy-4">

      <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="500">
    <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-lightbulb icon"></i></div>
        <h4><span className="stretched-link">Creative Ideas</span></h4>
        <p>We bring innovative and tailored solutions to drive your business forward.</p>
    </div>
</div>

<div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="600">
    <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-gear icon"></i></div>
        <h4><span className="stretched-link">Technical Support</span></h4>
        <p>Providing reliable and round-the-clock technical support for all your needs.</p>
    </div>
</div>

<div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="700">
    <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-graph-up icon"></i></div>
        <h4><span className="stretched-link">Business Growth</span></h4>
        <p>Empowering your business with strategies that maximize growth and efficiency.</p>
    </div>
</div>

<div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="800">
    <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-cloud-arrow-down icon"></i></div>
        <h4><span className="stretched-link">Cloud Solutions</span></h4>
        <p>Streamlining operations with secure and scalable cloud-based solutions.</p>
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

      <h3>Our Expertise Defines Excellence</h3>
        <p className="fst-italic">
            At SigmaTech, we combine innovation, experience, and commitment to deliver exceptional solutions. Our diverse skill set empowers businesses to achieve their goals with precision and efficiency.
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