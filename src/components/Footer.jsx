import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 30V6L30 30V6" stroke="#1CE07A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="6" r="3" fill="#1CE07A" opacity="0.4"/>
              </svg>
              <span className="footer__logo-name">Neo Eden</span>
            </div>
            <p className="footer__brand-desc">
              Digital studio criando experiências extraordinárias. Do jardim do vazio, fazemos o futuro florescer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer__column-title">Navegação</h4>
            <div className="footer__links">
              <a href="#servicos" className="footer__link">Serviços</a>
              <a href="#sobre" className="footer__link">Sobre</a>
              <a href="#portfolio" className="footer__link">Portfólio</a>
              <a href="#processo" className="footer__link">Processo</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__column-title">Serviços</h4>
            <div className="footer__links">
              <a href="#servicos" className="footer__link">Branding</a>
              <a href="#servicos" className="footer__link">Web Dev</a>
              <a href="#servicos" className="footer__link">UI/UX</a>
              <a href="#servicos" className="footer__link">Marketing</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__column-title">Contato</h4>
            <div className="footer__links">
              <a href="mailto:contato@neo-eden.com.br" className="footer__link">Email</a>
              <a href="#contato" className="footer__link">Formulário</a>
              <a href="#" className="footer__link">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            © {year} Neo Eden Digital Studio. Todos os direitos reservados.
          </span>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="footer__social" aria-label="Website"><HiOutlineGlobeAlt /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
