import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const stats = [
  { value: '50+', label: 'Projetos' },
  { value: '30+', label: 'Clientes' },
  { value: '3+', label: 'Anos' },
];

const titleWords = [
  { text: 'Sua', accent: false },
  { text: 'empresa', accent: false },
  { text: 'precisa', accent: false },
  { text: 'vender', accent: true },
  { text: 'mais?', accent: false },
  { text: 'A', accent: false },
  { text: 'gente', accent: false },
  { text: 'resolve.', accent: false },
];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const particles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${12 + i * 15}%`,
  top: `${18 + (i % 3) * 28}%`,
  size: 2 + (i % 3),
  duration: 3 + i * 0.6,
  delay: i * 0.5,
}));

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero__glow" />
      <div className="dot-grid-bg" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="hero__particle"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div className="container" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero__content">
          <motion.span
            className="hero__tag"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            // Studio de Design & Tecnologia
          </motion.span>

          <h1 className="hero__title">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className={`hero__title-word ${word.accent ? 'hero__title-word--accent' : ''}`}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                custom={i}
              >
                {word.accent ? <em>{word.text}</em> : word.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Criamos sites, aplicativos e estratégias digitais que trazem clientes
            de verdade para o seu negócio.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <a href="#contato" className="btn-primary btn-glow">Iniciar Projeto</a>
            <a href="#portfolio" className="btn-secondary">Ver Portfólio</a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <div className="hero__stat-value">{value}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
