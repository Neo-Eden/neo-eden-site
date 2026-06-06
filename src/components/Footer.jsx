import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';
import logoMark from '../assets/logo-n.png';

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <footer className="footer">
      <div className="frame">
        <h2 className="footer-cta reveal">
          Pronto para tirar o gargalo <span className="a">do caminho?</span>
        </h2>
        <p className="footer-sub reveal">
          Comece por uma conversa de diagnóstico gratuita. Sem compromisso, sem enrolação.
        </p>
        <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-primary btn-lg reveal">
          Falar com nossa equipe{' '}
          <span className="arr">
            <Icon name="arrow" size={16} />
          </span>
        </a>

        <div className="footer-cols reveal reveal-stagger">
          <div className="fcol fcol-brand">
            <div className="row">
              <img src={logoMark} alt="" />
              <span className="w">
                Neo <span className="e">Eden</span>
              </span>
            </div>
            <p>
              Empresa de tecnologia. Sistemas, aplicativos, automações e IA sob medida para resolver
              problemas reais de empresas.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/neoedendigital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href="https://wa.me/5522999452824" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
              <a href="mailto:neoedendev2022@gmail.com" aria-label="E-mail">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>
          <div className="fcol">
            <div className="ft">Soluções</div>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Aplicativos</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Sistemas sob medida</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Automações</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Inteligência Artificial</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Integrações</a>
          </div>
          <div className="fcol">
            <div className="ft">Empresa</div>
            <a href="#exemplos" onClick={(e) => go(e, 'exemplos')}>Exemplos</a>
            <a href="#portfolio" onClick={(e) => go(e, 'portfolio')}>Portfólio</a>
            <a href="#acompanhar" onClick={(e) => go(e, 'acompanhar')}>Portal do cliente</a>
            <a href="#processo" onClick={(e) => go(e, 'processo')}>Como trabalhamos</a>
            <a href="#empresa" onClick={(e) => go(e, 'empresa')}>Quem somos</a>
            <a href="#faq" onClick={(e) => go(e, 'faq')}>Dúvidas</a>
          </div>
          <div className="fcol">
            <div className="ft">Contato</div>
            <a href="https://wa.me/5522999452824" target="_blank" rel="noopener noreferrer">WhatsApp (22) 99945-2824</a>
            <a href="mailto:neoedendev2022@gmail.com">neoedendev2022@gmail.com</a>
            <a href="#contato" onClick={(e) => go(e, 'contato')}>Agendar conversa</a>
          </div>
        </div>

        <div className="footer-final">
          <span>© 2026 Neo Eden · Tecnologia que resolve</span>
          <span className="made">Campos dos Goytacazes · RJ</span>
        </div>
      </div>
    </footer>
  );
}
