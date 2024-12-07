import React from 'react';
import {Link, useLocation} from 'react-router-dom';



function Nav() {
  const location = useLocation();
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">SigmaTech</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li>
                <Link to="/service" className={location.pathname === '/service' ? 'active' : ''} >Services</Link>
              </li>
              <li>
                <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link>
              </li>
              
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" to="/contact">
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}

export default Nav;
