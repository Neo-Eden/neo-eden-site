import { useState, useEffect } from 'react';
import neoEdenLogo from '../assets/neo-eden.svg';
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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
          <img src={neoEdenLogo} alt="" className="navbar__logo-symbol" />
          <span className="navbar__logo-separator" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Neo Eden</span>
            <span className="navbar__logo-subtitle">Digital Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeSection === href.slice(1) ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
          <a href="#contato" className="btn-primary btn-glow navbar__cta">Fale Conosco</a>
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
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          ))}
          <a href="#contato" className="btn-primary btn-glow" onClick={handleLinkClick}>Fale Conosco</a>
        </div>
      </div>
    </nav>
  );
}
