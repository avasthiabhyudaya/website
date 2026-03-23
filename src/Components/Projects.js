import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../images/portImages/crypto.jpeg';
import img2 from '../images/portImages/javascript.jpeg';
import img3 from '../images/portImages/snake.png';
import img4 from '../images/portImages/reddit.png';
import img5 from '../images/portImages/recipe.png';
import img6 from '../images/portImages/extension.png';
import img7 from '../images/portImages/swipe.jpeg';

const PROJECTS = [
  {
    id: 1,
    title: 'Paisa Coin',
    description: 'A custom cryptocurrency built with Solidity and Ethereum Smart Contracts, deployed on the Ropsten test network.',
    tags: ['Solidity', 'Ethereum', 'Web3'],
    image: img1,
    github: 'https://github.com/avasthiabhyudaya/Paisa-coin',
    live: 'https://ropsten.etherscan.io/address/0xEB63dF241EE47c2B6076BeA853e03A92F7261dc2',
    category: 'Blockchain',
  },
  {
    id: 2,
    title: '30 Days, 30 JS Projects',
    description: 'A self-imposed challenge building one JavaScript project daily to sharpen fundamentals and explore creative coding.',
    tags: ['JavaScript', 'HTML/CSS', 'Challenge'],
    image: img2,
    github: 'https://github.com/avasthiabhyudaya/30-days-30-JS-projects',
    category: 'JavaScript',
  },
  {
    id: 3,
    title: 'Eye Swipe',
    description: 'Images that follow your gaze direction using WebGazer API for real-time eye tracking in the browser.',
    tags: ['JavaScript', 'WebGazer API', 'CV'],
    image: img7,
    github: 'https://github.com/avasthiabhyudaya/Dont-look-at',
    live: 'https://avasthiabhyudaya.github.io/Dont-look-at/',
    category: 'JavaScript',
  },
  {
    id: 4,
    title: 'Snake Game',
    description: 'Classic snake game with smooth physics and collision detection, implemented in vanilla JavaScript.',
    tags: ['JavaScript', 'Canvas', 'Game Dev'],
    image: img3,
    github: 'https://github.com/avasthiabhyudaya/snake-game-',
    live: 'https://avasthiabhyudaya.github.io/snake-game-/',
    category: 'JavaScript',
  },
  {
    id: 5,
    title: 'Reddit Search',
    description: 'A search application using ES6 modules and Parcel bundler, querying the Reddit API for real-time results.',
    tags: ['JavaScript', 'Reddit API', 'ES6'],
    image: img4,
    github: 'https://github.com/avasthiabhyudaya/reddit-search',
    live: 'https://avasthiabhyudaya.github.io/reddit-search/',
    category: 'JavaScript',
  },
  {
    id: 6,
    title: 'Food Recipe App',
    description: 'Search recipes by ingredients using vanilla JS with a clean UI and real-time API integration.',
    tags: ['JavaScript', 'API', 'Vanilla JS'],
    image: img5,
    github: 'https://github.com/avasthiabhyudaya/food-recipe-app',
    live: 'https://avasthiabhyudaya.github.io/food-recipe-app/',
    category: 'JavaScript',
  },
  {
    id: 7,
    title: 'Go Corona Go',
    description: 'Chrome extension that filters out COVID-related articles from your browsing experience.',
    tags: ['Chrome Extension', 'JavaScript'],
    image: img6,
    github: 'https://github.com/avasthiabhyudaya/coronavirus-blocker',
    category: 'JavaScript',
  },
];

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <ProjectsStyled id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2>Selected work</h2>
        </div>

        <div className="filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.section`
  .section-header {
    margin-bottom: 40px;

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

  .filter-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    .filter-btn {
      padding: 8px 20px;
      font-size: 0.85rem;
      color: var(--text-tertiary);
      border: 1px solid var(--border);
      border-radius: 100px;
      transition: all var(--transition-base);
      font-weight: 500;

      &:hover {
        color: var(--text-secondary);
        border-color: var(--border-hover);
      }

      &.active {
        color: white;
        background: var(--accent);
        border-color: var(--accent);
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition: all var(--transition-base);

    &:hover {
      border-color: var(--border-hover);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

      .card-overlay { opacity: 1; }
      .card-image img { transform: scale(1.05); }
    }
  }

  .card-image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(10, 10, 11, 0.7);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-base);
    }

    .card-links {
      display: flex;
      gap: 12px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: white;
        transition: all var(--transition-fast);

        &:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: scale(1.1);
        }
      }
    }
  }

  .card-body {
    padding: 24px;

    .card-title {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    .card-description {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .card-tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;

      .tag {
        padding: 4px 12px;
        font-size: 0.75rem;
        color: var(--accent-light);
        background: var(--accent-glow);
        border-radius: 100px;
        font-family: var(--font-mono);
        letter-spacing: 0.02em;
      }
    }
  }
`;

export default Projects;
