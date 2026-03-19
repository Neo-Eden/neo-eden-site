import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function Loader({ onComplete }) {
  return (
    <motion.div
      className="page-loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="page-loader__content">
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M6 30V6L30 30V6"
            stroke="#1CE07A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx="6"
            cy="6"
            r="3"
            fill="#1CE07A"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            onAnimationComplete={onComplete}
          />
        </motion.svg>
        <motion.span
          className="page-loader__text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Neo Eden
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onComplete={() => setTimeout(() => setLoading(false), 500)} />
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Services />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Portfolio />
        <hr className="section-divider" />
        <Process />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
