import React from 'react';
import './PhotoGalleryModal.css';

const PhotoGalleryModal = ({ isOpen, close, photos }) => {
  if (!isOpen) return null;

  return (
    <div className="modalBackdrop" onClick={close}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <a onClick={close} className='closeButton'>
                Close gallery
        </a>
        <div className="gallery">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Gallery ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal