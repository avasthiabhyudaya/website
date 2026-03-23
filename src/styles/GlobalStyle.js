import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --bg-primary: #0a0a0b;
    --bg-secondary: #111113;
    --bg-tertiary: #1a1a1f;
    --bg-card: #16161a;
    --bg-card-hover: #1e1e24;

    --text-primary: #f0f0f0;
    --text-secondary: #a0a0b0;
    --text-tertiary: #6b6b80;

    --accent: #6366f1;
    --accent-light: #818cf8;
    --accent-glow: rgba(99, 102, 241, 0.15);
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);

    --border: rgba(255, 255, 255, 0.06);
    --border-hover: rgba(255, 255, 255, 0.12);

    /* Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

    /* Spacing */
    --section-padding: 120px;
    --container-width: 1100px;

    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-sans);
    background-color: var(--bg-primary);
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--bg-tertiary);
    border-radius: 3px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700; }
  h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); }
  h3 { font-size: clamp(1.2rem, 2.5vw, 1.5rem); }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul { list-style: none; }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  /* Utility animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .section {
    padding: var(--section-padding) 0;
    position: relative;
  }

  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  @media (max-width: 768px) {
    :root {
      --section-padding: 80px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --section-padding: 60px;
    }
  }
`;

export default GlobalStyle;
