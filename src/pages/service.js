import React from 'react';
import Menu from './Menu';

function Service() {
  return (
    <div className="wrapper">
        <Menu />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href="">Submit the form to get your bill</a>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="contact wow fadeInUp">
          <div className="container">
            <div className="section-header text-center">
              <p>Submit this form</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form">
                  <div id="success"></div>
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div>
                      <button className="btn" type="submit" id="sendMessageButton">Get bill</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
