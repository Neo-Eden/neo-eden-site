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
        <div className="footer-cols reveal reveal-stagger">
          <div className="fcol fcol-brand">
            <div className="row">
              <img src={logoMark} alt="" />
              <span className="w">
                Neo <span className="e">Eden</span>
              </span>
            </div>
            <p>
              Tecnologia sob medida para empresas que precisam de mais controle, organização e
              eficiência. A gente resolve o que trava a sua operação.
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
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Aplicativos personalizados</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Sistemas sob medida</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Automações e IA</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Dashboards gerenciais</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Área do cliente</a>
            <a href="#solucoes" onClick={(e) => go(e, 'solucoes')}>Integrações e APIs</a>
          </div>
          <div className="fcol">
            <div className="ft">Empresa</div>
            <a href="#portfolio" onClick={(e) => go(e, 'portfolio')}>Projetos</a>
            <a href="#processo" onClick={(e) => go(e, 'processo')}>Como funciona</a>
            <a href="#acompanhar" onClick={(e) => go(e, 'acompanhar')}>Portal do cliente</a>
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
