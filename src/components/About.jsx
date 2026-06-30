function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p className="about-intro">
        I am a Computer Science graduate from BRAC University with a passion
        for Artificial Intelligence, Machine Learning, Deep Learning and
        Computer Vision. My research focuses on image classification,
        object detection, image segmentation and intelligent systems for
        real-world applications.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h3>🤖 AI & Machine Learning</h3>

          <p>
            Experience with PyTorch, TensorFlow, OpenCV,
            CNNs, YOLO, ResNet, MobileNet and U-Net.
          </p>
        </div>

        <div className="about-card">
          <h3>🔬 Research</h3>

          <p>
            Presented BE-KNN at the QPAIN Conference and currently working on
            Shrimp Disease Detection using Deep Learning.
          </p>
        </div>

        <div className="about-card">
          <h3>💻 Full Stack Development</h3>

          <p>
            Built MERN stack applications using React,
            Node.js, Express and MongoDB.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;