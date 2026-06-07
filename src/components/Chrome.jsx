import { useEffect, useRef, useState } from 'react';
import { scrollToId, NAV } from '../lib/hooks.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';

/* Grão de filme sutil sobre toda a página. */
export function Grain() {
  return <div className="grain" />;
}

/* Barra de progresso de scroll no topo. */
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      if (ref.current) ref.current.style.width = p * 100 + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="progress" ref={ref} style={{ width: '0%' }} />;
}

export function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };
  return (
    <header className="nav">
      <div className="frame nav-inner">
        <a href="#top" onClick={(e) => go(e, 'top')}>
          <Logo />
        </a>
        <nav className="nav-links">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={'#' + n.id}
              onClick={(e) => go(e, n.id)}
              className={'nav-link' + (active === n.id ? ' active' : '')}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a
            href="#acompanhar"
            onClick={(e) => go(e, 'acompanhar')}
            className="btn btn-ghost btn-sm nav-track"
          >
            <Icon name="layers" size={15} /> Acompanhar projeto
          </a>
          <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-primary btn-sm">
            Falar com um especialista{' '}
            <span className="arr">
              <Icon name="arrow" size={15} />
            </span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile frame">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={'#' + n.id}
              onClick={(e) => go(e, n.id)}
              className={'nav-link' + (active === n.id ? ' active' : '')}
            >
              {n.label}
            </a>
          ))}
          <a href="#acompanhar" onClick={(e) => go(e, 'acompanhar')} className="btn btn-ghost">
            <Icon name="layers" size={15} /> Acompanhar projeto
          </a>
          <a href="#contato" onClick={(e) => go(e, 'contato')} className="btn btn-primary">
            Falar com um especialista{' '}
            <span className="arr">
              <Icon name="arrow" size={15} />
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
