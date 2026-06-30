import {
  FaRobot,
  FaBrain,
  FaEye,
  FaDatabase,
  FaChartLine,
  FaProjectDiagram,
} from "react-icons/fa";

function Research() {
  const interests = [
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
    },
    {
      icon: <FaEye />,
      title: "Computer Vision",
    },
    {
      icon: <FaDatabase />,
      title: "Bioinformatics",
    },
    {
      icon: <FaChartLine />,
      title: "Deep Learning",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Ensemble Learning",
    },
  ];

  return (
    <section className="research" id="research">
      <h2>Research Interests</h2>

      <div className="research-grid">
        {interests.map((item, index) => (
          <div className="research-card" key={index}>
            <div className="research-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;