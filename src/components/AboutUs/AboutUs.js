import React from 'react';
import styles from './AboutUs.module.css';
import aboutphoto from '../../imgs/about-us.jpg';



const AboutUs = () => {
  return (
    <div className={`${styles.container} about-us`} id="about-us"> {/* Add an ID here */}
      <div className={styles.aboutUs}>
        <div className={styles.infoBox}>
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to providing exceptional solutions
            to meet the needs of our clients. Our mission is to deliver high-quality
            services with a focus on innovation and customer satisfaction.
          </p>
        </div>
        <div className={styles.imageBox}>
          <img src={aboutphoto} alt="Our Team" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
