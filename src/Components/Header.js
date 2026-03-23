import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <HeaderStyled className={scrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <a href="#home" className="logo" onClick={handleNavClick}>
          AA<span className="logo-dot">.</span>
        </a>

        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: all var(--transition-base);

  &.scrolled {
    padding: 12px 0;
    background: rgba(10, 10, 11, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }

  .header-inner {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;

    .logo-dot {
      color: var(--accent);
    }
  }

  .nav {
    display: flex;
    gap: 32px;

    .nav-link {
      font-size: 0.88rem;
      color: var(--text-secondary);
      font-weight: 500;
      transition: color var(--transition-fast);
      position: relative;

      &:hover {
        color: var(--text-primary);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--accent);
        transition: width var(--transition-base);
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
    z-index: 101;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      border-radius: 2px;
      transition: all var(--transition-base);
    }

    &.open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: flex;
    }

    .nav {
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 11, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-base);

      &.nav-open {
        opacity: 1;
        visibility: visible;
      }

      .nav-link {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Header;
