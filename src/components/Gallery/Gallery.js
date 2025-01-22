import React, { useState } from 'react';
import styles from './Gallery.module.css';


import img1 from '../../imgs/01.jpg'
import img2 from '../../imgs/02.jpg'
import img3 from '../../imgs/03.jpg'
import img4 from '../../imgs/04.jpg'
import img5 from '../../imgs/05.jpg'
import img6 from '../../imgs/06.png'
import img7 from '../../imgs/07.jpg'
import img8 from '../../imgs/08.jpg'
import img9 from '../../imgs/09.jpg'
import img10 from '../../imgs/10.jpg'

const Gallery = () => {
  const [popup, setPopup] = useState({ isOpen: false, imgSrc: '' });

  const openPopup = (imgSrc) => {
    setPopup({ isOpen: true, imgSrc });
  };

  const closePopup = () => {
    setPopup({ isOpen: false, imgSrc: '' });
  };

  const images = [
    { src: img1, alt: 'Clean Desktop' },
    { src: img2, alt: 'Modern Desktop' },
    { src: img3, alt: 'Astronauts' },
    { src: img4, alt: 'Multi Screens Workout' },
    { src: img5, alt: 'Reading Desktop' },
    { src: img6, alt: 'Modern Design' },
    { src: img7, alt: 'Modern Study' },
    { src: img8, alt: 'Analysing' },
    { src: img9, alt: 'Statistics' },
    { src: img10, alt: 'Professional Work' },
  ];

  return (
    <div className={`${styles.gallery} gallery id="gallery"`}>
      <div className={styles.container}>
        <h2>Gallery</h2>
        <div className={styles.galleryBox}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openPopup(image.src)}
            />
          ))}
        </div>
      </div>

      {popup.isOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupBox}>
            <span className={styles.closeButton} onClick={closePopup}>
              &times;
            </span>
            <h3>{popup.imgSrc.split('/').pop().split('.')[0]}</h3>
            <img src={popup.imgSrc} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
