import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any question you might have.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info surface">
          <h2>Contact Information</h2>
          <p className="contact-subtext">Reach out to our team using the details below.</p>
          
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
      </div>
    </div>
  );
};

export default Contact;
