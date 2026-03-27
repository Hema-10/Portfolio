import React, { useRef, useEffect, useState } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  const skillCategories = {
    'Programming Languages': ['Python', 'JavaScript', 'SQL'],
    'Web Development': ['Flask', 'React', 'HTML', 'CSS', 'REST APIs'],
    'Data Science & ML': ['Machine Learning', 'Data Analysis', 'EDA', 'TensorFlow'],
    'Tools & Databases': ['Git', 'Jupyter Notebook', 'SQLite', 'MongoDB', 'Tableau', 'Power BI'],
    'Other': ['IoT', 'Problem Solving', 'Communication', 'Team Collaboration'],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  
  return (
    <section id="skills" style={styles.skills} ref={ref}>
      {/* Animated background slider */}
      <div style={styles.bgSlider}></div>
      
      <h2 style={{...styles.title, animation: 'fadeInUp 0.8s ease'}}>My Skills</h2>
      <div style={styles.skillsWrapper}>
        {Object.entries(skillCategories).map(([category, skills], catIndex) => (
          <div key={category} style={{...styles.categorySection, animation: animate ? `slideInUp 0.8s ease ${catIndex * 0.1}s forwards` : 'none', opacity: animate ? 1 : 0}}>
            <h3 style={styles.categoryTitle}>{category}</h3>
            <div style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <div key={index} style={{...styles.skillBadge, animation: animate ? `scaleIn 0.5s ease ${catIndex * 0.1 + index * 0.05}s forwards` : 'none', opacity: animate ? 1 : 0}} className="skill-badge-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  skills: {
    padding: '4rem 2rem',
    backgroundColor: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bgSlider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.03), rgba(118,75,162,0.03), rgba(79,172,254,0.03))',
    backgroundSize: '300% 300%',
    animation: 'backgroundSlideReverse 25s ease infinite',
    zIndex: 0,
    pointerEvents: 'none',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '3rem',
    color: '#333',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 1,
  },
  skillsWrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  categorySection: {
    marginBottom: '2rem',
    position: 'relative',
    zIndex: 1,
  },
  categoryTitle: {
    fontSize: '1.3rem',
    color: '#667eea',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  skillBadge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.7rem 1.4rem',
    borderRadius: '25px',
    fontSize: '0.95rem',
    fontWeight: '500',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
  },
};

export default Skills;
