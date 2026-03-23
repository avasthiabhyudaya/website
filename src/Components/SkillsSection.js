import React from 'react';
import styled from 'styled-components';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'Solidity', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'D3.js', 'styled-components', 'Material-UI'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Firebase', 'Ethereum', 'Chrome Extensions', 'Parcel'],
  },
  {
    category: 'Interests',
    skills: ['Web Development', 'Artificial Intelligence', 'Game Development', 'UI/UX Design'],
  },
];

function SkillsSection() {
  return (
    <SkillsStyled id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2>Technologies &amp; tools</h2>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="group-title">{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .skill-group {
    padding: 28px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all var(--transition-base);

    &:hover {
      border-color: var(--border-hover);
    }

    .group-title {
      font-size: 0.85rem;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 16px;
      font-weight: 500;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      padding: 8px 16px;
      font-size: 0.88rem;
      color: var(--text-primary);
      background: var(--bg-tertiary);
      border: 1px solid var(--border);
      border-radius: 8px;
      transition: all var(--transition-base);
      font-weight: 400;

      &:hover {
        border-color: var(--accent);
        color: var(--accent-light);
        background: var(--accent-glow);
      }
    }
  }
`;

export default SkillsSection;
