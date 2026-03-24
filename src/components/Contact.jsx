import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import './Contact.css';

const WEB3FORMS_KEY = '07747be7-1bdf-479a-b526-c6d4375ce2ef';

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
  { icon: <HiOutlineMail />, label: 'Email', value: 'lettsantos2022@gmail.com', href: 'mailto:lettsantos2022@gmail.com' },
  { icon: <HiOutlinePhone />, label: 'WhatsApp', value: '(22) 99945-2824', href: 'https://wa.me/5522999452824' },
  { icon: <HiOutlineLocationMarker />, label: 'Localização', value: 'Campos dos Goytacazes, RJ' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: form.name,
          subject: `[Neo Eden] ${form.subject}`,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            <h2 className="section-heading">Vamos conversar sobre seu projeto</h2>
            <p className="contact__description">
              Conta pra gente o que você precisa. Respondemos rápido e sem compromisso.
            </p>

            <motion.div
              className="contact__details"
              variants={staggerDetails}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {contactDetails.map(({ icon, label, value, href }) => (
                <motion.div key={label} className="contact__detail" variants={detailItem}>
                  <div className="contact__detail-icon">{icon}</div>
                  <div className="contact__detail-text">
                    <span className="contact__detail-label">{label}</span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="contact__detail-value contact__detail-link">{value}</a>
                    ) : (
                      <span className="contact__detail-value">{value}</span>
                    )}
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
            onSubmit={handleSubmit}
          >
            <motion.div className="contact__form-row" variants={formItem}>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-name">Nome</label>
                <input type="text" id="contact-name" name="name" className="form-input" placeholder="Seu nome" required value={form.name} onChange={handleChange} />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" className="form-input" placeholder="seu@email.com" required value={form.email} onChange={handleChange} />
              </div>
            </motion.div>
            <motion.div className="contact__form-group" variants={formItem}>
              <label className="contact__form-label" htmlFor="contact-subject">Assunto</label>
              <input type="text" id="contact-subject" name="subject" className="form-input" placeholder="Sobre o que deseja conversar?" required value={form.subject} onChange={handleChange} />
            </motion.div>
            <motion.div className="contact__form-group" variants={formItem}>
              <label className="contact__form-label" htmlFor="contact-message">Mensagem</label>
              <textarea id="contact-message" name="message" className="form-input" placeholder="Conte-nos sobre seu projeto..." required value={form.message} onChange={handleChange} />
            </motion.div>
            <motion.div variants={formItem}>
              <button type="submit" className="btn-primary btn-glow" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </motion.div>
            {status === 'success' && (
              <motion.p className="contact__feedback contact__feedback--success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                Mensagem enviada com sucesso! Responderemos em breve.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p className="contact__feedback contact__feedback--error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
