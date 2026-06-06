import { scrollToId } from '../lib/hooks.js';
import Icon from './Icon.jsx';

const PLANS = [
  {
    name: 'Projeto fechado',
    tag: 'Para um problema específico',
    fee: '4–8',
    unit: 'semanas',
    desc: 'Um gargalo, um escopo, um preço fechado. Ideal para começar com clareza total.',
    feats: ['Escopo e preço definidos antes', 'Entregas semanais', 'Treinamento do time', '90 dias de garantia'],
    cta: 'Pedir orçamento',
    featured: false,
  },
  {
    name: 'Parceria contínua',
    tag: 'Para evoluir sempre',
    fee: 'Mensal',
    unit: '',
    desc: 'Um time dedicado cuidando e evoluindo seus sistemas mês a mês, com prioridade no atendimento.',
    feats: ['Time dedicado ao seu negócio', 'Roadmap mensal com você', 'Novas funções recorrentes', 'Suporte prioritário'],
    cta: 'Falar com nossa equipe',
    featured: true,
  },
  {
    name: 'Suporte & evolução',
    tag: 'Para o que já existe',
    fee: 'Sob',
    unit: 'demanda',
    desc: 'Ajustes, correções e melhorias pontuais em sistemas que já estão rodando, sejam seus ou de terceiros.',
    feats: ['Melhorias pontuais', 'Correção e manutenção', 'Integrações novas', 'Sem mensalidade obrigatória'],
    cta: 'Conversar',
    featured: false,
  },
];

export default function Pricing() {
  const go = (e) => {
    e.preventDefault();
    scrollToId('contato');
  };
  return (
    <section className="section" id="precos">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Como seguimos com você</span>
            <h2 className="sec-title">
              Acompanhamento <span className="a">frequente</span>, em cada etapa
            </h2>
          </div>
          <p className="sec-lead">
            Você não fica no escuro, nem depois da entrega. Escolha o formato de parceria que faz
            sentido para o seu momento e acompanhe tudo de perto.
          </p>
        </div>
        <div className="pricing reveal reveal-stagger">
          {PLANS.map((p, i) => (
            <div className={'price' + (p.featured ? ' featured' : '')} key={i}>
              <div>
                <div className="price-name">{p.name}</div>
                <div className="price-tag">{p.tag}</div>
              </div>
              <div className="price-fee">
                {p.fee}
                {p.unit && <span className="unit">{p.unit}</span>}
              </div>
              <div className="price-desc">{p.desc}</div>
              <ul className="price-feats">
                {p.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="price-cta">
                <a
                  href="#contato"
                  onClick={go}
                  className={'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost')}
                >
                  {p.cta}{' '}
                  <span className="arr">
                    <Icon name="arrow" size={15} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
