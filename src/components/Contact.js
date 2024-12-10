import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from 'react-hot-toast';
import PageTitle from './PageTitle';
function Contact(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_t7o8sys",
        "template_smqowtc",
        e.target, 
        "IYDRxNGn02IUvgF0a", 
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };
    return(
        <>
         <PageTitle title="Contact" />
         <section id="contact" className="contact section mt-5">


<div className="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>Contact us for your new website and other tech supports.</p>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-5">

      <div className="info-wrap">
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p><a href="tel:+1 5589 55488 55">+1 5589 55488 55</a></p>
          </div>
        </div>

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p><a href="mailto:something@gmail.com">something@gmail.com</a></p>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div className="col-lg-7">
      <form
        className="php-email-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              id="name-field"
              className="form-control"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              name="email"
              id="email-field"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="form-control"
              name="subject"
              id="subject-field"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              id="message-field"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 text-center">
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>

  </div>

</div>

</section>
        </>
    )
}
export default Contact