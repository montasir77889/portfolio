import profile from "../assets/images/profile.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="greeting">Hi, I'm</p>

        <h1>Mohammed Montasir Abdullah</h1>

        <h2>Full Stack Web Developer</h2>

        <p className="description">
          I build responsive, modern web applications using React,
          JavaScript, Node.js, and Express.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Download resume
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-placeholder">
          <img src={profile} alt="Mohammed Montasir Abdullah" className = "profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;