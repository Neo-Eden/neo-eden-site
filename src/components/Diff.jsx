const DIFF_STEPS = [
  { t: 'Entendemos o problema', d: 'Antes de falar em tecnologia, mapeamos o que está realmente travando a sua operação.' },
  { t: 'Desenhamos a solução', d: 'Só então definimos o que construir e, principalmente, o que não construir.' },
  { t: 'Construímos sob medida', d: 'Desenvolvimento com escopo e prazo fechados, e você acompanha de perto.' },
  { t: 'Acompanhamos depois', d: 'Suporte e evolução contínua. Não desaparecemos no dia da entrega.' },
];

export default function Diff() {
  return (
    <section className="section">
      <div className="frame">
        <div className="diff">
          <div className="reveal">
            <span className="eyebrow">O diferencial Neo Eden</span>
            <h2 className="sec-title" style={{ maxWidth: '14ch', marginBottom: 20 }}>
              Não vendemos <em>solução pronta.</em> Entendemos o{' '}
              <span className="a">problema primeiro.</span>
            </h2>
            <p className="hero-sub" style={{ maxWidth: '40ch', margin: 0 }}>
              Cada projeto nasce de uma necessidade real do cliente. A gente resolve o problema
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
      <div className="frame">
        <p className="impact-q reveal">
          Seu problema vira <span className="a">solução digital.</span>
        </p>
        <p className="impact-sub reveal">
          Transformamos gargalo operacional em crescimento, com tecnologia que você usa de verdade.
        </p>
      </div>
    </section>
  );
}
