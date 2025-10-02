import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhotoLightbox from '../PhotoLightbox/PhotoLightbox';
import './Confirmation.css';

const Confirmation = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Estados para el lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = Array.from({ length: 17 }, (_, index) => ({
    src: `/photos/${index + 1}.webp`,
    alt: `Wedding photo ${index + 1}`,
    width: 800,
    height: 600
  }));

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="confirmation-section" id="confirmacion" ref={ref}>
      {/* Photo Gallery */}
      <div className="photo-gallery">
        <div className="gallery-scroll">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="gallery-item clickable-photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="photo-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

  
        <PhotoLightbox
          images={galleryImages}
          isOpen={lightboxOpen}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setCurrentImageIndex}
        />
    </section>
  );
};

export default Confirmation;