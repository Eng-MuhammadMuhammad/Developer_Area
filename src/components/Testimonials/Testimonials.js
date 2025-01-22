import React from 'react';
import styles from './Testimonials.module.css';

import photo1 from '../../imgs/Icon_01.png'
import photo2 from '../../imgs/Icon_02.png'
import photo3 from '../../imgs/Icon_03.png'


const Testimonials = () => {
  return (
    <div className={`${styles.testimonials} testimonials id="testimonials"`}> 
      <h2>Testimonials</h2>
      <div className={styles.testimonialsContent}>
        
        <div className={styles.tsBox}>
          <p>
            "The functionality of this platform is outstanding. It has transformed how we approach our work, making processes more efficient and enjoyable. I genuinely appreciate the team’s dedication to user experience and innovation."
          </p>
          <div className={styles.personInfo}>
            <img src={photo1}  alt="Reem Al Jobory" />
            <h4>Reem Al Jobory</h4>
            <p>Head of Design Team</p>
          </div>
        </div>

        <div className={styles.tsBox}>
          <p>
            "This application combines practicality with a sleek design, making it a joy to use every day. As a developer, I’m impressed by the seamless integrations and thoughtful details that enhance productivity."
          </p>
          <div className={styles.personInfo}>
            <img src={photo2} alt="Mohammad Mohammad" />
            <h4>Mohammad Mohammad</h4>
            <p>JavaScript Specialist</p>
          </div>
        </div>

        <div className={styles.tsBox}>
          <p>
            "Our data analysis workflows have never been this smooth. The platform allows us to dive deep into analytics while remaining intuitive and accessible, even for new team members. A real game-changer!"
          </p>
          <div className={styles.personInfo}>
            <img src={photo3}  alt="Doaa Adly" />
            <h4>Doaa Adly</h4>
            <p>Data Analyst</p>
          </div>
        </div>  

      </div>
      <div className={styles.clearfix}></div>
    </div>
  );
};

export default Testimonials;
