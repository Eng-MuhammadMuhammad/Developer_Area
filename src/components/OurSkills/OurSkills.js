import React, { useEffect } from 'react';
import styles from './OurSkills.module.css';
import '@fortawesome/react-fontawesome';




const OurSkills = () => {
  useEffect(() => {
    // Apply data-progress width to each span dynamically
    document.querySelectorAll(`.${styles.skillProgress} span`).forEach(span => {
      span.style.width = span.getAttribute('data-progress');
    });
  }, []);

  return (
    <div className={`${styles.skills} skills`} id="skills"> 
      <div className={styles.container}>
        <h2>Our Skills</h2>
        <div className={styles.skillsList}>
          {[
            { name: "HTML", progress: "80%" },
            { name: "CSS", progress: "90%" },
            { name: "JavaScript", progress: "95%" },
            { name: "MYSQL", progress: "70%" },
            { name: "PHP", progress: "75%" },
            { name: "Python", progress: "85%" }
          ].map((skill, index) => (
            <div className={styles.skillBox} key={index}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillProgress}>
                <span data-progress={skill.progress}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
