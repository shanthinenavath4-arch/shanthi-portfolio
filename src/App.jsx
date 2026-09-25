import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app">

      <Cursor />
      <ScrollProgress />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Resume />
        <Terminal />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;