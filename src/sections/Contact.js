import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
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
    <section id="contact" style={{...styles.contact, animation: 'gradientShift 12s ease infinite'}} ref={ref}>
      {/* Animated background slider */}
      <div style={styles.bgSlider}></div>
      
      <h2 style={{...styles.title, animation: 'fadeInUp 0.8s ease'}}>Get In Touch</h2>
      <p style={{...styles.subtitle, animation: 'fadeInUp 0.8s ease 0.2s both'}}>Feel free to reach out for collaborations or just a friendly hello!</p>
      
      <div style={styles.container}>
        <div style={styles.contactInfo}>
          <div style={{...styles.infoCard, animation: animate ? 'slideInLeft 0.8s ease' : 'none', opacity: animate ? 1 : 0}}>
            <span style={styles.icon}>📧</span>
            <h3>Email</h3>
            <p>hemapriya@email.com</p>
          </div>
          <div style={{...styles.infoCard, animation: animate ? 'slideInLeft 0.8s ease 0.15s both' : 'none', opacity: animate ? 1 : 0}}>
            <span style={styles.icon}>📱</span>
            <h3>Phone</h3>
            <p>+91-XXXXXXXXXX</p>
          </div>
          <div style={{...styles.infoCard, animation: animate ? 'slideInLeft 0.8s ease 0.3s both' : 'none', opacity: animate ? 1 : 0}}>
            <span style={styles.icon}>📍</span>
            <h3>Location</h3>
            <p>India</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{...styles.form, animation: animate ? 'slideInRight 0.8s ease' : 'none', opacity: animate ? 1 : 0}}>
          {submitted && <div style={styles.successMessage}>✓ Thanks for your message! I'll get back soon.</div>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            rows="5"
            required
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
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
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backgroundSize: '300% 300%',
    animation: 'backgroundSlideReverse 25s ease infinite',
    zIndex: 0,
    pointerEvents: 'none',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 2,
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '3rem',
    opacity: 0.9,
    position: 'relative',
    zIndex: 2,
  },
  container: {
    display: 'flex',
    gap: '3rem',
    maxWidth: '900px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },
  contactInfo: {
    flex: '1 1 250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '1.5rem',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
  },
  icon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  form: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  successMessage: {
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    border: '2px solid #4CAF50',
    color: '#fff',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
};

export default Contact;
