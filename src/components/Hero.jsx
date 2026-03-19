import { motion } from 'framer-motion';
import './Hero.css';

const stats = [
  { value: '50+', label: 'Projetos' },
  { value: '30+', label: 'Clientes' },
  { value: '3+', label: 'Anos' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />
      <div className="dot-grid-bg" />

      <div className="container">
        <div className="hero__content">
          <motion.span
            className="hero__tag"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            // Bem-vindo ao futuro
          </motion.span>

          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Criamos experiências <em>digitais</em> que transformam marcas
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Design, desenvolvimento e estratégia digital de alto padrão. 
            Construímos o jardim do futuro para a sua marca.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <a href="#contato" className="btn-primary">Iniciar Projeto</a>
            <a href="#portfolio" className="btn-secondary">Ver Portfólio</a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="hero__stat-value">{value}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
