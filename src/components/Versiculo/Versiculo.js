import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './DressCode.css';

const Versiculo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="dresscode-section" id="dresscode" ref={ref}>
      <div className="dresscode-container">
        <div className="dresscode-content">
          <motion.h2 
            className="dresscode-title branch-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            "Por encima de todo, vístanse de amor, que es el vínculo perfecto"
          </motion.h2>

          <div className="dresscode-details" sytle={{marginTop: "-10px"}}>
            {/* Women's Dress Code */}
            <motion.div 
              className="dress-section"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="dress-requirements" >
                <p>Colosenses 3:14 (NVI)</p>
              </div>
              <div className="dress-requirements" >
                <img src="../../../public/photos/svg.svg"/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versiculo;