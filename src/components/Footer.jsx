import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Mohammed Montasir Abdullah</h3>

      <p>
        AI Engineer • Machine Learning • Computer Vision
      </p>

      <div className="footer-icons">

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

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mohammed Montasir Abdullah. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;