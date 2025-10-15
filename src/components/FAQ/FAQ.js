import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 'gifts',
      question: 'Regalos',
      answer: 'Lluvia de sobres'
    },
    {
      id: 'children',
      question: '¿Estarán permitidos los niños?',
      answer: 'Amamos a los niños, pero en esta ocasión deseamos que los papás se relajen y disfruten con nosotros, por eso la celebración será únicamente para adultos'
    },
    {
      id: 'parking',
      question: '¿Parqueadero?',
      answer: 'El lugar cuenta con parqueadero externo e interno, siéntete libre de ir con tu vehículo'
    },
    {
      id: 'colors',
      question: '¿Colores reservados?',
      answer: 'El blanco'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq" ref={ref}>
      <div className="faq-content">
        <motion.h2 
          className="faq-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span className="question-text">{faq.question}</span>
                <div className="faq-icon">
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
                  </motion.svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="answer-content">
                      <p className="satoshi-text">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;