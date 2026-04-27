import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any question you might have.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info surface">
          <h2>Contact Information</h2>
          <p className="contact-subtext">Fill up the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
              <Phone className="info-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <Mail className="info-icon" />
              <span>support@edusphere.com</span>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <span>123 Learning Ave, Tech District, CA 90210</span>
            </div>
          </div>
        </div>

        <form className="contact-form surface" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="input-field" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="input-field" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="input-field" 
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="input-field textarea" 
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
