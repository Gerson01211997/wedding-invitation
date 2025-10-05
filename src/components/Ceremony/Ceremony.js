import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Ceremony.css';

const Ceremony = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="ceremony-section" id="ceremonia" ref={ref}>
      <div className="ceremony-background"></div>

      <div className="ceremony-container">
        <div className="ceremony-content">
          {/* Ceremony Details */}
          <div className="ceremony-details">
            <motion.h2 
              className="ceremony-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Ceremonia y recepción
            </motion.h2>
            
            <motion.div 
              className="ceremony-info"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="info-text">
                  <p><strong>Hora:</strong> 6:30 pm</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="info-text">
                  <p><strong>Lugar:</strong> Salón de eventos Sabana Imperial</p>
                </div>
              </div>
            </motion.div>

           

            <motion.div
              className="ceremony-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a 
                href="https://maps.app.goo.gl/dcYiaXWSqSqfozFZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ver Ubicación
              </a>
            </motion.div>
            <motion.div
              className="confirmation-message"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <div className="confirmation-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="confirmation-text">
                Te contactaremos próximamente para confirmar tu asistencia
              </p>
            </motion.div>
          </div>
        </div>

        {/* Side Image */}
        <motion.div 
          className="ceremony-image"
          initial={{ opacity: 0, x: 670, scale: 1.3, rotateY: 90 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1, rotateY: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          <img 
            src="https://gerson01211997.github.io/wedding-invitation/photos/15.webp" 
            alt="Wedding ceremony" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Ceremony;