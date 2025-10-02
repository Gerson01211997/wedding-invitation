import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './InspirationBoard.css';

const InspirationBoard = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="inspiration-section" id="inspiration" ref={ref}>
      <div className="inspiration-content">
        <motion.div 
          className="inspiration-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="ceremony-title">Inspiration board</h2>
          <p className="inspiration-description satoshi-text">
            Es muy importante que el día de nuestra boda todos brillen y se sientan radiantes. 
            Pensando en ustedes, hemos creado un tablero en Pinterest con ideas de inspiración 
            para que puedan escoger su vestimenta con más facilidad y estilo. Escojan un look 
            con el que se sientan cómodos, especiales y en sintonía con la celebración.
          </p>
        </motion.div>

        <motion.div
          className="inspiration-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a 
            href="https://pin.it/6oBvwya7V"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary pinterest-btn"
          >
            <div className="pinterest-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 0C5.373 0 0 5.373 0 12C0 17.087 3.161 21.432 7.625 23.18C7.516 22.232 7.427 20.771 7.664 19.733C7.882 18.796 9.067 13.768 9.067 13.768C9.067 13.768 8.711 13.047 8.711 11.99C8.711 10.321 9.679 9.077 10.884 9.077C11.911 9.077 12.405 9.847 12.405 10.766C12.405 11.793 11.752 13.334 11.407 14.765C11.121 15.961 12.01 16.938 13.185 16.938C15.319 16.938 16.958 14.686 16.958 11.447C16.958 8.573 14.894 6.568 11.941 6.568C8.524 6.568 6.518 9.125 6.518 11.773C6.518 12.8 6.913 13.907 7.408 14.509C7.493 14.602 7.523 14.733 7.487 14.854C7.397 15.229 7.19 16.049 7.15 16.217C7.101 16.435 6.973 16.484 6.745 16.375C5.245 15.674 4.306 13.491 4.306 11.723C4.306 7.941 7.052 4.464 12.237 4.464C16.395 4.464 19.634 7.426 19.634 11.398C19.634 15.535 17.027 18.864 13.412 18.864C12.197 18.864 11.052 18.232 10.667 17.482L9.916 20.335C9.65 21.382 8.918 22.687 8.425 23.486C9.55 23.832 10.736 24.02 11.98 24.02C18.608 24.02 23.98 18.647 23.98 12.02C24 5.373 18.628 0 12 0Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            Ir al board de pinterest
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InspirationBoard;