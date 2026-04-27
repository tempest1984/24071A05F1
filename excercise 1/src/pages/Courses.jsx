import { Link } from 'react-router-dom';
import { Clock, Star, PlayCircle } from 'lucide-react';
import './Courses.css';

const COURSES_DATA = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    instructor: 'Sarah Drasner',
    duration: '4h 30m',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Frontend']
  },
  {
    id: 2,
    title: 'Fullstack Next.js',
    instructor: 'Lee Robinson',
    duration: '6h 15m',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Node']
  },
  {
    id: 3,
    title: 'UI/UX Masterclass',
    instructor: 'Gary Simon',
    duration: '5h 45m',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Design', 'Figma']
  }
];

const Courses = () => {
  return (
    <div className="courses-page animate-fade-in">
      <div className="courses-header">
        <h1>Explore Courses</h1>
        <p>Discover new skills with our premium learning paths</p>
      </div>

      <div className="courses-grid">
        {COURSES_DATA.map((course) => (
          <div key={course.id} className="course-card surface">
            <div className="course-image-wrapper">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-overlay">
                <Link to={`/course/${course.id}`} className="play-button">
                  <PlayCircle size={48} />
                </Link>
              </div>
            </div>
            
            <div className="course-content">
              <div className="course-tags">
                {course.tags.map(tag => (
                  <span key={tag} className="badge badge-success">{tag}</span>
                ))}
              </div>
              <Link to={`/course/${course.id}`}>
                <h3>{course.title}</h3>
              </Link>
              <p className="instructor">by {course.instructor}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <Star size={16} className="star-icon" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
