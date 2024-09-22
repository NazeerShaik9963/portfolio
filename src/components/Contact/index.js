import React, { useState } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaLocationArrow } from 'react-icons/fa'; // Correct import

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus('Submitting...');
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:nazunazeer487@gmail.com" className="contact-link">nazunazeer487@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/nazeer-shaik-8a3b6a221" target="_blank" rel="noopener noreferrer" className="contact-link"><FaLinkedin /> linkedin.com/in/nazeer-shaik-8a3b6a221</a></p>
        <p>GitHub: <a href="https://github.com/NazeerShaik9963" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGithub /> github.com/NazeerShaik9963</a></p>
        <p><FaLocationArrow /> Location: Hyderabad, India</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Get in Touch</h3>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`form-input ${formErrors.name ? 'error' : ''}`}
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`form-input ${formErrors.email ? 'error' : ''}`}
          />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className={`form-input ${formErrors.message ? 'error' : ''}`}
          ></textarea>
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  );
};

export default Contact;
