import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Neo Eden">
          <svg className="navbar__logo-symbol" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 30V6L30 30V6" stroke="#1CE07A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="6" cy="6" r="3" fill="#1CE07A" opacity="0.4"/>
          </svg>
          <span className="navbar__logo-separator" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Neo Eden</span>
            <span className="navbar__logo-subtitle">Digital Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__link">{label}</a>
          ))}
          <a href="#contato" className="btn-primary navbar__cta">Fale Conosco</a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          id="mobile-menu-toggle"
        >
          <span /><span /><span />
        </button>

        {/* Mobile Overlay */}
        <div className={`navbar__mobile-overlay ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__link" onClick={handleLinkClick}>{label}</a>
          ))}
          <a href="#contato" className="btn-primary" onClick={handleLinkClick}>Fale Conosco</a>
        </div>
      </div>
    </nav>
  );
}
