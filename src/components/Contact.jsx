function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm always open to internship opportunities, freelance work,
        and exciting software development projects.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Email</h3>
          <p>montasir77889@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+880 1538052155</p>
          <p>+880 1406504078</p>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>Bangladesh</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>

          <a
            href="https://github.com/montasir77889"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>

          <a
            href="https://linkedin.com/in/montasir-abdullah-76a217361"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn
          </a>
        </div>

      </div>

      <a
        className="primary-btn"
        href="mailto:montasir77889@gmail.com"
      >
        Send Email
      </a>

    </section>
  );
}

export default Contact;