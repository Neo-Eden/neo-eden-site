import { useEffect, useRef } from 'react';
import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';

function Mockup() {
  const bars = [42, 58, 50, 71, 64, 83, 92];
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="mock-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-url">central.arrobabandalarga.com.br</span>
      </div>
      <div className="mock-body">
        <div className="mock-side">
          <span className="mi on">Visão geral</span>
          <span className="mi">Atendimentos</span>
          <span className="mi">Clientes</span>
          <span className="mi">Automações</span>
          <span className="mi">Financeiro</span>
        </div>
        <div className="mock-main">
          <div className="mock-kpis">
            <div className="mock-kpi">
              <div className="kl">Tickets hoje</div>
              <div className="kv" data-count="128">128</div>
              <div className="kd">−34% manual</div>
            </div>
            <div className="mock-kpi">
              <div className="kl">Resolvidos por IA</div>
              <div className="kv a" data-count="71" data-suffix="%">71%</div>
              <div className="kd">+19 pts</div>
            </div>
            <div className="mock-kpi">
              <div className="kl">Tempo médio</div>
              <div className="kv" data-count="2" data-suffix="m">2m</div>
              <div className="kd">−58%</div>
            </div>
          </div>
          <div className="mock-chart">
            <div className="ct">
              <span>Atendimentos automatizados · 7 dias</span>
              <span className="pill">ao vivo</span>
            </div>
            <div className="bars">
              {bars.map((h, i) => (
                <div key={i} className={'bar' + (i < 4 ? ' dim' : '')} style={{ height: h + '%' }} />
              ))}
            </div>
          </div>
          <div className="mock-rows">
            <div className="mock-row" style={{ '--i': 0 }}>
              <span className="mn">Renovação de plano</span>
              <span className="tag">automático</span>
              <span>00:03</span>
            </div>
            <div className="mock-row" style={{ '--i': 1 }}>
              <span className="mn">2ª via de boleto</span>
              <span className="tag">automático</span>
              <span>00:01</span>
            </div>
            <div className="mock-row" style={{ '--i': 2 }}>
              <span className="mn">Suporte técnico N1</span>
              <span className="tag warn">triagem IA</span>
              <span>00:12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mock-badge">
        <div className="bi">
          <Icon name="check" size={18} />
        </div>
        <div>
          <div className="bt">−40h/semana</div>
          <div className="bs">trabalho manual eliminado</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.classList.add('boot'));
    return () => cancelAnimationFrame(id);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-glow" />
      <div className="hero-grid-bg" />
      <div className="frame">
        <div className="hero-split">
          <div className="hero-inner">
            <h1 className="hero-h1">
              Seu negócio cresceu. <span className="muted">Sua operação</span>{' '}
              <span className="a">acompanhou?</span>
            </h1>
            <p className="hero-sub">
              Criamos{' '}
              <strong>sistemas, aplicativos, automações e integrações sob medida</strong> para
              empresas que precisam crescer sem aumentar o caos operacional.
            </p>
            <div className="hero-cta">
              <a
                href="#contato"
                onClick={(e) => go(e, 'contato')}
                className="btn btn-primary btn-lg"
              >
                Falar com nossa equipe{' '}
                <span className="arr">
                  <Icon name="arrow" size={16} />
                </span>
              </a>
              <a
                href="#solucoes"
                onClick={(e) => go(e, 'solucoes')}
                className="btn btn-ghost btn-lg"
              >
                Conhecer soluções
              </a>
            </div>
            <div className="hero-micro">
              <span className="ok">Escopo e prazo fechados</span>
              <span className="ok">Você fala com quem constrói</span>
            </div>
          </div>
          <div className="hero-mock">
            <Mockup />
          </div>
        </div>

        <div className="trustbar reveal">
          <span className="tlabel">Empresas que confiam na Neo Eden</span>
          <div className="tlogos">
            {['Arroba Banda Larga', 'Prime Gourmet Club', 'Trackmax Soluções'].map((l) => (
              <span key={l} className="tlogo">
                <span className="tdot" />
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
