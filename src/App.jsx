import { useReveal, useCountUp, useLive, useActiveSection, NAV } from './lib/hooks.js';
import { Grain, ScrollProgress, Navbar } from './components/Chrome.jsx';
import Hero from './components/Hero.jsx';
import Problems from './components/Problems.jsx';
import Solutions from './components/Solutions.jsx';
import Cases from './components/Cases.jsx';
import Portfolio from './components/Portfolio.jsx';
import Diff, { Impact } from './components/Diff.jsx';
import Track from './components/Track.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import About from './components/About.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const SECTION_IDS = NAV.map((n) => n.id);

export default function App() {
  useReveal();
  useCountUp();
  useLive();
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <Grain />
      <ScrollProgress />
      <Navbar active={active} />
      <Hero />
      <Problems />
      <Solutions />
      <Cases />
      <Portfolio />
      <Diff />
      <Impact />
      <Track />
      <Process />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
