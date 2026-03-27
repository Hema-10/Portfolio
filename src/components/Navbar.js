import React from 'react';

const Navbar = () => {
  const handleResumeDownload = () => {
    const resumeContent = `HEMAPRIYA P
BE AIML - 3rd Year Student
Email: hemapriya@email.com | Phone: +91-XXXXXXXXXX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bachelor of Engineering in Artificial Intelligence & Machine Learning
3rd Year | [Your Institution]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TODO APP - FLASK
   • Built a full-stack web application using Flask
   • Features: Add, edit, delete, and mark tasks as complete
   • Database: SQLite for persistent storage
   • Frontend: HTML, CSS, JavaScript
   • Responsive design for mobile and desktop

2. SPRINKLER SYSTEM SOFTWARE
   • Developed IoT-based automated sprinkler control system
   • Features: Real-time monitoring, scheduling, sensor integration
   • Technologies: Python, IoT sensors, database management
   • Optimized water usage and improved efficiency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERNSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• AIML INTERNSHIPS
  - Advanced coursework in Machine Learning and Deep Learning
  - Data analysis and model development
  - Practical implementation of AI algorithms

• DELOITTE DATA ANALYTICS INTERNSHIP
  - Analyzed large datasets for business intelligence
  - Created data visualizations and dashboards
  - Provided actionable insights for decision-making
  - Tools: Python, SQL, Tableau/Power BI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Programming Languages: Python, JavaScript, SQL
Web Development: Flask, React, HTML, CSS
Data Science: Machine Learning, Data Analysis, EDA
Tools & Technologies: Git, Tableau, Power BI, Jupyter Notebook
Databases: SQLite, MySQL, MongoDB
Other: IoT, REST APIs, Data Visualization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hemapriya_P_Resume.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  };
  
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Hemapriya P</h1>
      <p style={styles.subtitle}>BE AIML | 3rd Year</p>
      <ul style={styles.navLinks}>
        <li><a href="#hero" style={styles.navLink}>Home</a></li>
        <li><a href="#about" style={styles.navLink}>About</a></li>
        <li><a href="#skills" style={styles.navLink}>Skills</a></li>
        <li><a href="#projects" style={styles.navLink}>Projects</a></li>
        <li><a href="#contact" style={styles.navLink}>Contact</a></li>
        <li><button onClick={handleResumeDownload} style={styles.resumeBtn}>📄 Resume</button></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    position: 'sticky',
    top: 0,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: '0 0 0 1rem',
    fontSize: '0.9rem',
    opacity: 0.9,
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'opacity 0.3s',
  },
  resumeBtn: {
    padding: '0.6rem 1rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
};

export default Navbar;
