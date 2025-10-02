import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Family.css';

const Family = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="family-section" id="family" ref={ref}>
      <div className="family-background"></div>
      
      {/* Floating Photos */}
      <motion.div 
        className="family-photo family-photo-1"
        initial={{ opacity: 0, y: -240, scale: 0.6, rotate: -35, rotateX: -50, rotateY: 50 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="https://framerusercontent.com/images/NFKDFuag2WnlURYLzXnNJSbMYhw.jpg?width=1080&height=1270" 
          alt="Family photo" 
        />
      </motion.div>

      <motion.div 
        className="family-photo family-photo-2"
        initial={{ opacity: 1, y: -240, rotate: -132, rotateX: 40, rotateY: 60 }}
        animate={inView ? { opacity: 1, y: 0, rotate: 0, rotateX: 0, rotateY: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="https://framerusercontent.com/images/rKbWTQRlkWc8bFu5eLAVafcYma4.jpg?width=1038&height=1600" 
          alt="Family photo" 
        />
      </motion.div>

      <motion.div 
        className="family-photo family-photo-3"
        initial={{ opacity: 1, y: 350, scale: 0.6, rotate: 75, rotateX: 70, rotateY: -60 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="https://framerusercontent.com/images/Z3ERTWn3xcrjxDNcZAvHC7O3io.jpg?width=751&height=1280" 
          alt="Family photo" 
        />
      </motion.div>

      <motion.div 
        className="family-photo family-photo-4"
        initial={{ opacity: 1, y: 350, scale: 0.6, rotate: 156, rotateX: -50, rotateY: 90 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="https://framerusercontent.com/images/X5RzlQRQdTimujAFSdhXAKDoadQ.jpg?width=768&height=1344" 
          alt="Family photo" 
        />
      </motion.div>

      {/* Main Content */}
      <div className="family-content">
        <motion.h2 
          className="family-title branch-title"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        >
          CON LA BENDICIÓN DE DIOS Y NUESTROS PADRES
        </motion.h2>
      </div>
    </section>
  );
};

export default Family;