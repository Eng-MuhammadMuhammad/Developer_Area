import React from 'react';
import styles from './ContactUS.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.left}>
            <input type="text" placeholder="Your Name" name="username" />
            <input type="text" placeholder="Your Phone" name="phone" />
            <input type="email" placeholder="Your Email" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className={styles.right}>
            <textarea name="message" placeholder="Your Message"></textarea>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
