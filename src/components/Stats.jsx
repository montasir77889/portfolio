import {
  FaCode,
  FaProjectDiagram,
  FaBookOpen,
  FaBrain,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-grid">

        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <h2>3+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <FaBookOpen className="stat-icon" />
          <h2>1</h2>
          <p>IEEE Publication</p>
        </div>

        <div className="stat-card">
          <FaCode className="stat-icon" />
          <h2>15+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <FaBrain className="stat-icon" />
          <h2>AI</h2>
          <p>Research Focus</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;