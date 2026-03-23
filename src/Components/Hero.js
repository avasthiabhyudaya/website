import React from 'react';
import styled from 'styled-components';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/avasthiabhyudaya',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhyudaya-avasthi-633900157/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Quora',
    href: 'https://www.quora.com/profile/Abhyudaya-Avasthi',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12.738 18.587c-.945-1.97-2.093-3.96-4.26-3.96-.57 0-1.14.12-1.605.465l-.78-1.59c.93-.81 2.19-1.29 3.72-1.29 2.25 0 3.63 1.08 4.71 2.7.36-1.17.54-2.61.54-4.29 0-5.82-1.95-8.94-5.76-8.94-3.78 0-5.73 3.12-5.73 8.94 0 5.85 1.95 8.88 5.73 8.88.87 0 1.62-.15 2.25-.48l1.2 2.46.03-.03c-.99.36-2.16.57-3.48.57C3.555 22.017 0 17.607 0 11.617 0 5.667 3.555 1.257 9.303 1.257c5.7 0 9.24 4.41 9.24 10.36 0 3.18-.78 5.58-2.1 7.35.48.45 1.02.66 1.68.66 1.14 0 1.71-.69 2.1-2.04l1.68.57c-.72 2.67-2.13 4.83-5.04 4.83-1.56 0-2.76-.54-3.81-1.65l-.33-.36z"/>
      </svg>
    ),
  },
];

function Hero() {
  return (
    <HeroStyled id="home">
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="grid-overlay" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Software Developer &amp; Designer
          </div>
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Abhyudaya Avasthi</span>
          </h1>
          <p className="hero-description">
            I build clean, performant software and design thoughtful digital experiences.
            Passionate about web development, AI, and turning complex ideas into elegant solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="hero-socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.4;
    }

    .orb-1 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
      top: -200px;
      right: -100px;
      animation: float 20s ease-in-out infinite;
    }

    .orb-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
      bottom: -100px;
      left: -100px;
      animation: float 25s ease-in-out infinite reverse;
    }

    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    }
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(30px, -30px); }
    66% { transform: translate(-20px, 20px); }
  }

  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .hero-content {
    max-width: 720px;
    animation: fadeInUp 0.8s ease-out;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: var(--accent-glow);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 100px;
    font-size: 0.85rem;
    color: var(--accent-light);
    font-weight: 500;
    margin-bottom: 24px;
    letter-spacing: 0.02em;

    .badge-dot {
      width: 6px;
      height: 6px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
  }

  .hero-title {
    margin-bottom: 24px;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  .gradient-text {
    background: var(--accent-gradient);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 6s ease infinite;
  }

  .hero-description {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    color: var(--text-secondary);
    max-width: 560px;
    margin-bottom: 40px;
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
    flex-wrap: wrap;

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      font-size: 0.95rem;
      font-weight: 500;
      border-radius: 12px;
      transition: all var(--transition-base);
      letter-spacing: 0.01em;
    }

    .btn-primary {
      background: var(--accent);
      color: white;

      &:hover {
        background: var(--accent-light);
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
      }

      svg {
        transition: transform var(--transition-fast);
      }

      &:hover svg {
        transform: translateX(3px);
      }
    }

    .btn-secondary {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--border-hover);

      &:hover {
        border-color: var(--accent);
        color: var(--accent-light);
        background: var(--accent-glow);
      }
    }
  }

  .hero-socials {
    display: flex;
    gap: 12px;

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid var(--border);
      color: var(--text-tertiary);
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--accent);
        color: var(--accent-light);
        background: var(--accent-glow);
        transform: translateY(-2px);
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--accent), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; height: 40px; }
    50% { opacity: 1; height: 50px; }
  }

  @media (max-width: 768px) {
    min-height: 90vh;
    padding-top: 100px;

    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }

    .hero-actions {
      flex-direction: column;

      .btn { justify-content: center; }
    }

    .scroll-indicator { display: none; }
  }
`;

export default Hero;
