import Icon from './Icon.jsx';

const PROBLEMS = [
  { icon: 'inbox', t: 'Atendimento sobrecarregado', d: 'Seu time responde as mesmas perguntas todos os dias.' },
  { icon: 'scatter', t: 'Processos bagunçados', d: 'Informação espalhada em planilhas e grupos gera retrabalho e erro.' },
  { icon: 'trend', t: 'Crescimento travado', d: 'A operação cresce, mas a tecnologia não acompanha o ritmo.' },
  { icon: 'unplug', t: 'Cliente sem engajamento', d: 'Você vende uma vez e perde o contato depois disso.' },
  { icon: 'repeat', t: 'Falta de automação', d: 'Tarefas repetitivas consomem tempo e dinheiro todo mês.' },
  { icon: 'hourglass', t: 'Sistemas antigos', d: 'Ferramentas que não conversam entre si e ninguém entende mais.' },
];

export default function Problems() {
  return (
    <section className="section" id="problemas">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Problemas que resolvemos</span>
            <h2 className="sec-title">
              Sua empresa lida com algum <span className="a">desses?</span>
            </h2>
          </div>
          <p className="sec-lead">
            Não vendemos tecnologia. Resolvemos o que está travando o seu negócio. A tecnologia é só
            a ferramenta.
          </p>
        </div>
        <div className="problems reveal reveal-stagger">
          {PROBLEMS.map((p, i) => (
            <div className="problem" key={i}>
              <div className="picon">
                <Icon name={p.icon} size={20} />
              </div>
              <span className="pnum">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
