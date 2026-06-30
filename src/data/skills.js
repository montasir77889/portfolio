import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    category: "Programming",
    items: [
      {
        name: "Python",
        icon: FaPython,
        className: "python",
        level: 95,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        className: "javascript",
        level: 90,
      },
    ],
  },

  {
    category: "AI / Machine Learning",
    items: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        className: "tensorflow",
        level: 90,
      },
      {
        name: "PyTorch",
        icon: SiPytorch,
        className: "pytorch",
        level: 85,
      },
      {
        name: "OpenCV",
        icon: SiOpencv,
        className: "opencv",
        level: 90,
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
        className: "sklearn",
        level: 90,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        className: "numpy",
        level: 90,
      },
      {
        name: "Pandas",
        icon: SiPandas,
        className: "pandas",
        level: 88,
      },
    ],
  },

  {
    category: "Web Development",
    items: [
      {
        name: "React",
        icon: FaReact,
        className: "react",
        level: 90,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        className: "node",
        level: 85,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        className: "express",
        level: 85,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        className: "html",
        level: 95,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        className: "css",
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        className: "tailwind",
        level: 90,
      },
    ],
  },

  {
    category: "Database & Tools",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        className: "mongodb",
        level: 88,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        className: "mysql",
        level: 90,
      },
      {
        name: "Git",
        icon: FaGitAlt,
        className: "git",
        level: 92,
      },
    ],
  },
];

export default skills;