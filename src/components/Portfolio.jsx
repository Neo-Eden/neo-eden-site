import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaGooglePlay, FaAppStoreIos, FaGlobe } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

// Thumbnails
import arrobaSiteThumb from '../assets/arroba-site-thumb.png';
import arrobaClienteThumb from '../assets/arroba-cliente-thumb.png';
import primeGourmetThumb from '../assets/prime-gourmet-thumb.png';
import primeAppThumb from '../assets/prime-app-thumb.jpeg';
import tagmaxThumb from '../assets/tagmax-5.jpeg';
import trackmaxThumb from '../assets/trackmax-thumb.jpeg';

// Gallery helper — sorts glob results by filename and extracts default exports
function loadGallery(glob) {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod.default);
}

// Gallery images (eager: URLs only, browser lazy-loads actual data)
const arrobaSiteGallery = loadGallery(
  import.meta.glob('../assets/arroba-site-[0-9]*.png', { eager: true })
);
const arrobaClienteDesktop = loadGallery(
  import.meta.glob('../assets/arroba-cliente-[0-9]*.png', { eager: true })
);
const arrobaClienteMobile = loadGallery(
  import.meta.glob('../assets/arroba-cliente-app-*.jpeg', { eager: true })
);
const primeDesktop = loadGallery(
  import.meta.glob('../assets/prime-site-*.png', { eager: true })
);
const primeMobileAll = loadGallery(
  import.meta.glob('../assets/prime-app-[0-9]*.jpeg', { eager: true })
);
const tagmaxAll = loadGallery(
  import.meta.glob('../assets/tagmax-[0-9].jpeg', { eager: true })
);
// Remove login (index 0) and splash (index 3)
const tagmaxGallery = tagmaxAll.filter((_, i) => i !== 0 && i !== 3);
const trackmaxAll = loadGallery(
  import.meta.glob('../assets/trackmax-[0-9].jpeg', { eager: true })
);
// Remove "about" screen (index 6) and splash (index 8)
const trackmaxGallery = trackmaxAll.filter((_, i) => i !== 6 && i !== 8);

