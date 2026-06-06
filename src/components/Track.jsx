import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';

function TrackMockup() {
  const stages = [
    { t: 'Diagnóstico', s: 'done' },
    { t: 'Proposta aprovada', s: 'done' },
    { t: 'Construção', s: 'now' },
    { t: 'Testes & ajustes', s: 'next' },
    { t: 'No ar', s: 'next' },
  ];
  return (
    <div className="mock track-mock">
      <div className="mock-bar">
        <span className="mock-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-url">portal.neoeden.com.br · Arroba Banda Larga</span>
      </div>
      <div className="track-body">
        <div className="track-head">
          <div>
            <div className="track-proj">Central do Cliente + IA</div>
            <div className="track-meta">Atualizado há 12 min · Sprint 4 de 6</div>
          </div>
          <div className="track-prog">
            <div className="track-prog-ring">
              <span data-count="68" data-suffix="%">68%</span>
            </div>
          </div>
        </div>

        <div className="track-stages">
          {stages.map((st, i) => (
            <div className={'tstage ' + st.s} key={i} style={{ '--i': i }}>
              <span className="tdot">{st.s === 'done' ? <Icon name="check" size={12} /> : null}</span>
              <span className="tlabel">{st.t}</span>
            </div>
          ))}
        </div>

        <div className="track-feed">
          <div className="tfeed-row" style={{ '--i': 0 }}>
            <span className="tf-ic">
              <Icon name="check" size={14} />
            </span>
            <div>
              <div className="tf-t">Tela de login entregue para aprovação</div>
              <div className="tf-d">hoje, 09:14 · aguardando seu OK</div>
            </div>
            <span className="tf-tag wait">aprovar</span>
          </div>
          <div className="tfeed-row" style={{ '--i': 1 }}>
            <span className="tf-ic">
              <Icon name="cog" size={14} />
            </span>
            <div>
              <div className="tf-t">Integração com gateway de pagamento</div>
              <div className="tf-d">ontem · em desenvolvimento</div>
            </div>
            <span className="tf-tag">em curso</span>
          </div>
          <div className="tfeed-row" style={{ '--i': 2 }}>
            <span className="tf-ic">
              <Icon name="bot" size={14} />
            </span>
            <div>
              <div className="tf-t">Atendimento por IA no ambiente de testes</div>
              <div className="tf-d">2 dias atrás · liberado para teste</div>
            </div>
            <span className="tf-tag ok">testar</span>
          </div>
        </div>
      </div>
      <div className="mock-badge">
        <div className="bi">
          <Icon name="layers" size={18} />
        </div>
        <div>
          <div className="bt">Tempo real</div>
          <div className="bs">você acompanha de onde estiver</div>
        </div>
      </div>
    </div>
  );
}

const TRACK_FEATURES = [
  { icon: 'layers', t: 'Etapas ao vivo', d: 'Veja exatamente em que fase seu projeto está e o que vem a seguir, sem precisar perguntar.' },
  { icon: 'check', t: 'Entregas e aprovações', d: 'Aprove telas e funções direto no portal. Tudo fica registrado, nada se perde no WhatsApp.' },
  { icon: 'inbox', t: 'Conversa com o time', d: 'Fale com quem está construindo o seu sistema no contexto de cada entrega.' },
  { icon: 'cog', t: 'Histórico e documentos', d: 'Escopo, prazos, arquivos e decisões em um só lugar, acessível quando você quiser.' },
];

export default function Track() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <section className="section" id="acompanhar">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Sistema próprio · Portal do cliente</span>
            <h2 className="sec-title">
              Acompanhe seu projeto <span className="a">em tempo real</span>
            </h2>
          </div>
          <p className="sec-lead">
            Desenvolvemos nosso próprio portal para você não ficar no escuro. Cada etapa, entrega e
            decisão fica visível do começo ao fim.
          </p>
        </div>

        <div className="track-grid reveal">
          <div className="track-side">
            <ul className="track-feats">
              {TRACK_FEATURES.map((f, i) => (
                <li className="track-feat" key={i}>
                  <span className="tf-icon">
                    <Icon name={f.icon} size={18} />
                  </span>
                  <div>
                    <h4>{f.t}</h4>
                    <p>{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-ghost track-cta">
              Quero acompanhar assim{' '}
              <span className="arr">
                <Icon name="arrow" size={15} />
              </span>
            </a>
          </div>
          <div className="track-stage">
            <TrackMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
