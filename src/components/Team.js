import React from 'react';
import UserImage from './assets/images/user.avif';
function Team(){
    return(<>
     <section id="team" className="team section mt-5">


<div className="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>At SigmaTech, our team is the backbone of our success. With a blend of innovation, expertise, and dedication, we thrive on transforming ideas into impactful solutions.</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src={UserImage} className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>A visionary leader dedicated to driving innovation, fostering growth, and delivering exceptional results for the organization.</p>
          <div className="social">
            <a href="" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank"> <i className="bi bi-linkedin"></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src={UserImage} className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
          <p>Strategically oversees product development, ensuring innovative solutions meet market needs and deliver exceptional value.</p>
          <div className="social">
          
            <a href="" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank"> <i className="bi bi-linkedin"></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src={UserImage} className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4>William Anderson</h4>
          <span>CTO</span>
          <p>Leads the organization's technological vision, driving innovation and ensuring robust, future-ready tech solutions.</p>
          <div className="social">
           
            <a href="" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank"> <i className="bi bi-linkedin"></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src={UserImage} className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <p>Manages financial records, ensures compliance, and provides accurate insights to support informed decision-making.</p>
          <div className="social">
           
            <a href="" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank"> <i className="bi bi-linkedin"></i> </a>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</section>
    </>);
}
export default Team