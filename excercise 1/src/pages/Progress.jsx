import { Trophy, Target, Clock, BookOpen } from 'lucide-react';
import './Progress.css';

const Progress = () => {
  return (
    <div className="progress-page animate-fade-in">
      <div className="progress-header">
        <h1>Your Learning Progress</h1>
        <p>Track your achievements and keep up the great work!</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card surface">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)' }}>
            <BookOpen size={24} />
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <p>Courses Enrolled</p>
          </div>
        </div>

        <div className="stat-card surface">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
            <Trophy size={24} />
          </div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Certificates Earned</p>
          </div>
        </div>

        <div className="stat-card surface">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>48h</h3>
            <p>Learning Time</p>
          </div>
        </div>

        <div className="stat-card surface">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>
            <Target size={24} />
          </div>
          <div className="stat-info">
            <h3>85%</h3>
            <p>Avg Completion</p>
          </div>
        </div>
      </div>

      <div className="current-courses surface">
        <h2>In Progress</h2>
        
        <div className="progress-list">
          <div className="progress-item">
            <div className="progress-info">
              <div>
                <h4>Advanced React Patterns</h4>
                <p>12 / 24 lessons completed</p>
              </div>
              <span className="percentage">50%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '50%', background: 'var(--primary)' }}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <div>
                <h4>UI/UX Masterclass</h4>
                <p>4 / 50 lessons completed</p>
              </div>
              <span className="percentage">8%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '8%', background: 'var(--warning)' }}></div>
            </div>
          </div>
          
          <div className="progress-item">
            <div className="progress-info">
              <div>
                <h4>Fullstack Next.js</h4>
                <p>38 / 40 lessons completed</p>
              </div>
              <span className="percentage">95%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '95%', background: 'var(--success)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
