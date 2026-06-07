import Icon from './Icon.jsx';
import { scrollToId } from '../lib/hooks.js';

const CAPS = [
  { icon: 'app', t: 'Aplicativos personalizados', d: 'App web e mobile feito do jeito que a sua empresa trabalha, não um modelo pronto.' },
  { icon: 'layers', t: 'Sistemas sob medida', d: 'A gestão do seu negócio em um sistema só, desenhado a partir da sua operação real.' },
  { icon: 'repeat', t: 'Automações e Inteligência Artificial', d: 'Tarefas repetitivas e atendimento no automático, funcionando 24 horas por dia.' },
  { icon: 'gauge', t: 'Dashboards gerenciais', d: 'Os números da sua empresa em um painel, atualizados em tempo real.' },
  { icon: 'box', t: 'Gestão de estoque', d: 'Controle de entradas, saídas e níveis sem depender de planilha solta.' },
  { icon: 'users', t: 'Área do cliente', d: 'Um portal para o seu cliente resolver tudo sozinho, sem precisar ligar.' },
  { icon: 'menu', t: 'Cardápios digitais', d: 'Cardápio online com pedido e pagamento, pronto para vender mais.' },
  { icon: 'link', t: 'Integrações e APIs', d: 'Conectamos os sistemas que hoje não conversam entre si.' },
];

export default function Capabilities() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <section className="section" id="solucoes">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Soluções sob medida</span>
            <h2 className="sec-title">
              O que podemos criar para a <span className="a">sua empresa</span>
            </h2>
          </div>
          <p className="sec-lead">
            Você não precisa de tudo. A gente monta a solução com as peças que o seu negócio
            realmente usa, e nada além disso.
          </p>
        </div>

        <div className="caps reveal reveal-stagger">
          {CAPS.map((c, i) => (
            <div className="cap" key={i}>
              <div className="cic">
                <Icon name={c.icon} size={22} />
              </div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>

        <div className="caps-cta reveal">
          <span className="caps-cta-txt">Não sabe por onde começar? A gente te ajuda a decidir.</span>
          <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-ghost">
            Falar com um especialista{' '}
            <span className="arr">
              <Icon name="arrow" size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
