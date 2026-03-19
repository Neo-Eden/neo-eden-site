import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Mergulhamos no universo da sua marca. Entendemos objetivos, público, concorrência e a essência que torna você único.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos a arquitetura do projeto, wireframes e um roadmap claro com metas mensuráveis para cada fase.',
  },
  {
    number: '03',
    title: 'Design & Prototipagem',
    description: 'Criamos interfaces de alta fidelidade no Figma, iterando com feedback até atingir a excelência visual e funcional.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Código limpo, performance otimizada e stack moderna. Cada linha é escrita com intenção e qualidade.',
  },
  {
    number: '05',
    title: 'Lançamento & Evolução',
    description: 'Deploy, monitoramento e iteração contínua. Seu produto digital cresce e evolui com dados e feedback real.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Process() {
  return (
    <section className="process section" id="processo">
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">// Processo</span>
          <h2 className="section-heading">Como transformamos ideias em realidade</h2>
          <p className="process__subtitle">
            Nosso processo é estruturado para garantir qualidade, transparência e resultados em cada etapa.
          </p>
        </motion.div>

        <div className="process__timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process__step"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="process__node">
                <span className="process__node-ring" />
                <span className="process__node-dot" />
              </div>
              <div className="process__step-content">
                <span className="process__step-number">Etapa {step.number}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
