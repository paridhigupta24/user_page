import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                <Link to='/'>ABC</Link>
                <a href="index.html">
                  <h1>ABC</h1>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="flaticon-calendar"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Sat, 24 Hours</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="flaticon-call"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>Call Us</h3>
                      <p>8439xyz</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="flaticon-send-mail"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>Email Us</h3>
                      <p>xyz@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Billings</Link>
                <Link to="/portfolio" className="nav-item nav-link">My health</Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <Link to="/blog" className="dropdown-item">Blog Page</Link>
                    <Link to="/single" className="dropdown-item">Single Page</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </nav>
        </div>
        <div className="ml-auto">
          <Link to="/book" className="btn">Book Appointment</Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
