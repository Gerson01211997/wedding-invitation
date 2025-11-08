import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Participation.css";

const Participation = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="Participation-section" id="ceremonia" ref={ref}>
      <div className="Participation-background"></div>

      <div className="Participation-container">
        <div className="Participation-content">
          {/* Participation Details */}
          <div className="Participation-details">
            <motion.h2
              className="Participation-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Con la bendición de Dios unimos nuestras vidas en matrimonio, agradecidos por su amor y fidelidad. Aunque no puedan acompañarnos, su cariño y oraciones son parte de esta alegría que Él nos concede.

            </motion.h2>

            <motion.div
              className="Participation-info"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >

              <div className="info-item">
                <div className="info-text">
                  <p>
                    ‘El amor todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.’
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-text">
                  <p>
                    1 Corintios 13:7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Side Image */}
        <motion.div
          className="Participation-image"
          initial={{ opacity: 0, x: 670, scale: 1.3, rotateY: 90 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1, rotateY: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          <img
            src="https://gerson01211997.github.io/wedding-invitation/photos/15.webp"
            alt="Wedding Participation"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Participation;
