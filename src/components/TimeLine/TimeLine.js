import React from 'react';
import styles from './TimeLine.module.css';


const Timeline = () => {
  return (
    <div className={`${styles.timeline} timeline`} id="timeline"> 
      <h2>Timeline</h2>
      <div className={styles.container}>
        <div className={styles.timelineContent}>
          <div className={styles.year}>2023</div>

          <div className={styles.left}>
            <div className={styles.content}>
              <h3>Heading section</h3>
              <p>
                Explore our journey through innovation and excellence in 2023, 
                marked by milestones in project development and customer satisfaction.
              </p>
            </div>
          </div>

          <div className={styles.clearfix}></div>

          <div className={styles.right}>
            <div className={styles.content}>
              <h3>Heading section</h3>
              <p>
                Our global expansion reached new heights with partnerships and 
                strategic alliances in diverse industries.
              </p>
            </div>
          </div>

          <div className={styles.year}>2024</div>

          <div className={styles.left}>
            <div className={styles.content}>
              <h3>Heading section</h3>
              <p>
                We continue to innovate with a focus on sustainable solutions and 
                community engagement projects worldwide.
              </p>
            </div>
          </div>

          <div className={styles.clearfix}></div>

          <div className={styles.left}>
            <div className={styles.content}>
              <h3>Heading section</h3>
              <p>
                Join us in 2024 as we pave the way for future advancements and 
                impactful changes across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
