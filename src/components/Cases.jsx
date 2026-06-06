const CASES = [
  {
    seg: 'Provedor de internet',
    name: 'Arroba Banda Larga',
    desc: 'Atendimento sobrecarregado e cliente que só aparecia para reclamar. Criamos a central do cliente e automatizamos o suporte.',
    deliv: ['Central do cliente (web + app)', 'Atendimento e triagem por IA', 'Clube de vantagens e fidelização'],
    kpi: '71% resolvido sem humano',
    meta: 'em produção',
  },
  {
    seg: 'Clube de benefícios',
    name: 'Prime Gourmet Club',
    desc: 'Vendia uma vez e perdia o contato. Construímos o app de fidelidade e automatizamos a relação com o associado.',
    deliv: ['App de fidelidade e benefícios', 'Automação de campanhas', 'Painel de associados e resgates'],
    kpi: '3x mais recompra',
    meta: 'em produção',
  },
  {
    seg: 'Gestão e monitoramento',
    name: 'Trackmax Soluções',
    desc: 'Informação espalhada em planilhas e quatro setores sem se falar. Unificamos tudo em um sistema sob medida.',
    deliv: ['Sistema interno de gestão', 'Monitoramento em tempo real', 'Integração com ERP e financeiro'],
    kpi: '4 setores, 1 painel',
    meta: 'em produção',
  },
];

export default function Cases() {
  return (
    <section className="section" id="exemplos">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Exemplos de aplicação</span>
            <h2 className="sec-title">
              Problemas reais, <span className="a">resolvidos de verdade</span>
            </h2>
          </div>
          <p className="sec-lead">
            Cada projeto começou com uma dor concreta de um negócio real, não de uma ideia de
            tecnologia.
          </p>
        </div>
        <div className="cases reveal reveal-stagger">
          {CASES.map((c, i) => (
            <article className="case" key={i}>
              <div className="case-top">
                <span className="case-seg">{c.seg}</span>
                <span className="case-name">{c.name}</span>
              </div>
              <div className="case-body">
                <p>{c.desc}</p>
                <ul className="case-deliv">
                  {c.deliv.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="case-foot">
                <span className="kpi">{c.kpi}</span>
                <span>{c.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
