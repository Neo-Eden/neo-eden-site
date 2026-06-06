import { useState } from 'react';
import Icon from './Icon.jsx';

const NEEDS = ['Atendimento / suporte', 'Sistema sob medida', 'Aplicativo', 'Automação', 'IA', 'Ainda não sei'];

// Contatos reais (restaurados do site anterior). Confirmar se seguem atuais.
const WEB3FORMS_KEY = '07747be7-1bdf-479a-b526-c6d4375ce2ef';
const CONTACT = {
  whatsappLabel: '(22) 99945-2824',
  whatsappUrl: 'https://wa.me/5522999452824',
  email: 'neoedendev2022@gmail.com',
};

export default function Contact() {
  const [need, setNeed] = useState(NEEDS[0]);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | error

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.target);
    fd.append('access_key', WEB3FORMS_KEY);
    fd.append('from_name', fd.get('name') || 'Site Neo Eden');
    fd.append('subject', `[Neo Eden] Novo contato — ${need}`);
    fd.append('Necessidade', need);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) setSent(true);
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contato">
      <div className="frame">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Falar com a Neo Eden</span>
            <h2 className="contact-h">
              Vamos resolver o <span className="a">gargalo</span> do seu negócio?
            </h2>
            <p className="contact-lead">
              Conte o que está travando. Em até 24h úteis nossa equipe responde com um caminho, não
              com um catálogo.
            </p>
            <ul className="channels">
              <li>
                <a className="channel" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="cic">
                    <Icon name="whatsapp" size={18} />
                  </span>
                  <div>
                    <div className="cn">WhatsApp</div>
                    <div className="cv">{CONTACT.whatsappLabel}</div>
                  </div>
                  <span className="carr">
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a className="channel" href={`mailto:${CONTACT.email}`}>
                  <span className="cic">
                    <Icon name="mail" size={18} />
                  </span>
                  <div>
                    <div className="cn">E-mail</div>
                    <div className="cv">{CONTACT.email}</div>
                  </div>
                  <span className="carr">
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a className="channel" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="cic">
                    <Icon name="calendar" size={18} />
                  </span>
                  <div>
                    <div className="cn">Agendar conversa</div>
                    <div className="cv">Diagnóstico gratuito · 30 min</div>
                  </div>
                  <span className="carr">
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="form reveal">
            {sent ? (
              <div className="form-sent">
                <div className="ck">
                  <Icon name="check" size={24} />
                </div>
                <h4>Recebido. Já estamos vendo.</h4>
                <p>
                  Um especialista responde em até 24h úteis com um primeiro caminho para o seu
                  problema.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                {/* honeypot anti-spam */}
                <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
                <div className="form-label">O que você precisa resolver?</div>
                <div className="radios">
                  {NEEDS.map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={'radio' + (need === n ? ' on' : '')}
                      onClick={() => setNeed(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="field">
                  <label htmlFor="c-name">Seu nome</label>
                  <input id="c-name" name="name" required placeholder="Como podemos te chamar" />
                </div>
                <div className="field">
                  <label htmlFor="c-company">Empresa</label>
                  <input id="c-company" name="company" placeholder="Nome da empresa" />
                </div>
                <div className="field">
                  <label htmlFor="c-contact">WhatsApp ou e-mail</label>
                  <input id="c-contact" name="contato" required placeholder="Onde a gente te responde" />
                </div>
                <div className="field">
                  <label htmlFor="c-message">O que está travando?</label>
                  <textarea id="c-message" name="message" placeholder="Descreva o problema em poucas linhas" />
                </div>
                <div className="form-foot">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando…' : 'Falar com nossa equipe'}
                    {status !== 'sending' && (
                      <span className="arr">
                        <Icon name="arrow" size={16} />
                      </span>
                    )}
                  </button>
                  <span className="form-sla">Resposta em 24h úteis</span>
                </div>
                {status === 'error' && (
                  <p className="form-error">
                    Não consegui enviar agora. Tenta de novo ou chama no{' '}
                    <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
