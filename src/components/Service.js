import PageTitle from './PageTitle';
function Service(){
    return(<>
     <PageTitle title="Service" />
       <section id="services" className="services section light-background mt-5">

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
    </>);
}
export default Service