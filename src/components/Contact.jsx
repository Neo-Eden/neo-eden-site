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

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <HiOutlineMail />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">contato@neo-eden.com.br</span>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <HiOutlinePhone />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Telefone</span>
                  <span className="contact__detail-value">+55 (11) 9999-0000</span>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <HiOutlineLocationMarker />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Localização</span>
                  <span className="contact__detail-value">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-name">Nome</label>
                <input type="text" id="contact-name" className="form-input" placeholder="Seu nome" />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" className="form-input" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-subject">Assunto</label>
              <input type="text" id="contact-subject" className="form-input" placeholder="Sobre o que deseja conversar?" />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-message">Mensagem</label>
              <textarea id="contact-message" className="form-input" placeholder="Conte-nos sobre seu projeto..." />
            </div>
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
