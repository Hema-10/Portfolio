import React, { useRef, useEffect } from 'react';

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
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
    <section id="about" style={styles.about} ref={ref}>
      {/* Animated background slider */}
      <div style={styles.bgSlider}></div>
      
      <h2 style={styles.title}>About Me</h2>
      <div style={styles.container}>
        <div style={{...styles.card, animation: 'slideInLeft 0.8s ease'}}>
          <h3 style={styles.cardTitle}>📚 Education</h3>
          <p style={styles.text}>Currently pursuing Bachelor of Engineering in Artificial Intelligence and Machine Learning (3rd Year). Passionate about leveraging AI and ML to solve real-world problems.</p>
        </div>
        <div style={{...styles.card, animation: 'fadeInUp 0.8s ease 0.2s both'}}>
          <h3 style={styles.cardTitle}>💻 Development</h3>
          <p style={styles.text}>Full-stack developer experienced in building web applications with Flask and React. Focus on creating responsive, user-friendly interfaces with clean, maintainable code.</p>
        </div>
        <div style={{...styles.card, animation: 'slideInRight 0.8s ease 0.4s both'}}>
          <h3 style={styles.cardTitle}>📊 Data Science</h3>
          <p style={styles.text}>Completed Deloitte Data Analytics internship. Experience in data analysis, visualization, and deriving actionable insights from complex datasets.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
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
    background: 'linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05), rgba(240,147,251,0.05))',
    backgroundSize: '300% 300%',
    animation: 'backgroundSlide 20s ease infinite',
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
  container: {
    display: 'flex',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    flex: '1 1 280px',
    minHeight: '250px',
    transition: 'transform 0.3s, boxShadow 0.3s',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#667eea',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default About;
