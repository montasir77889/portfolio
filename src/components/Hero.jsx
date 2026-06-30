import profile from "../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="greeting">Hello, I'm</p>

        <h1>Mohammed Montasir Abdullah</h1>

        <TypeAnimation
          sequence={[
            "AI Engineer",
            2000,
            "Machine Learning Engineer",
            2000,
            "Computer Vision Researcher",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h2"
          className="typing"
        />

        <p className="description">
          Computer Science graduate from BRAC University . Passionate about Artificial Intelligence,
          Machine Learning, Computer Vision and Full Stack Development.
        </p>

        <div className="hero-buttons">

          <a
            href="/Resume.pdf"
            download
            className="primary-btn"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >
            Contact Me
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/montasir77889"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/montasir-abdullah-76a217361"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:montasir77889@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <img
          src={profile}
          alt="Mohammed Montasir Abdullah"
          className="profile-image"
        />

      </motion.div>

    </section>
  );
}

export default Hero;