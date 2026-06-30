// import { useState, useEffect } from "react";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import About from "./components/About";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Publications from "./components/Publications";
// import Research from "./components/Research";
// import Certificates from "./components/Certificates";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ScrollProgress from "./components/ScrollProgress";
// import BackToTop from "./components/BackToTop";
// import AnimatedBackground from "./components/AnimatedBackground";
// function App() {

//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "dark"
//   );

//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <>
//       <AnimatedBackground />  
//       <ScrollProgress />
//       <Navbar theme={theme} toggleTheme={toggleTheme} />

//       <Hero />

//       <Stats />

//       <About />

//       <Education />

//       <Skills />

//       <Projects />

//       <Publications />

//       <Research />

//       <Certificates />

//       <Contact />

//       <Footer />

//       <BackToTop />
//     </>
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Research />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;