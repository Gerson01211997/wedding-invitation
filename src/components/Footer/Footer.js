import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="footer-section" id="footer" ref={ref}>
      <div className="footer-content">
        {/* Logo */}
        <motion.div 
          className="footer-logo"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img 
            src="https://framerusercontent.com/images/Cqin7vfPYlJdneIamI0M2Lh6wE.png?width=1747&height=1694" 
            alt="Wedding logo" 
          />
        </motion.div>

        {/* Hashtag */}
        <motion.div 
          className="footer-hashtag"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="hashtag-text branch-title">#Nabarros</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;