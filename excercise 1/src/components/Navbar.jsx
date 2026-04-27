import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, UserCircle, PlayCircle, BarChart, Mail, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar surface">
      <div className="navbar-brand">
        <PlayCircle size={28} className="brand-icon" />
        <span className="brand-name">EduSphere</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <BookOpen size={20} />
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <BarChart size={20} />
            <span>Progress</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Mail size={20} />
            <span>Contact</span>
          </NavLink>
        </li>
        
        {isAuthenticated ? (
          <li>
            <button onClick={handleLogout} className="nav-link logout-btn">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <UserCircle size={20} />
              <span>Login</span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
