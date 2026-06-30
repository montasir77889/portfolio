// import {
//   FaDownload,
//   FaMoon,
//   FaSun,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// import { useState } from "react";

// function Navbar({ theme, toggleTheme }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       {/* Logo */}

//       <div className="logo">

//         <div className="logo-circle">
//           MA
//         </div>

//         <div className="logo-text">
//           <h2>Mohammed Montasir</h2>
//           <p>AI Engineer</p>
//         </div>

//       </div>

//       {/* Navigation */}

//       <ul className={menuOpen ? "nav-links active" : "nav-links"}>

//         <li>
//           <a href="#home" onClick={() => setMenuOpen(false)}>
//             Home
//           </a>
//         </li>

//         <li>
//           <a href="#about" onClick={() => setMenuOpen(false)}>
//             About
//           </a>
//         </li>

//         <li>
//           <a href="#education" onClick={() => setMenuOpen(false)}>
//             Education
//           </a>
//         </li>

//         <li>
//           <a href="#skills" onClick={() => setMenuOpen(false)}>
//             Skills
//           </a>
//         </li>

//         <li>
//           <a href="#projects" onClick={() => setMenuOpen(false)}>
//             Projects
//           </a>
//         </li>

//         <li>
//           <a href="#publications" onClick={() => setMenuOpen(false)}>
//             Publications
//           </a>
//         </li>

//         <li>
//           <a href="#certificates" onClick={() => setMenuOpen(false)}>
//             Certificates
//           </a>
//         </li>

//         <li>
//           <a href="#contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </a>
//         </li>

//       </ul>

//       {/* Right Side */}

//       <div className="nav-right">

//         <button
//           className="theme-btn"
//           onClick={toggleTheme}
//         >
//           {theme === "dark" ? <FaSun /> : <FaMoon />}
//         </button>

//         <a
//           href="/Resume.pdf"
//           download
//           className="resume-btn"
//         >
//           <FaDownload />
//           Resume
//         </a>

//         <button
//           className="menu-btn"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-circle">MA</div>

        <div className="logo-text">
          <h2>Mohammed Montasir Abdullah</h2>
          <p>AI Engineer</p>
        </div>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>Education</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a href="#publications" onClick={closeMenu}>Publications</a>
        </li>

        <li>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

      </ul>

      <a
        href="/Resume.pdf"
        download
        className="resume-btn"
      >
        <FaDownload />
        Resume
      </a>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

    </nav>
  );
}

export default Navbar;