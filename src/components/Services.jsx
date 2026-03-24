import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineColorSwatch, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineDeviceMobile, HiOutlineCog } from 'react-icons/hi';
import './Services.css';

const services = [
  {
    icon: <HiOutlineColorSwatch />,
    title: 'Branding & Identidade',
    description: 'Criamos logos e identidades visuais profissionais que passam confiança e fazem seu negócio se destacar.',
    tags: ['Logo', 'Brand Guide', 'Visual Identity'],
  },
  {
    icon: <HiOutlineCode />,
    title: 'Desenvolvimento Web',
    description: 'Sites rápidos, bonitos e que funcionam em qualquer dispositivo. Feitos para atrair e converter visitantes em clientes.',
    tags: ['React', 'Next.js', 'Full-Stack'],
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'UI/UX Design',
    description: 'Layouts fáceis de usar que guiam o visitante até a ação que você quer: comprar, contratar ou entrar em contato.',
    tags: ['Figma', 'Protótipos', 'Design System'],
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: 'Apps Mobile',
    description: 'Aplicativos para celular que seus clientes vão usar no dia a dia, disponíveis para iPhone e Android.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Consultoria Tech',
    description: 'Te ajudamos a escolher as melhores ferramentas e tecnologias para o seu negócio crescer sem dor de cabeça.',
    tags: ['Arquitetura', 'DevOps', 'Otimização'],
  },
  {
    icon: <HiOutlineCog />,
    title: 'Automações',
    description: 'Integramos sistemas, criamos bots e workflows que eliminam tarefas manuais e fazem seu negócio rodar no automático.',
    tags: ['APIs', 'Chatbots', 'Workflows'],
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
          <h2 className="section-heading">Tudo que seu negócio precisa para crescer online</h2>
          <p className="services__subtitle">
            Da marca ao site, do design ao app. A gente cuida de tudo para você focar no que importa: seu negócio.
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
