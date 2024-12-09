import PageTitle from './PageTitle';
function About(){
    return(
        <>
         <PageTitle title="About" />
         <section id="about" className="about section mt-5">

<div className="container section-title" data-aos="fade-up">
  <h2>About Us</h2>
</div>

<div className="container">

  <div className="row gy-4">

  <div className="col-lg-12 content" data-aos="fade-up" data-aos-delay="100">
  <p>
    Sigmatech IT Company is a leading technology solutions provider dedicated to empowering businesses with innovative IT
    services and cutting-edge solutions. Our mission is to drive digital transformation and foster growth for our clients.
  </p>
  <ul>
    <li>
      <i className="bi bi-check2-circle"></i>
      <span>Comprehensive IT services tailored to meet diverse business needs.</span>
    </li>
    <li>
      <i className="bi bi-check2-circle"></i>
      <span>Expert solutions in software development, cloud computing, and cybersecurity.</span>
    </li>
    <li>
      <i className="bi bi-check2-circle"></i>
      <span>Dedicated support to ensure seamless integration and operational efficiency.</span>
    </li>
  </ul>
</div>


   

  </div>

</div>

</section>
        </>
    )
}
export default About