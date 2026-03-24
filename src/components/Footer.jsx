import { motion } from 'framer-motion';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
];

const serviceLinks = [
  { label: 'Branding', href: '#servicos' },
  { label: 'Web Dev', href: '#servicos' },
  { label: 'UI/UX', href: '#servicos' },
  { label: 'Marketing', href: '#servicos' },
];

const contactLinks = [
  { label: 'Email', href: 'mailto:contato@neo-eden.com.br' },
  { label: 'Formulário', href: '#contato' },
  { label: 'WhatsApp', href: '#' },
];

const socials = [
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
  { icon: <FaTwitter />, label: 'Twitter', href: '#' },
  { icon: <HiOutlineGlobeAlt />, label: 'Website', href: '#' },
];

function FooterColumn({ title, links }) {
  return (
    <motion.div variants={fadeUp}>
      <h4 className="footer__column-title">{title}</h4>
      <div className="footer__links">
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="footer__link">{label}</a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Brand */}
          <motion.div className="footer__brand" variants={fadeUp}>
            <div className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 30V6L30 30V6" stroke="#1CE07A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="6" r="3" fill="#1CE07A" opacity="0.4"/>
              </svg>
              <span className="footer__logo-name">Neo Eden</span>
            </div>
            <p className="footer__brand-desc">
              Studio digital especializado em criar sites, marcas e estratégias que geram resultados para o seu negócio.
            </p>
          </motion.div>

          <FooterColumn title="Navegação" links={navLinks} />
          <FooterColumn title="Serviços" links={serviceLinks} />
          <FooterColumn title="Contato" links={contactLinks} />
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="footer__copyright">
            © {year} Neo Eden Digital Studio. Todos os direitos reservados.
          </span>
          <div className="footer__socials">
            {socials.map(({ icon, label, href }) => (
              <a key={label} href={href} className="footer__social" aria-label={label}>{icon}</a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
