import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineColorSwatch, HiOutlineLightningBolt, HiOutlineGlobe, HiOutlineChartBar, HiOutlineDeviceMobile } from 'react-icons/hi';
import './Services.css';

const services = [
  {
    icon: <HiOutlineColorSwatch />,
    title: 'Branding & Identidade',
    description: 'Construímos identidades visuais que comunicam a essência da sua marca com precisão e sofisticação.',
    tags: ['Logo', 'Brand Guide', 'Visual Identity'],
  },
  {
    icon: <HiOutlineCode />,
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações de alta performance com código limpo, responsivos e otimizados para conversão.',
    tags: ['React', 'Next.js', 'Full-Stack'],
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas e experiências memoráveis, pensadas para engajar e converter.',
    tags: ['Figma', 'Protótipos', 'Design System'],
  },
  {
    icon: <HiOutlineGlobe />,
    title: 'Marketing Digital',
    description: 'Estratégias data-driven para posicionar sua marca no ecosistema digital com resultados mensuráveis.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: 'Apps Mobile',
    description: 'Aplicações mobile nativas e híbridas que entregam experiências premium aos seus usuários.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Consultoria Tech',
    description: 'Assessoria técnica para tomada de decisões estratégicas em tecnologia e arquitetura de sistemas.',
    tags: ['Arquitetura', 'DevOps', 'Otimização'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">// Serviços</span>
          <h2 className="section-heading">Soluções completas para o mundo digital</h2>
          <p className="services__subtitle">
            Do conceito à execução, criamos ecossistemas digitais que fazem marcas crescerem com intenção e excelência.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.title} className="service-card" variants={cardVariants}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
