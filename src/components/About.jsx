import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const num = parseFloat(target);
    const isDecimal = !Number.isInteger(num);
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(isDecimal ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: 100, suffix: '%', label: 'Projetos entregues' },
  { value: 4.9, suffix: '', label: 'Avaliação média' },
  { value: 24, suffix: 'h', label: 'Tempo de resposta' },
];

const svgLayers = [
  { d: 'M20 120V20L120 120V20', width: 4, delay: 0, targetOpacity: 0.15 },
  { d: 'M30 110V30L110 110V30', width: 3, delay: 0.3, targetOpacity: 0.3 },
  { d: 'M40 100V40L100 100V40', width: 2.5, delay: 0.6, targetOpacity: 0.6 },
  { d: 'M50 90V50L90 90V50', width: 2, delay: 0.9, targetOpacity: 1 },
];

const svgCircles = [
  { cx: 50, cy: 50, r: 4, opacity: 0.4, delay: 1.3 },
  { cx: 40, cy: 40, r: 3, opacity: 0.25, delay: 1.5 },
  { cx: 30, cy: 30, r: 2.5, opacity: 0.15, delay: 1.7 },
];

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="section-tag">// Sobre nós</span>
            <h2 className="section-heading">Quem somos e por que existimos</h2>
            <p className="about__description">
              A Neo Eden é um studio digital que ajuda empresas a vender mais usando design e tecnologia.
              Criamos sites, marcas e estratégias que trazem resultados reais — mais clientes, mais vendas,
              mais crescimento.
            </p>
            <p className="about__description">
              Nosso diferencial é simples: entregamos trabalho de alto nível com atendimento próximo.
              Você não vai ser mais um número aqui. Cada projeto recebe atenção total do início ao fim.
            </p>
          </motion.div>

          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__visual-frame">
              <svg
                className="about__visual-n"
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {svgLayers.map((layer, i) => (
                  <motion.path
                    key={i}
                    d={layer.d}
                    stroke="#1CE07A"
                    strokeWidth={layer.width}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: layer.targetOpacity }}
                    viewport={{ once: true }}
                    transition={{
                      pathLength: { duration: 1.8, delay: layer.delay, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.4, delay: layer.delay },
                    }}
                  />
                ))}
                {svgCircles.map((circle, i) => (
                  <motion.circle
                    key={i}
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill="#1CE07A"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: circle.opacity, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: circle.delay, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-item__value">
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="stat-item__label">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
