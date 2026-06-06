import logoMark from '../assets/logo-n.png';

export default function Logo({ size = 30, word = true }) {
  return (
    <span className="brand">
      <img className="brand-mark" src={logoMark} alt="Neo Eden" style={{ height: size }} />
      {word && (
        <span className="brand-word">
          Neo <span className="e">Eden</span>
        </span>
      )}
    </span>
  );
}
