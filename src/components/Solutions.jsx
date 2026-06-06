import Icon from './Icon.jsx';

const SOLUTIONS = [
  { t: 'Aplicativos personalizados', d: 'Apps web e mobile criados para o jeito que a sua empresa trabalha, não um modelo pronto adaptado na força.', tags: ['Web', 'iOS', 'Android', 'Área do cliente'] },
  { t: 'Sistemas sob medida', d: 'Plataformas internas desenhadas a partir da sua operação real: gestão, cadastros, painéis e relatórios em um lugar só.', tags: ['Painéis', 'Gestão', 'Relatórios', 'Multiusuário'] },
  { t: 'Automações', d: 'Tarefas repetitivas viram fluxo automático. Menos trabalho manual, menos erro, mais tempo do time para o que importa.', tags: ['Fluxos', 'Notificações', 'Cobrança', 'Rotinas'] },
  { t: 'Inteligência Artificial', d: 'IA aplicada onde dá resultado: atendimento, suporte, triagem e processos internos, respondendo na hora, 24/7.', tags: ['Atendimento', 'Triagem', 'Suporte', 'Análise'] },
  { t: 'Integrações', d: 'Conectamos os sistemas e setores que hoje não se falam: pagamento, ERP, CRM, WhatsApp e o que mais for preciso.', tags: ['ERP', 'CRM', 'Pagamentos', 'APIs'] },
];

export default function Solutions() {
  return (
    <section className="section" id="solucoes">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Como resolvemos</span>
            <h2 className="sec-title">
              Uma solução para cada <span className="a">gargalo real</span>
            </h2>
          </div>
          <p className="sec-lead">
            Construímos o que a sua empresa precisa, e nada além disso. Sem pacote fechado, sem peso
            que não vai usar.
          </p>
        </div>
        <div className="solutions reveal reveal-x">
          {SOLUTIONS.map((s, i) => (
            <div className="solution" key={i}>
              <span className="snum">{String(i + 1).padStart(2, '0')}</span>
              <div className="sbody">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="stags">
                  {s.tags.map((t) => (
                    <span className="stag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="sarr">
                <Icon name="arrow" size={18} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
