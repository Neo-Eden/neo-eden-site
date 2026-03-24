import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Conversamos com você para entender seu negócio, seus clientes e o que você precisa alcançar.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Montamos um plano claro com prazos, etapas e o que vai ser entregue. Sem surpresas.',
  },
  {
    number: '03',
    title: 'Design & Prototipagem',
    description: 'Criamos o visual do projeto e te mostramos antes de desenvolver. Você aprova cada detalhe.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Construímos o projeto com tecnologia moderna. Site rápido, seguro e que funciona em qualquer tela.',
  },
  {
    number: '05',
    title: 'Lançamento & Evolução',
    description: 'Colocamos no ar e acompanhamos os resultados com você. Ajustamos o que for preciso para melhorar.',
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
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
          <h2 className="section-heading">Como funciona trabalhar com a gente</h2>
          <p className="process__subtitle">
            Processo simples e transparente. Você acompanha tudo e sabe exatamente o que está acontecendo.
          </p>
        </motion.div>

        <div className="process__timeline" ref={timelineRef}>
          {/* Animated fill line */}
          <motion.div className="process__timeline-fill" style={{ scaleY }} />

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
                <motion.span
                  className="process__node-ring"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="process__node-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                />
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
