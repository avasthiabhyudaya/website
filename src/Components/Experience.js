import React from 'react';
import styled from 'styled-components';

const EXPERIENCE = [
  {
    period: 'May — Jul 2021',
    role: 'Software Developer Intern',
    company: 'Aqua Environmental Consultants',
    description: 'Built the front-end for their web platform, implemented SEO best practices, and developed user information request handling systems.',
  },
  {
    period: 'May — Jul 2019',
    role: 'Front-End Developer Intern',
    company: 'Deutsche Telekom',
    description: 'Worked with client/server architecture, contributed to activity management modules, and gained experience with enterprise-scale development workflows.',
  },
];

const EDUCATION = [
  {
    period: '2018 — 2022',
    degree: 'B.Tech, Computer Science & Communication Engineering',
    school: 'Manipal Institute of Technology',
    detail: 'Manipal Info Sec Team (MIST) · Chess',
  },
  {
    period: '2015 — 2017',
    degree: 'Class XII',
    school: 'Bharati Vidyapeeth English Medium School',
    detail: 'Football · MSTSE Scholar',
  },
  {
    period: '2003 — 2015',
    degree: 'Class X',
    school: "Bishop's School, Camp",
    detail: 'Football · NTSE & IMO Scholar',
  },
];

function Experience() {
  return (
    <ExperienceStyled id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2>Where I've worked &amp; studied</h2>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-category">Work Experience</h3>
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-category">Education</h3>
          <div className="timeline">
            {EDUCATION.map((item) => (
              <div key={item.degree} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-role">{item.degree}</h4>
                  <span className="timeline-company">{item.school}</span>
                  {item.detail && <p className="timeline-description">{item.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.section`
  .section-header {
    margin-bottom: 56px;

    .section-label {
      display: block;
      font-size: 0.85rem;
      color: var(--accent-light);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
      font-family: var(--font-mono);
    }
  }

  .timeline-section {
    &:not(:last-child) {
      margin-bottom: 56px;
    }
  }

  .timeline-category {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 32px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline-item {
    display: flex;
    gap: 24px;

    &:last-child .marker-line {
      display: none;
    }
  }

  .timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6px;
    flex-shrink: 0;

    .marker-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid var(--accent);
      background: var(--bg-primary);
      flex-shrink: 0;
    }

    .marker-line {
      width: 1px;
      flex: 1;
      background: var(--border);
      margin-top: 4px;
    }
  }

  .timeline-content {
    padding-bottom: 40px;

    .timeline-period {
      display: block;
      font-size: 0.8rem;
      color: var(--text-tertiary);
      font-family: var(--font-mono);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }

    .timeline-role {
      font-size: 1.15rem;
      color: var(--text-primary);
      font-weight: 600;
      margin-bottom: 4px;
    }

    .timeline-company {
      display: block;
      font-size: 0.95rem;
      color: var(--accent-light);
      margin-bottom: 10px;
    }

    .timeline-description {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 500px;
    }
  }

  @media (max-width: 480px) {
    .timeline-item {
      gap: 16px;
    }

    .timeline-content {
      padding-bottom: 28px;
    }
  }
`;

export default Experience;
