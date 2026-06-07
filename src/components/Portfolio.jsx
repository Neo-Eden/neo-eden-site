import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';
import arrobaImg from '../assets/arroba-cliente-1.png';
import primeImg from '../assets/prime-app-1.jpeg';
import trackmaxImg from '../assets/trackmax-1.jpeg';
import tagmaxImg from '../assets/tagmax-1.jpeg';
import baliImg from '../assets/bali-1.jpeg';

const PORTFOLIO = [
  {
    id: 'pf-arroba',
    seg: 'Provedor de internet',
    name: 'Arroba Banda Larga',
    desc: 'Central do cliente em web e app, com atendimento e triagem por IA integrados ao suporte.',
    tags: ['App + Web', 'IA no atendimento', 'Clube de vantagens'],
    kpi: '71% resolvido sem humano',
    img: arrobaImg,
    links: [{ icon: 'link', label: 'Visitar site', url: 'https://arrobabr.com.br' }],
  },
  {
    id: 'pf-prime',
    seg: 'Clube de benefícios',
    name: 'Prime Gourmet Club',
    desc: 'App de fidelidade e benefícios com automação de campanhas e painel de associados.',
    tags: ['App mobile', 'Automação', 'Fidelização'],
    kpi: '3x mais recompra',
    img: primeImg,
    links: [{ icon: 'link', label: 'Visitar site', url: 'https://primegourmet.com.br' }],
  },
  {
    id: 'pf-trackmax',
    seg: 'Gestão e monitoramento',
    name: 'Trackmax Soluções',
    desc: 'Sistema de rastreamento e monitoramento em tempo real, com app e integração ao ERP e ao financeiro.',
    tags: ['Sistema interno', 'Tempo real', 'Integração ERP'],
    kpi: '4 setores, 1 painel',
    img: trackmaxImg,
    links: [],
  },
  {
    id: 'pf-tagmax',
    seg: 'Rastreamento por tags',
    name: 'TagMax',
    desc: 'App de localização inteligente por tags Bluetooth: mapa em tempo real, geocercas e alertas.',
    tags: ['App mobile', 'Bluetooth', 'Tempo real'],
    kpi: 'iOS + Android nas lojas',
    img: tagmaxImg,
    links: [
      { icon: 'app', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.tagmax.app&hl=pt_BR' },
      { icon: 'app', label: 'App Store', url: 'https://apps.apple.com/br/app/tagmax/id6760375789' },
    ],
  },
  {
    id: 'pf-bali',
    seg: 'Turismo & descoberta',
    name: 'Best of Bali',
    desc: 'App para descobrir restaurantes, spas e experiências em Bali, com cupons e roteiros personalizados.',
    tags: ['App mobile', 'Cupons', 'Roteiros'],
    kpi: 'Descoberta com mapa e favoritos',
    img: baliImg,
    links: [],
  },
];

export default function Portfolio() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <section className="section" id="portfolio">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Projetos</span>
            <h2 className="sec-title">
              Negócios reais, <span className="a">já no ar</span>
            </h2>
          </div>
          <p className="sec-lead">
            Cada projeto nasceu de um problema real e hoje roda no dia a dia de quem confiou na
            gente. Veja o que já está funcionando.
          </p>
        </div>

        <div className="pf-list">
          {PORTFOLIO.map((p, i) => (
            <article className={'pf-row reveal' + (i % 2 ? ' flip' : '')} key={p.id}>
              <div className="pf-visual">
                <img src={p.img} alt={`Projeto ${p.name}`} loading="lazy" />
                <span className="pf-index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pf-info">
                <span className="pf-seg">{p.seg}</span>
                <h3 className="pf-name">{p.name}</h3>
                <p className="pf-desc">{p.desc}</p>
                <div className="pf-tags">
                  {p.tags.map((t) => (
                    <span className="pf-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pf-foot">
                  <span className="pf-kpi">
                    <span className="d" />
                    {p.kpi}
                  </span>
                </div>
                {p.links.length > 0 && (
                  <div className="pf-links">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        className="pf-link"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name={l.icon} size={14} />
                        {l.label}
                        <Icon name="arrow" size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="pf-cta reveal">
          <span className="pf-cta-txt">Quer ver o seu projeto nessa lista?</span>
          <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-primary">
            Começar o meu{' '}
            <span className="arr">
              <Icon name="arrow" size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
