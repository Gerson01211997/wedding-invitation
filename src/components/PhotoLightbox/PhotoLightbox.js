import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const PhotoLightbox = ({ images, isOpen, currentIndex, onClose, onIndexChange }) => {
  // Convertir las imágenes al formato requerido por la librería
  const lightboxImages = images.map(image => ({
    src: image.src,
    alt: image.alt || 'Wedding photo',
    width: image.width || 2777,
    height: image.height || 4160
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={lightboxImages}
      index={currentIndex}
      on={{
        view: ({ index }) => onIndexChange && onIndexChange(index)
      }}
      animation={{ fade: 300 }}
      controller={{ closeOnBackdropClick: true }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        slide: { padding: '20px' }
      }}
    />
  );
};

export default PhotoLightbox;
