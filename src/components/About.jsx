import Icon from './Icon.jsx';

const DISCIPLINES = [
  { icon: 'app', name: 'Engenharia', role: 'Software', meta: 'Web · Mobile · APIs' },
  { icon: 'layers', name: 'Produto & UX', role: 'Design', meta: 'Fluxos · Interfaces' },
  { icon: 'bot', name: 'IA & Automação', role: 'Inteligência', meta: 'Atendimento · Rotinas' },
  { icon: 'inbox', name: 'Atendimento', role: 'Relação', meta: 'Suporte · Evolução' },
];

export default function About() {
  return (
    <section className="section" id="empresa">
      <div className="frame">
        <div className="about-top reveal">
          <span className="eyebrow">Quem é a Neo Eden</span>
          <p className="about-lead">
            Somos uma empresa de tecnologia que existe por um motivo só:{' '}
            <strong>resolver problemas que travam empresas.</strong> Sistemas, apps e automações são
            as ferramentas. A entrega é o resultado.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="n">
                <span data-count="40">40</span>
                <span className="p">+</span>
              </div>
              <div className="l">Projetos entregues</div>
            </div>
            <div className="about-stat">
              <div className="n">
                <span data-count="5">5</span>
                <span className="p"> anos</span>
              </div>
              <div className="l">De operação</div>
            </div>
            <div className="about-stat">
              <div className="n">
                <span data-count="24" data-suffix="h">24h</span>
              </div>
              <div className="l">Tempo de resposta</div>
            </div>
          </div>
        </div>

        <div className="about-disc-head reveal">
          <span className="disc-label">Nossas especialidades</span>
        </div>
        <div className="team reveal reveal-stagger">
          {DISCIPLINES.map((m, i) => (
            <div className="member" key={i}>
              <div className="member-photo">
                <Icon name={m.icon} size={44} sw={1.4} />
              </div>
              <div>
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.role}</div>
              </div>
              <div className="member-meta">{m.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
