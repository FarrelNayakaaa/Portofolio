import './App.css';
import bulbasaur from './assets/bulbasaur.png';
import evo1 from './assets/evo1.png';
import evo2 from './assets/evo2.png';
import evo3 from './assets/evo3.png';
import logo from './assets/pokemon_logo.png';
import ColorInterpolation from './ColorInterpolation';
import ScrollLinked from './ScrollLinked';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ColorInterpolation />

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Pokemon Logo" className="nav-logo" />
        </div>
        <div className="nav-center">
          <p className="nav-title">FARREL NAYAKA</p>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>

        <div className="nav-right">
          <a href="#home">Home</a>
          <a href="#project">Project</a>
          <a href="#about">About Me</a>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div className="overlay-menu">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
        </div>
      )}

      {/* Hero Section */}
      <motion.div
        className="container"
        id="home"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="left">
            <img src={bulbasaur} alt="bulbasaur" className="bulbasaur" />
          </div>
          <div className="right">
            <p className="id">#001</p>
            <h1 className="title">Farrel Nayaka</h1>
            <p className="description">
              I’m a passionate Backend Engineer and AI enthusiast with a keen interest in designing user interfaces using Figma.
              Currently diving deeper into AI Engineering, primarily working with Java and Python.
              I enjoy constantly learning and developing side projects to sharpen my skills. Let’s connect: LinkedIn – Muhammad Farrel.
            </p>
            <a href="/CV–Muhammad Farrel Nayaka.pdf" className="btn" download>RESUME</a>

            <div className="evolutions">
              <p>My Skills:</p>
              <div className="evo-images">
                <img src={evo1} alt="evo1" />
                <img src={evo2} alt="evo2" />
                <img src={evo3} alt="evo3" />
              </div>
            </div>

            <div className="socials">
              <a href="https://wa.me/6281287238167" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/farrelnayakaa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-farrel-87a776278" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="container"
        id="project"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My Projects</h2>
        <ScrollLinked />
      </motion.div>

      {/* About Section */}
      <motion.div
        className="container"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <ul className="about-list">
          <li>
            <strong>Passionate Backend Engineer</strong><br />
            Experienced in building and maintaining efficient, scalable backend systems.
          </li>
          <li>
            <strong>Artificial Intelligence Enthusiast</strong><br />
            Exploring machine learning, deep learning, and NLP using Python and Java.
          </li>
          <li>
            <strong>UI Design Interest with Figma</strong><br />
            Enjoy designing user interfaces with aesthetic and usability balance.
          </li>
          <li>
            <strong>Currently Exploring AI Engineering</strong><br />
            Building intelligent systems through backend and AI integration.
          </li>
          <li>
            <strong>Lifelong Learner & Side Project Builder</strong><br />
            Passionate about building side projects to experiment with tech.
          </li>
          <li>
            <strong>Open to Collaboration and Opportunities</strong><br />
            Open for meaningful tech initiatives and teamwork.
          </li>
        </ul>

        <p className="skills-title">Get to know me</p>

        <div className="socials large-icons">
          <a href="https://wa.me/6281287238167" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/farrelnayakaa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-farrel-87a776278" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/farrelnayaka" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default App;
