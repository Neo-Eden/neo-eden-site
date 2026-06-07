/* Ícones de traço simples, geométrico. */
const ICONS = {
  inbox: 'M3 12h4l2 3h6l2-3h4 M3 12V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6 M3 12v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6',
  scatter: 'M5 5h5v5H5z M14 14h5v5h-5z M14 6.5h5 M5 17.5h5 M16.5 5v5 M7.5 14v5',
  trend: 'M4 18 L10 12 L14 15 L20 7 M20 7h-4 M20 7v4',
  unplug: 'M9 4v6 M15 4v6 M7 10h10v3a5 5 0 0 1-10 0z M12 18v3',
  repeat: 'M4 9a8 8 0 0 1 14-3 M20 6V2 M20 15a8 8 0 0 1-14 3 M4 18v4 M18 6h-4 M6 18h4',
  hourglass: 'M6 3h12 M6 21h12 M7 3c0 5 5 6 5 9s-5 4-5 9 M17 3c0 5-5 6-5 9s5 4 5 9',
  app: 'M5 3h6v6H5z M13 3h6v6h-6z M5 11h6v6H5z M13 11h6v6h-6z',
  layers: 'M12 3 3 8l9 5 9-5-9-5z M3 13l9 5 9-5 M3 18l9 5 9-5',
  bot: 'M12 3v3 M8 9h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z M9.5 13v1.5 M14.5 13v1.5 M4 12v3 M20 12v3',
  cog: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M12 2v3 M12 19v3 M5 5l2 2 M17 17l2 2 M2 12h3 M19 12h3 M5 19l2-2 M17 7l2-2',
  link: 'M9 12h6 M10 8H7a4 4 0 0 0 0 8h3 M14 8h3a4 4 0 0 1 0 8h-3',
  whatsapp: 'M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z M8.5 8.5c0 4 3 7 7 7 1 0 1.3-1.3 1-1.6l-2-1.2-1.2 1.2c-1.4-.6-2.4-1.6-3-3l1.2-1.2-1.2-2c-.3-.3-1.8 0-1.8 1z',
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z M16.6 7.4v.01',
  mail: 'M3 6h18v12H3z M3 7l9 6 9-6',
  calendar: 'M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4 M8 13h2v2H8z',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  check: 'M5 12l5 5L19 7',
  box: 'M12 3 21 7.5v9L12 21 3 16.5v-9z M3 7.5l9 4.5 9-4.5 M12 12v9',
  gauge: 'M3 16a9 9 0 0 1 18 0 M3 16h2 M19 16h2 M12 16l4-4',
  users: 'M9 11a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z M3 20a6 6 0 0 1 12 0 M16.5 4.6a3 3 0 0 1 0 6 M17 14.2a6 6 0 0 1 4 5.8',
  menu: 'M6 3h12v18H6z M9.5 8h5 M9.5 12h5 M9.5 16h3',
};

export default function Icon({ name, size = 20, sw = 1.6, className }) {
  const d = ICONS[name] || ICONS.app;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d.split(' M').map((seg, i) => (
        <path key={i} d={(i ? 'M' : '') + seg} />
      ))}
    </svg>
  );
}
