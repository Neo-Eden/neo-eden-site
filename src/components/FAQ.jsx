import { useState } from 'react';

const FAQS = [
  { q: 'Quanto tempo leva um projeto?', a: 'Depende do escopo, mas a maioria fica pronta em <strong>4 a 8 semanas</strong>. Você sabe o prazo exato antes de começar. Nada de "vai ficando pronto".' },
  { q: 'Quanto custa?', a: 'Trabalhamos com <strong>preço fechado por projeto</strong>. Depois do diagnóstico, que é gratuito, você recebe um orçamento claro, sem letra miúda.' },
  { q: 'Preciso entender de tecnologia?', a: 'Não. A gente traduz tudo para a sua linguagem. <strong>Você fala do problema, a gente cuida da parte técnica</strong>, do começo ao fim.' },
  { q: 'E se eu já tiver um sistema?', a: 'A gente <strong>integra, melhora ou substitui</strong> o que já existe. Não jogamos fora o que funciona só para refazer do zero.' },
  { q: 'Vocês somem depois da entrega?', a: 'Não. Oferecemos <strong>suporte e evolução contínua</strong>, e você sempre fala com quem construiu o seu sistema.' },
  { q: 'Como a gente começa?', a: 'Com uma <strong>conversa de diagnóstico, sem custo</strong>. Entendemos o seu problema e mostramos o caminho, sem compromisso.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="frame">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Dúvidas comuns</span>
            <h2 className="sec-title">
              O que todo mundo <span className="a">pergunta antes</span>
            </h2>
          </div>
          <p className="sec-lead">
            Se ficar qualquer dúvida, é só chamar. A primeira conversa é sempre sem compromisso.
          </p>
        </div>
        <ul className="faq reveal reveal-stagger">
          {FAQS.map((f, i) => (
            <li className={'faq-row' + (open === i ? ' open' : '')} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="qt">{f.q}</span>
                <span className="qx">+</span>
              </div>
              <div className="faq-a-wrap">
                <div className="faq-a">
                  <p dangerouslySetInnerHTML={{ __html: f.a }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
