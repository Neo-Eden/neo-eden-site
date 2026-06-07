const STEPS = [
  { t: 'Entendemos o seu negócio', d: 'Escutamos a sua operação e encontramos onde está o gargalo. Sem custo e sem compromisso.', k: 'Custo', v: 'Grátis' },
  { t: 'Planejamos a solução', d: 'Definimos juntos o que construir e o que não construir. Você recebe escopo, prazo e preço fechados.', k: 'Entrega', v: 'Escopo + preço' },
  { t: 'Desenvolvemos o projeto', d: 'Construímos com entregas frequentes. Você vê o sistema crescer, não só no final.', k: 'Ritmo', v: 'Entregas semanais' },
  { t: 'Realizamos os ajustes', d: 'Testamos junto com você e ajustamos os detalhes até ficar do jeito certo.', k: 'Fase', v: 'Testes + ajustes' },
  { t: 'Entregamos e acompanhamos a evolução', d: 'Colocamos no ar, treinamos o seu time e seguimos por perto para evoluir.', k: 'Depois', v: 'Suporte contínuo' },
];

export default function Process() {
  return (
    <section className="section" id="processo">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Como funciona</span>
            <h2 className="sec-title">
              Do problema à solução, <span className="a">em cinco passos</span>
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
