import React, { useState, useEffect } from 'react';
import styles from './SettingsBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';



const SettingsBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [randomBackground, setRandomBackground] = useState('yes');
  const [showBullets, setShowBullets] = useState('show');

  useEffect(() => {
    // Check and set color from localStorage
    const storedColor = localStorage.getItem('color_option');
    if (storedColor) {
      document.documentElement.style.setProperty('--main-color', storedColor);
    }

    // Check and set background option from localStorage
    const storedBackground = localStorage.getItem('background_option');
    if (storedBackground) {
      setRandomBackground(storedBackground === 'true' ? 'yes' : 'no');
    }

    // Check and set bullets option from localStorage
    const storedBullets = localStorage.getItem('bullets_option');
    if (storedBullets) {
      setShowBullets(storedBullets === 'block' ? 'show' : 'hide');
    }
  }, []);

  useEffect(() => {
    if (randomBackground === 'yes') {
      const imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
      const randomizeImgs = () => {
        setInterval(() => {
          const randomNumber = Math.floor(Math.random() * imgsArray.length);
          const landingPage = document.querySelector('.landing-page');
          if (landingPage) {
            landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
          }
        }, 10000);
      };
      randomizeImgs();
      localStorage.setItem('background_option', true);
    } else {
      localStorage.setItem('background_option', false);
    }
  }, [randomBackground]);

  const handleColorChange = (color) => {
    document.documentElement.style.setProperty('--main-color', color);
    localStorage.setItem('color_option', color);
  };

  const handleBulletsChange = (display) => {
    setShowBullets(display);
    localStorage.setItem('bullets_option', display === 'show' ? 'block' : 'none');
  };

  const resetOptions = () => {
    localStorage.removeItem('color_option');
    localStorage.removeItem('background_option');
    localStorage.removeItem('bullets_option');
    window.location.reload(); // Refresh the page to reset state
  };

  return (
    <div className={`${styles.settingsBox} ${isOpen ? styles.settingsBoxOpen : ''}`}>
      <div className={styles.toggleSettings} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faGear} className={styles.faGear} />
      </div>
      <div className={styles.settingsContainer}>
        <div className={styles.optionBox}>
          <h4 className={styles.optionBoxTitle}>Colors</h4>
          <ul className={styles.colorsList}>
            {['#ffd557', '#e91e63', '#009688', '#03a9f4', '#4caf50'].map((color, index) => (
              <li
                key={index}
                className={`${styles.colorItem} ${
                  color === document.documentElement.style.getPropertyValue('--main-color') ? styles.activeColor : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </ul>
        </div>

        <div className={styles.optionBox}>
          <h4 className={styles.optionBoxTitle}>Turn On Random Background</h4>
          <div className={styles.randomBackgrounds}>
            <span
              className={`${styles.yesNoButton} ${randomBackground === 'yes' ? styles.activeButton : ''}`}
              onClick={() => setRandomBackground('yes')}
            >
              Yes
            </span>
            <span
              className={`${styles.yesNoButton} ${randomBackground === 'no' ? styles.activeButton : ''}`}
              onClick={() => setRandomBackground('no')}
            >
              No
            </span>
          </div>
        </div>

        <div className={styles.optionBox}>
          <h4 className={styles.optionBoxTitle}>Show Bullets</h4>
          <div className={styles.bulletsOption}>
            <span
              className={`${styles.yesNoButton} ${showBullets === 'show' ? styles.activeButton : ''}`}
              onClick={() => handleBulletsChange('show')}
            >
              Yes
            </span>
            <span
              className={`${styles.yesNoButton} ${showBullets === 'hide' ? styles.activeButton : ''}`}
              onClick={() => handleBulletsChange('hide')}
            >
              No
            </span>
          </div>
        </div>

        <button className={styles.resetOptions} onClick={resetOptions}>
          Reset Options
        </button>
      </div>
    </div>
  );
};

export default SettingsBox;
