import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
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
