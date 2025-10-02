import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-15T19:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tickerTexts = [
    "We are getting married",
    "Nos vamos a casar",
    "私たちは結婚するつもりです",
    "Ci sposeremo"
  ];

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-background"></div>
      
      {/* Ticker */}
      <div className="ticker-container">
        <div className="ticker">
          {tickerTexts.map((text, index) => (
            <span key={index} className="ticker-item branch-title">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Photos */}
      <motion.div 
        className="floating-photo photo-1"
        initial={{ opacity: 0, rotate: -40, rotateX: -50, rotateY: -50, x: -250, y: -280 }}
        animate={inView ? { opacity: 1, rotate: 30, rotateX: 0, rotateY: 0, x: 0, y: 0 } : {}}
        transition={{ delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="./photos/12.webp" 
          alt="Wedding couple" 
        />
      </motion.div>

      <motion.div 
        className="floating-photo photo-2"
        initial={{ opacity: 1, rotate: 40, rotateX: -40, rotateY: 50, scale: 0.3, x: 220, y: 310 }}
        animate={inView ? { opacity: 1, rotate: -30, rotateX: 0, rotateY: 0, scale: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="./photos/13.webp" 
          alt="Wedding couple" 
        />
      </motion.div>

      <motion.div 
        className="floating-photo photo-3"
        initial={{ opacity: 1, rotate: 90, rotateX: -70, rotateY: 40, scale: 0.6, skewX: 20 }}
        animate={inView ? { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0 } : {}}
        transition={{ delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      >
        <img 
          src="./photos/6.webp" 
          alt="Wedding couple" 
        />
      </motion.div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.h1 
          className="hero-title branch-title"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
        >
          Gerson & Kathe
        </motion.h1>
        
        <div className="hero-date">
          <p className="satoshi-text">Fecha: 15 Noviembre 2025</p>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown-container">
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">días</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">horas</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">min</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">seg</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;