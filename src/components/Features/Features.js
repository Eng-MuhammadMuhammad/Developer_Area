import React from 'react';
import styles from './Features.module.css';

// Import images from the 'imgs' directory
import icon1 from '../../imgs/Icon_01.png';
import icon2 from '../../imgs/Icon_02.png';
import icon3 from '../../imgs/Icon_03.png';
import icon4 from '../../imgs/Icon_04.png';
import icon5 from '../../imgs/Icon_05.png';
import icon6 from '../../imgs/Icon_06.png';

const featuresData = [
  {
    imgSrc: icon1,
    title: 'Statistics',
    description: 'Gain insights with detailed analytics that drive smarter decisions and optimize business performance.'
  },
  {
    imgSrc: icon2,
    title: 'Coding',
    description: 'Efficient and clean code solutions tailored to meet project needs, ensuring high performance and scalability.'
  },
  {
    imgSrc: icon3,
    title: 'Design',
    description: 'Crafted designs that focus on user experience, creating engaging and intuitive interfaces across platforms.'
  },
  {
    imgSrc: icon4,
    title: 'Projects',
    description: 'Effective project management tools and methodologies to keep timelines on track and deliver high-quality results.'
  },
  {
    imgSrc: icon5,
    title: 'Marketing',
    description: 'Innovative marketing strategies designed to reach target audiences, enhance brand visibility, and boost engagement.'
  },
  {
    imgSrc: icon6,
    title: 'Graphics',
    description: 'Stunning graphic designs that captivate attention and convey messages clearly, enhancing brand recognition.'
  }
];

const Features = () => {
  return (
    <div className={`${styles.features} features  id="features"`}> {/* Added class 'features' */}
      <h2>Our Features</h2>
      <div className={styles.container}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featBox}>
            <img src={feature.imgSrc} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
        <div className={styles.clearfix}></div>
      </div>
    </div>
  );
};

export default Features;
