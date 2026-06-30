import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      {skills.map((group, index) => (
        <div className="skill-category" key={index}>
          <h3>{group.category}</h3>

          <div className="skills-grid">
            {group.items.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={i}
                  className="skill-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <div className="skill-logo">
                    <Icon className={skill.className} />
                  </div>

                  <h4>{skill.name}</h4>

                  <div className="progress">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                  <span>{skill.level}%</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;