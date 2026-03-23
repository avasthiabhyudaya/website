import React from 'react';
import styled from 'styled-components';

const STATS = [
  { value: '7+', label: 'Projects Built' },
  { value: '2+', label: 'Internships' },
  { value: 'B.Tech', label: 'CS & CE, MIT Manipal' },
];

function About() {
  return (
    <AboutStyled id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2>A bit about me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science graduate from Manipal Institute of Technology
              with a strong foundation in programming, math, and cross-platform development.
              I'm driven by curiosity and a passion for building things that matter.
            </p>
            <p>
              My interests span web development, artificial intelligence, and game development.
              I enjoy creating clean, user-focused applications and diving deep into
              challenging technical problems. When I'm not coding, you'll find me
              on the chess board or writing about technology and business.
            </p>
            <a
              href="https://drive.google.com/file/d/1YwEx5m_7LDISwjCjZ965xX_m3iMKyWPy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12l8-8M4 4h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="about-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.section`
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

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 64px;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .about-text {
    p {
      margin-bottom: 20px;
      font-size: 1.05rem;
      line-height: 1.8;
    }

    .cv-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      color: var(--accent-light);
      font-weight: 500;
      font-size: 0.95rem;
      transition: all var(--transition-base);

      &:hover {
        color: var(--text-primary);
        gap: 12px;
      }
    }
  }

  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .stat-card {
    padding: 24px 28px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all var(--transition-base);

    &:hover {
      border-color: var(--border-hover);
      background: var(--bg-card-hover);
    }

    .stat-value {
      display: block;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-tertiary);
    }

    @media (max-width: 768px) {
      flex: 1;
      min-width: 140px;
      padding: 20px;
    }
  }
`;

export default About;
