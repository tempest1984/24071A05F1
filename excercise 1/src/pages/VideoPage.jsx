import { useParams, Link } from 'react-router-dom';
import { PlayCircle, CheckCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import './VideoPage.css';

const LESSONS = [
  { id: 1, title: 'Introduction to the Course', duration: '5:20', completed: true },
  { id: 2, title: 'Setting Up Your Environment', duration: '12:45', completed: true },
  { id: 3, title: 'Core Concepts & Theory', duration: '18:30', completed: false, active: true },
  { id: 4, title: 'Building the First Component', duration: '25:10', completed: false },
  { id: 5, title: 'State and Props deep dive', duration: '20:15', completed: false },
];

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div className="video-page animate-fade-in">
      <div className="video-page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Courses</span>
        </Link>
      </div>

      <div className="video-layout">
        <div className="main-content-area">
          <div className="video-player-container surface">
            <div className="video-placeholder">
              <PlayCircle size={64} className="play-icon" />
              <p>Lesson 3: Core Concepts & Theory</p>
            </div>
          </div>
          
          <div className="lesson-details surface">
            <h2>Core Concepts & Theory</h2>
            <div className="instructor-info">
              <div className="avatar">SD</div>
              <div>
                <p className="instructor-name">Sarah Drasner</p>
                <p className="instructor-title">Senior Engineer</p>
              </div>
            </div>
            <p className="lesson-description">
              In this lesson, we will dive deep into the fundamental theories that power modern web applications. 
              We'll cover how the virtual DOM works, reconciliation, and the component lifecycle.
            </p>
            
            <div className="lesson-actions">
              <button className="btn btn-primary">
                <MessageSquare size={18} />
                Ask a Question
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="playlist surface">
            <h3>Course Content</h3>
            <p className="playlist-progress">2/5 lessons completed</p>
            
            <ul className="lesson-list">
              {LESSONS.map((lesson) => (
                <li key={lesson.id} className={`lesson-item ${lesson.active ? 'active' : ''}`}>
                  <div className="lesson-status">
                    {lesson.completed ? (
                      <CheckCircle size={20} className="status-icon completed" />
                    ) : lesson.active ? (
                      <PlayCircle size={20} className="status-icon active" />
                    ) : (
                      <div className="status-icon pending" />
                    )}
                  </div>
                  <div className="lesson-info">
                    <h4>{lesson.title}</h4>
                    <span>{lesson.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