const projects = [
  {
    category: 'Web Development',
    title: 'Arroba Banda Larga',
    description:
      'Site institucional para provedor de internet fibra óptica com planos e contratação online.',
    summary:
      'Site institucional da Arroba Banda Larga, provedor de internet fibra óptica em Campos dos Goytacazes e região. Apresenta os planos de internet com preços, teste de velocidade em tempo real, mapa de cobertura com verificação por CEP, programa de indicação com recompensas e links para download do app. Design moderno com foco em conversão e contratação online.',
    image: arrobaSiteThumb,
    thumbType: 'web',
    desktopGallery: arrobaSiteGallery,
    mobileGallery: [],
    links: [
      { icon: FaGlobe, label: 'Visitar site', url: 'https://arrobabr.com.br' },
    ],
  },
  {
    category: 'Web Development',
    title: 'Arroba — Área do Cliente',
    description:
      'Painel web exclusivo para clientes do provedor. Faturas, consumo e relatórios.',
    summary:
      'Área do cliente integrada ao site da Arroba Banda Larga. Painel completo onde os assinantes acompanham seu plano, consultam faturas e notas fiscais, monitoram o consumo semanal de download e upload, testam a velocidade em tempo real e geram relatórios em PDF. Interface responsiva que funciona perfeitamente no desktop e no celular.',
    image: arrobaClienteThumb,
    thumbType: 'web',
    desktopGallery: arrobaClienteDesktop,
    mobileGallery: arrobaClienteMobile,
    links: [],
  },
  {
    category: 'Web Development',
    title: 'Prime Gourmet — Site',
    description:
      'Site do clube de benefícios com vouchers Peça 2 Pague 1 em restaurantes, hotéis e mais.',
    summary:
      'O Prime Gourmet é um clube de benefícios. Ao assinar uma região, o cliente recebe acesso a vouchers com desconto Peça 2 Pague 1 em restaurantes, hotéis, ingressos e muito mais. Desenvolvemos o site institucional que apresenta as ofertas por cidade, os parceiros disponíveis, o fluxo de assinatura em 5 passos e os números da plataforma — mais de 8.300 estabelecimentos, 3 milhões de vouchers utilizados e R$ 250M+ em economia gerada.',
    image: primeGourmetThumb,
    thumbType: 'web',
    desktopGallery: primeDesktop,
    mobileGallery: [],
    links: [
      { icon: FaGlobe, label: 'Visitar site', url: 'https://primegourmet.com.br' },
    ],
  },
  {
    category: 'App Mobile',
    title: 'Prime Gourmet — App',
    description:
      'App do clube de benefícios com vouchers, QR Code, mapa e economia acumulada.',
    summary:
      'O Prime Gourmet é um clube de benefícios. Ao assinar uma região, o cliente recebe acesso a vouchers com desconto Peça 2 Pague 1 em restaurantes, hotéis, ingressos e muito mais. Desenvolvemos o aplicativo para iOS e Android onde o assinante busca estabelecimentos por categoria, visualiza ofertas no mapa, valida vouchers via QR Code e acompanha toda a economia acumulada em tempo real.',
    image: primeAppThumb,
    thumbType: 'app',
    desktopGallery: [],
    mobileGallery: primeMobileAll,
    links: [],
  },
  {
    category: 'App Mobile',
    title: 'TagMax',
    description:
      'App de rastreamento inteligente por tags. Mapa em tempo real, geocerca e alertas.',
    summary:
      'Aplicativo da TagMax, solução de localização inteligente por tags Bluetooth. Permite cadastrar e gerenciar múltiplas tags, visualizar a localização aproximada no mapa em tempo real, configurar geocercas, receber alertas e acompanhar a vida útil de cada tag. Disponível para iOS e Android nas lojas oficiais.',
    image: tagmaxThumb,
    thumbType: 'app',
    desktopGallery: [],
    mobileGallery: tagmaxGallery,
    links: [
      {
        icon: FaGooglePlay,
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.tagmax.app&hl=pt_BR',
      },
      {
        icon: FaAppStoreIos,
        label: 'App Store',
        url: 'https://apps.apple.com/br/app/tagmax/id6760375789',
      },
    ],
  },
  {
    category: 'App Mobile',
    title: 'TrackMax PRO',
    description:
      'App de rastreamento veicular com mapa em tempo real e bloqueio remoto.',
    summary:
      'Aplicativo de rastreamento veicular da TrackMax. Permite monitorar a frota em tempo real no mapa, visualizar informações detalhadas de cada veículo (placa, velocidade, ignição, bateria, odômetro), bloquear e desbloquear veículos remotamente, configurar geocercas, acessar o playback de trajetos e gerar relatórios. Disponível para iOS e Android.',
    image: trackmaxThumb,
    thumbType: 'app',
    desktopGallery: [],
    mobileGallery: trackmaxGallery,
    links: [],
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
  const [selected, setSelected] = useState(null);

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
          <h2 className="section-heading">Veja o que já fizemos</h2>
          <p className="portfolio__subtitle">
            Resultados reais para negócios reais. Confira alguns dos projetos que
            entregamos.
          </p>
        </motion.div>

        <motion.div
          className="portfolio__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`portfolio-card${
                projects.length % 2 !== 0 && index === projects.length - 1
                  ? ' portfolio-card--full'
                  : ''
              }`}
              variants={cardVariants}
              onClick={() => setSelected(project)}
            >
              <div className="portfolio-card__preview">
                <div
                  className={`portfolio-card__image ${
                    project.thumbType === 'app'
                      ? 'portfolio-card__image--app'
                      : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-card__img"
                  />
                </div>
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__overlay-text">
                    Ver Projeto <HiOutlineArrowRight />
                  </span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <span className="portfolio-card__category">
                  {project.category}
                </span>
                <h3 className="portfolio-card__title">{project.title}</h3>
                <p className="portfolio-card__desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
