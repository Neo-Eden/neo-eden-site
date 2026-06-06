const STEPS = [
  { t: 'Diagnóstico', d: 'Entendemos a sua operação e onde está o gargalo. Sem custo e sem compromisso.', k: 'Duração', v: '~1 semana' },
  { t: 'Proposta', d: 'Você recebe escopo, prazo e preço fechados antes de qualquer linha de código.', k: 'Entrega', v: 'Escopo + preço' },
  { t: 'Construção', d: 'Desenvolvemos com entregas frequentes. Você vê o sistema crescer, não só no final.', k: 'Ritmo', v: 'Entregas semanais' },
  { t: 'Operação', d: 'Lançamento, treinamento do time e suporte contínuo. A gente fica perto depois.', k: 'Depois', v: 'Suporte + evolução' },
];

export default function Process() {
  return (
    <section className="section" id="processo">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Como trabalhamos</span>
            <h2 className="sec-title">
              Entenda como seu problema <span className="a">vira solução digital</span>
            </h2>
          </div>
          <p className="sec-lead">
            Um caminho claro do começo ao fim. Você sempre sabe em que etapa está e o que vem a
            seguir.
          </p>
        </div>
        <div className="proc reveal reveal-stagger">
          {STEPS.map((s, i) => (
            <div className="pstep" key={i}>
              <div className="pn">
                {String(i + 1).padStart(2, '0')}
                <span className="line" />
              </div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
              <div className="pmeta">
                <span>{s.k}</span>
                <span className="v">{s.v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
