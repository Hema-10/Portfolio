import React, { useRef, useEffect, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Todo App - Flask',
      description: 'A full-stack web application for task management',
      features: ['Add, edit, delete tasks', 'Mark tasks complete', 'SQLite database', 'Responsive design'],
      image: '📝',
      tech: 'Flask, Python, SQLite, HTML, CSS, JavaScript',
    },
    {
      id: 2,
      name: 'Sprinkler System Software',
      description: 'IoT-based automated sprinkler control system',
      features: ['Real-time monitoring', 'Automated scheduling', 'Sensor integration', 'Water efficiency'],
      image: '💧',
      tech: 'Python, IoT Sensors, Database, Automation',
    },
    {
      id: 3,
      name: 'AI/ML Projects',
      description: 'Various AI and Machine Learning implementations',
      features: ['Data analysis', 'Model development', 'Deep learning', 'Data visualization'],
      image: '🤖',
      tech: 'Python, TensorFlow, Scikit-learn, Pandas',
    },
  ];

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
    <section id="projects" style={styles.projects} ref={ref}>
      <div style={styles.bgSlider}></div>
      
      <h2 style={{...styles.title, animation: 'fadeInUp 0.8s ease'}}>My Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={project.id} style={{...styles.projectCard, animation: animate ? `slideInUp 0.8s ease ${index * 0.15}s forwards` : 'none', opacity: animate ? 1 : 0, transform: animate ? 'translateY(0)' : 'translateY(30px)'}}>
            <div style={styles.projectImage}>{project.image}</div>
            <h3 style={styles.projectTitle}>{project.name}</h3>
            <p style={styles.projectDesc}>{project.description}</p>
            <div style={styles.features}>
              {project.features.map((feature, idx) => (
                <span key={idx} style={styles.featureBadge}>✓ {feature}</span>
              ))}
            </div>
            <p style={styles.tech}><strong>Tech Stack:</strong> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projects: {
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
    background: 'linear-gradient(135deg, rgba(102,126,234,0.05), rgba(78,172,254,0.05), rgba(240,147,251,0.05))',
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
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  projectCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    minWidth: '300px',
    flex: '1 1 300px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, boxShadow 0.3s',
    textAlign: 'left',
    position: 'relative',
    zIndex: 2,
  },
  projectImage: {
    fontSize: '3rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  projectTitle: {
    color: '#667eea',
    marginBottom: '0.5rem',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  projectDesc: {
    color: '#666',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  featureBadge: {
    color: '#764ba2',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  tech: {
    color: '#999',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  },
};

export default Projects;
