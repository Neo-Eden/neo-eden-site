import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: '100%', label: 'Projetos entregues' },
  { value: '4.9', label: 'Avaliação média' },
  { value: '24h', label: 'Tempo de resposta' },
];

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="section-tag">// Sobre nós</span>
            <h2 className="section-heading">O jardim do futuro digital</h2>
            <p className="about__description">
              A Neo Eden nasceu da visão de que tecnologia e design devem coexistir com intenção e precisão. 
              Somos um studio digital que transforma marcas em experiências extraordinárias — onde cada pixel 
              é plantado com propósito.
            </p>
            <p className="about__description">
              Nossa direção criativa, <strong style={{ color: 'var(--color-accent)' }}>Void Garden</strong>, 
              representa a escuridão sofisticada de onde a vida tecnológica emerge. Trabalhamos com exclusividade, 
              selecionando projetos que nos desafiam a criar algo verdadeiramente transformador.
            </p>
          </motion.div>

          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__visual-frame">
              <svg className="about__visual-n" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 120V20L120 120V20" stroke="#1CE07A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
                <path d="M30 110V30L110 110V30" stroke="#1CE07A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                <path d="M40 100V40L100 100V40" stroke="#1CE07A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <path d="M50 90V50L90 90V50" stroke="#1CE07A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="4" fill="#1CE07A" opacity="0.4" />
                <circle cx="40" cy="40" r="3" fill="#1CE07A" opacity="0.25" />
                <circle cx="30" cy="30" r="2.5" fill="#1CE07A" opacity="0.15" />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-item__value">{value}</div>
              <div className="stat-item__label">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
