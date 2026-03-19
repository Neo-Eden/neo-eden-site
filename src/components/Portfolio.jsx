import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './Portfolio.css';

const projects = [
  {
    category: 'Branding',
    title: 'Vertex Labs',
    description: 'Identidade visual completa para startup de inteligência artificial.',
    initials: 'VL',
  },
  {
    category: 'Web Development',
    title: 'Orion Finance',
    description: 'Plataforma fintech com dashboard analítico e arquitetura escalável.',
    initials: 'OF',
  },
  {
    category: 'UI/UX Design',
    title: 'Pulse Health',
    description: 'App de saúde mental com experiência focada em bem-estar e acessibilidade.',
    initials: 'PH',
  },
  {
    category: 'Full Stack',
    title: 'Nova Commerce',
    description: 'E-commerce headless com performance excepcional e checkout otimizado.',
    initials: 'NC',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">// Portfólio</span>
          <h2 className="section-heading">Projetos que contam histórias</h2>
          <p className="portfolio__subtitle">
            Cada projeto é uma colaboração única. Veja como transformamos visões em realidade digital.
          </p>
        </motion.div>

        <motion.div
          className="portfolio__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} className="portfolio-card" variants={cardVariants}>
              <div className="portfolio-card__preview">
                <div className="portfolio-card__image">
                  <span className="portfolio-card__image-label">{project.initials}</span>
                </div>
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__overlay-text">
                    Ver Projeto <HiOutlineArrowRight />
                  </span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <span className="portfolio-card__category">{project.category}</span>
                <h3 className="portfolio-card__title">{project.title}</h3>
                <p className="portfolio-card__desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
