import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <span className="timeline-date">2021 – 2025</span>

            <h3>B.Sc. in Computer Science & Engineering</h3>

            <h4>
              <FaUniversity /> BRAC University
            </h4>

            <p>
              Graduated with a strong focus on Artificial Intelligence,
              Machine Learning, Computer Vision, Deep Learning,
              Data Structures & Algorithms and Software Engineering.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;