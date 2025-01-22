import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './Landing.module.css';


const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <div className={styles.logo}>SPECIALIST</div>
          <div className={styles.linksContainer}>
            <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
              <li>
                <Link 
                  to="about-us"  // Scroll to the About section
                  smooth={true}   // Enable smooth scroll
                  duration={500}  // Set scroll duration
                  className={styles.active}>
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="skills"   // Scroll to the Skills section
                  smooth={true}
                  duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="gallery"  // Scroll to the Gallery section
                  smooth={true}
                  duration={500}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="timeline"  // Scroll to the Timeline section
                  smooth={true}
                  duration={500}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link 
                  to="features"  // Scroll to the Features section
                  smooth={true}
                  duration={500}>
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="testimonials"  // Scroll to the Testimonials section
                  smooth={true}
                  duration={500}>
                  Testimonials
                </Link>
              </li>
            </ul>
            <button 
              className={`${styles.toggleMenu} ${menuOpen ? styles.menuActive : ''}`} 
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.introductionText}>
        <h1>A <span>Creative</span> Crew</h1>
        <p>
          We're a passionate team of creatives who blend diverse disciplines to bring unique and innovative projects to life. Our passion lies in transforming ideas into reality, working closely with our clients to achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
