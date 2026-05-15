import React, { useEffect } from "react";
import Skill from "../Component/Skill";
import Contact from "../Component/Contact";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Scroll from "../Component/Scroll";
import Footer from "../Component/Footer";
import Technical from "../Component/Technical";
import "../css/Home.css";

const Hero = () => {
  useEffect(() => {
    const words = ["Front-End Developer", "React.js Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const current = words[wordIndex];
      const el = document.getElementById("typed");
      if (!el) return;
      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(type, 400);
          return;
        }
      }
      timer = setTimeout(type, isDeleting ? 55 : 90);
    };
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content hero-animate">
          <h1 className="h1">
            Hi <span className="wave">👋</span> I'm Muhamed Elsayed
          </h1>
          <p className="hero-title">
            <span className="typed-text" id="typed"></span>
            <span className="typed-cursor">|</span>
          </p>
          <p className="hero-description">
            Welcome to my personal portfolio! Here, you'll find my Front-End
            projects, along with a showcase of my skills and information about
            me. I'm passionate about building modern, responsive, and
            user-friendly web interfaces that not only look great but also
            provide a seamless user experience. I continuously strive to improve
            my skills and expertise in React, JavaScript, and web development to
            deliver innovative and high-quality projects.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <a href="https://github.com/MOHAMED54353" target="_blank" rel="noreferrer">
                Github
              </a>
              <i className="fas fa-arrow-right"></i>
            </button>
            <a href="#" className="btn btn-secondary">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>

        <div className="hero-image hero-animate">
          <div className="image-container">
            <div className="gradient-ring"></div>
            <img
              src="/صورة واتساب بتاريخ 1447-01-04 في 06.50.19_76423597.jpg"
              alt="Profile"
            />
            <div className="decoration"></div>
            <div className="decoration"></div>
            <div className="decoration"></div>
          </div>
        </div>
      </section>
      <About />
      <Skill />
      <Technical />
      <Projects />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
};

export default Hero;