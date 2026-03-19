import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerDetails = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const detailItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerForm = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const formItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const contactDetails = [
  { icon: <HiOutlineMail />, label: 'Email', value: 'contato@neo-eden.com.br' },
  { icon: <HiOutlinePhone />, label: 'Telefone', value: '+55 (11) 9999-0000' },
  { icon: <HiOutlineLocationMarker />, label: 'Localização', value: 'São Paulo, Brasil' },
];

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="section-tag">// Contato</span>
            <h2 className="section-heading">Vamos criar algo extraordinário</h2>
            <p className="contact__description">
              Pronto para transformar sua presença digital? Entre em contato e vamos
              discutir como podemos dar vida à sua visão.
            </p>

            <motion.div
              className="contact__details"
              variants={staggerDetails}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {contactDetails.map(({ icon, label, value }) => (
                <motion.div key={label} className="contact__detail" variants={detailItem}>
                  <div className="contact__detail-icon">{icon}</div>
                  <div className="contact__detail-text">
                    <span className="contact__detail-label">{label}</span>
                    <span className="contact__detail-value">{value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            className="contact__form"
            variants={staggerForm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div className="contact__form-row" variants={formItem}>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-name">Nome</label>
                <input type="text" id="contact-name" className="form-input" placeholder="Seu nome" />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" className="form-input" placeholder="seu@email.com" />
              </div>
            </motion.div>
            <motion.div className="contact__form-group" variants={formItem}>
              <label className="contact__form-label" htmlFor="contact-subject">Assunto</label>
              <input type="text" id="contact-subject" className="form-input" placeholder="Sobre o que deseja conversar?" />
            </motion.div>
            <motion.div className="contact__form-group" variants={formItem}>
              <label className="contact__form-label" htmlFor="contact-message">Mensagem</label>
              <textarea id="contact-message" className="form-input" placeholder="Conte-nos sobre seu projeto..." />
            </motion.div>
            <motion.div variants={formItem}>
              <button type="submit" className="btn-primary btn-glow">Enviar Mensagem</button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
