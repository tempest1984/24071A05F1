import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer surface">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} EduSphere 24071A5F1. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
