import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal__header">
          <div>
            <span className="project-modal__category">{project.category}</span>
            <h2 className="project-modal__title">{project.title}</h2>
          </div>
          <button className="project-modal__close" onClick={onClose} aria-label="Fechar">
            <HiX />
          </button>
        </div>

        <p className="project-modal__summary">{project.summary}</p>

        {project.links?.length > 0 && (
          <div className="project-modal__links">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal__link"
              >
                <link.icon /> {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="project-modal__gallery">
          {project.desktopGallery?.length > 0 && (
            <div className="project-modal__gallery-desktop">
              {project.desktopGallery.map((img, i) => (
                <img
                  key={`d-${i}`}
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
          {project.mobileGallery?.length > 0 && (
            <div className="project-modal__gallery-mobile">
              {project.mobileGallery.map((img, i) => (
                <img
                  key={`m-${i}`}
                  src={img}
                  alt={`${project.title} - mobile ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
