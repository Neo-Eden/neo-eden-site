import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';
import logoMark from '../assets/logo-n.png';

export default function FinalCta() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <section className="finalcta">
      <img className="nmark" src={logoMark} alt="" aria-hidden="true" />
      <div className="frame">
        <div className="finalcta-inner reveal">
          <h2 className="finalcta-h">
            Ainda controla parte da sua operação por <span className="a">planilhas, mensagens e
            processos manuais?</span>
          </h2>
          <p className="finalcta-sub">
            Vamos conversar sobre uma solução que faça sentido para o seu negócio.
          </p>
          <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-primary btn-lg">
            Falar com nossa equipe{' '}
            <span className="arr">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
