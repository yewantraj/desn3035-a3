import React from 'react';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="d-flex align-items-center">
                <span className="sitename">sigma tech</span>
              </Link>
              <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>Toronto, ON M5H 2N2</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p className="email">
                  <strong>Email:</strong>
                  <span>
                    <a href="mailto:sigmatech@gmail.com">sigmatech@gmail.com</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

           

            <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>
                Stay connected with us on social media to get the latest updates, insights, and exclusive content. Join our growing community and be part of the journey!
            </p>
              <div className="social-links d-flex">
                <a target='_blank' href="https://www.facebook.com/">
                  <i className="bi bi-facebook"></i>
                </a>
                <a target='_blank' href="https://www.instagram.com/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a target='_blank' href="https://www.linkedin.com/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">SigmaTech</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
