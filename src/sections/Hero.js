import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" style={{
      ...styles.hero,
      background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
    }}>
      {/* Animated background orbs */}
      <div style={{...styles.orbContainer, animation: 'orb1 15s ease-in-out infinite'}}>
        <div style={styles.orb}></div>
      </div>
      <div style={{...styles.orbContainer, animation: 'orb2 18s ease-in-out infinite'}}>
        <div style={styles.orb}></div>
      </div>
      <div style={{...styles.orbContainer, animation: 'orb3 20s ease-in-out infinite'}}>
        <div style={styles.orb}></div>
      </div>

      {/* Animated background elements */}
      <div style={styles.bgShape1}></div>
      <div style={styles.bgShape2}></div>
      <div style={styles.bgShape3}></div>

      <div style={styles.profileImage}>
        <svg viewBox="0 0 200 200" style={{ width: '150px', height: '150px', animation: 'float 3s ease-in-out infinite' }}>
          {/* Background circle */}
          <circle cx="100" cy="100" r="95" fill="#667eea" opacity="0.1" stroke="#667eea" strokeWidth="2"/>
          
          {/* Head */}
          <circle cx="100" cy="70" r="30" fill="#FFB68E"/>
          
          {/* Hair */}
          <path d="M 70 70 Q 70 40 100 40 Q 130 40 130 70" fill="#2C2C2C"/>
          
          {/* Eyes */}
          <circle cx="90" cy="65" r="4" fill="#000"/>
          <circle cx="110" cy="65" r="4" fill="#000"/>
          
          {/* Smile */}
          <path d="M 90 75 Q 100 82 110 75" stroke="#000" strokeWidth="2" fill="none"/>
          
          {/* Body - wearing tech outfit */}
          <rect x="70" y="100" width="60" height="50" rx="5" fill="#667eea"/>
          
          {/* Arms */}
          <rect x="50" y="105" width="20" height="40" rx="10" fill="#FFB68E"/>
          <rect x="130" y="105" width="20" height="40" rx="10" fill="#FFB68E"/>
          
          {/* Laptop symbol */}
          <rect x="75" y="110" width="50" height="30" rx="3" fill="#764ba2" opacity="0.8"/>
          <rect x="72" y="140" width="56" height="3" fill="#333"/>
        </svg>
      </div>
      <h1 style={{...styles.title, animation: 'slideInLeft 0.8s ease'}}>Hi, I'm Hemapriya P</h1>
      <p style={{...styles.subtitle, animation: 'slideInRight 0.8s ease 0.2s both'}}>BE AIML Student | Full-Stack Developer | Data Analytics Enthusiast</p>
      <p style={{...styles.description, animation: 'fadeInUp 0.8s ease 0.4s both'}}>3rd Year Student passionate about building intelligent solutions and creating impactful web applications</p>
      <button style={{...styles.button, animation: 'bounce 2s ease-in-out infinite'}} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Let's Connect</button>
    </section>
  );
};

const styles = {
  hero: {
    padding: '5rem 2rem',
    textAlign: 'center',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },
  bgShape1: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '300px',
    height: '300px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
  },
  bgShape2: {
    position: 'absolute',
    bottom: '-100px',
    left: '-100px',
    width: '400px',
    height: '400px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite 1s',
  },
  bgShape3: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '200px',
    height: '200px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    animation: 'float 7s ease-in-out infinite 0.5s',
  },
  profileImage: {
    marginBottom: '2rem',
    zIndex: 1,
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    zIndex: 1,
  },
  subtitle: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    opacity: 0.95,
    zIndex: 1,
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    maxWidth: '600px',
    opacity: 0.9,
    zIndex: 1,
  },
  button: {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '2px solid white',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    zIndex: 1,
  },
  orbContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.15,
    filter: 'blur(40px)',
  },
};

export default Hero;
