import { useEffect, useState } from 'react';

/* Itens do menu — id da seção + rótulo. */
export const NAV = [
  { id: 'problemas', label: 'Problemas' },
  { id: 'solucoes', label: 'Soluções' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'acompanhar', label: 'Portal' },
  { id: 'processo', label: 'Processo' },
  { id: 'contato', label: 'Contato' },
];

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reveal on scroll — observa todos os .reveal e marca .in quando entram na tela.
   Em containers .reveal-stagger / .reveal-x, numera os filhos (--i) para a cascata.
   Sem array de deps de propósito: re-observa nós montados depois (ex.: FAQ expandida). */
export function useReveal() {
  useEffect(() => {
    const setIndices = (el) => {
      if (el.classList.contains('reveal-stagger') || el.classList.contains('reveal-x')) {
        Array.from(el.children).forEach((c, i) => c.style.setProperty('--i', i));
      }
    };
    const els = document.querySelectorAll('.reveal:not(.in)');
    els.forEach(setIndices);
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((e) => io.observe(e));
    // Rede de segurança: nunca deixar conteúdo invisível se o observer não disparar.
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((e) => e.classList.add('in'));
    }, 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  });
}

/* Números que contam de 0 até o valor (data-count) ao entrar na tela. */
export function useCountUp() {
  useEffect(() => {
    const reduce = prefersReduced();
    const els = Array.from(document.querySelectorAll('[data-count]:not([data-counted])'));
    const final = (el) =>
      (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '');
    const run = (el) => {
      el.setAttribute('data-counted', '');
      const target = parseFloat(el.dataset.count);
      if (reduce || Number.isNaN(target)) {
        el.textContent = final(el);
        return;
      }
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dur = 1100;
      let startTs = null;
      const tick = (now) => {
        if (startTs === null) startTs = now;
        const p = Math.min(1, (now - startTs) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = final(el);
      };
      requestAnimationFrame(tick);
    };
    // Evita "flash" do valor final antes de contar.
    if (!reduce) els.forEach((el) => (el.textContent = (el.dataset.prefix || '') + '0' + (el.dataset.suffix || '')));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(run);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* Mockups (.mock) "ligam" (.live) ao entrar na tela; .inview pausa loops fora dela. */
export function useLive() {
  useEffect(() => {
    const mocks = document.querySelectorAll('.mock');
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      mocks.forEach((m) => m.classList.add('live', 'inview'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('live', 'inview');
          else e.target.classList.remove('inview');
        });
      },
      { threshold: 0.25 },
    );
    mocks.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);
}

/* Destaca o link da navbar conforme a seção visível. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

/* Scroll suave para uma seção, compensando a navbar fixa (64px). */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 64,
      behavior: 'smooth',
    });
  }
}
