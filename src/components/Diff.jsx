import logoMark from '../assets/logo-n.png';

const DIFF_STEPS = [
  { t: 'Escopo e preço fechados', d: 'Você sabe o que vai receber e quanto vai pagar antes de começar. Sem surpresa no meio do caminho.' },
  { t: 'Você fala com quem constrói', d: 'Nada de intermediário. Você conversa direto com quem desenvolve o seu sistema.' },
  { t: 'A gente não some depois', d: 'Entregamos, treinamos o seu time e seguimos por perto para evoluir o que for preciso.' },
];

export default function Diff() {
  return (
    <section className="section" id="diferencial">
      <div className="frame">
        <div className="diff">
          <div className="reveal">
            <span className="eyebrow">Por que a Neo Eden</span>
            <h2 className="sec-title" style={{ maxWidth: '14ch', marginBottom: 20 }}>
              Não vendemos <em>solução pronta.</em> Entendemos o{' '}
              <span className="a">problema primeiro.</span>
            </h2>
            <p className="hero-sub" style={{ maxWidth: '40ch', margin: 0 }}>
              Cada projeto nasce de uma necessidade real do seu negócio. A gente resolve o problema
              certo, não o que dá mais trabalho para vender.
            </p>
          </div>
          <div className="diff-steps reveal reveal-stagger">
            {DIFF_STEPS.map((s, i) => (
              <div className="diff-step" key={i}>
                <div className="dn">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="impact">
      <img className="nmark" src={logoMark} alt="" aria-hidden="true" />
      <div className="frame">
        <p className="impact-q reveal">
          Seu problema vira <span className="a">solução digital.</span>
        </p>
        <p className="impact-sub reveal">
          Menos retrabalho, mais controle. Tecnologia que o seu time usa de verdade, não uma
          planilha a mais.
        </p>
      </div>
    </section>
  );
}
