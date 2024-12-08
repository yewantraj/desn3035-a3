import React from 'react';
import UserImage from './assets/images/user.avif';
function Team(){
    return(<>
     <section id="team" className="team section mt-5">


<div className="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src={UserImage} className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
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
          <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
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
          <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
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
          <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
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