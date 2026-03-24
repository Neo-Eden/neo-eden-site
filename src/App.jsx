import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import neoEdenLogo from './assets/neo-eden.svg';
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
        <motion.img
          src={neoEdenLogo}
          alt=""
          className="page-loader__logo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={onComplete}
        />
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
