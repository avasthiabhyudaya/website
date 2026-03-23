import React from 'react';
import styled from 'styled-components';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/avasthiabhyudaya',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhyudaya-avasthi-633900157/',
  },
  {
    label: 'Quora',
    href: 'https://www.quora.com/profile/Abhyudaya-Avasthi',
  },
];

function Contact() {
  return (
    <ContactStyled id="contact" className="section">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-glow" />
          <span className="section-label">Contact</span>
          <h2>Let's work together</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
          <a
            href="mailto:avasthiabhyudaya@gmail.com"
            className="contact-email"
          >
            avasthiabhyudaya@gmail.com
          </a>
          <div className="contact-socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.label}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12l8-8M4 4h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; built by Abhyudaya Avasthi
          </p>
        </div>
      </footer>
    </ContactStyled>
  );
}

const ContactStyled = styled.section`
  .contact-inner {
    text-align: center;
    padding: 80px 0;
    position: relative;

    .contact-glow {
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .section-label {
      display: block;
      font-size: 0.85rem;
      color: var(--accent-light);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
      font-family: var(--font-mono);
      position: relative;
    }

    h2 {
      margin-bottom: 20px;
      position: relative;
    }

    .contact-description {
      font-size: 1.05rem;
      max-width: 480px;
      margin: 0 auto 32px;
      position: relative;
    }

    .contact-email {
      display: inline-block;
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      font-weight: 600;
      color: var(--text-primary);
      position: relative;
      padding-bottom: 4px;
      border-bottom: 2px solid var(--accent);
      transition: all var(--transition-base);

      &:hover {
        color: var(--accent-light);
      }
    }

    .contact-socials {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 48px;
      position: relative;

      .social-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.9rem;
        color: var(--text-tertiary);
        transition: all var(--transition-base);
        font-weight: 500;

        &:hover {
          color: var(--accent-light);
        }
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border);
    padding: 24px 0;

    p {
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-tertiary);
    }
  }
`;

export default Contact;
