import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.footer}>
      <p>Stay connected with us for the latest updates and insights.</p>
      <p>&copy; {monthYear} | Our Company - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
