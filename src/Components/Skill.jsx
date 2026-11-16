import React, { useEffect } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26", description: "Semantic markup and modern HTML5" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6", description: "Advanced styling and responsive layouts" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E", description: "Modern ES6+ and async programming" },
    { name: "C++", icon: "fas fa-code", color: "#0a8aed", description: "Object-oriented programming algorithms" },
    { name: "React.JS", icon: "fab fa-react", color: "#61DAFB", description: "Component-based UI development" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4", description: "Utility-first CSS framework" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3", description: "Rapid responsive web design framework" },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E", description: "UI/UX design and prototyping" },
    { name: "Axios", icon: "fa-solid fa-arrow-up-short-wide", color: "#11c4f5", description: "Promise-based HTTP client for API" },
    { name: "GitHub", icon: "fab fa-github", color: "#fffbfb", description: "Code hosting and collaboration platform" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032", description: "Version control and collaboration" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt", color: "#ffffff", description: "Designing for all screen sizes and devices" },
    { name: "vite", icon: "fas fa-bolt", color: "#646cff", description: "Next-generation frontend tooling" },
    { name: "zod", icon: "fa-solid fa-database", color: "#f43f5e", description: "Type-safe schema validation for JavaScript" },
    { name: "Netlify", icon: "fa-solid fa-cloud-arrow-up", color: "#00C7B7", description: "Continuous deployment hosting platform" },
    { name: "NPM", icon: "fa-brands fa-npm", color: "#CB3837", description: "Node Package Manager" },
    { name: "Redux", icon: "fa-solid fa-cubes", color: "#764ABC", description: "State management for JavaScript apps" },
    { name: "Zustand", icon: "fas fa-cog", color: "#ffffff", description: "fast scalable bearbones state-management" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".skill-card-wrapper");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        .skills-section {
          --card-bg: #ffffff;
          --text-main: #1e293b;
          --text-sub: #64748b;
          --icon-bg: #f1f5f9;
          --border-glow: rgba(0,0,0,0.1);
          padding: 6rem 2rem;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
          background-color: var(--bg-skills);
          transition: background 0.3s ease;
        }

        body.dark-mode .skills-section {
          --bg-skills: #0d1020;
          --card-bg: #0d1020;
          --text-main: #ffffff;
          --text-sub: #6b7a99;
          --icon-bg: rgba(255,255,255,0.05);
          --border-glow: #ffffffaa;
          background-color: transparent;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 3rem;
          width: 100%;
        }

        .skills-badge {
          display: inline-block;
          color: #0f7dec;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 3px;
          background: rgba(15, 125, 236, 0.1);
          border: 1px solid rgba(15, 125, 236, 0.2);
          margin-bottom: 1rem;
        }

        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #007bff;
          margin: 0.5rem 0 0;
          letter-spacing: -1px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes rotateBorder { to { --angle: 360deg; } }

        /*  Slide Animation */
        .skill-card-wrapper {
          position: relative;
          border-radius: 18px;
          padding: 1.5px;
          opacity: 0;
          transform: translateY(60px); 
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), 
          transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        .skill-card-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card-wrapper::before {
          content: '';
          position: absolute;
          inset: -.5px;
          border-radius: 20px;
          background: conic-gradient(
            from var(--angle),
            transparent 75%,
            var(--skill-color) 88%,
            var(--border-glow) 92%,
            var(--skill-color) 96%,
            transparent 100%
          );
          animation: rotateBorder 7s linear infinite;
          z-index: 0;
        }

        .skill-card-wrapper::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          border-radius: 16px;
          background: var(--card-bg);
          z-index: 0;
        }

        .skill-card {
          position: relative;
          z-index: 1;
          background: var(--card-bg);
          border-radius: 16px;
          padding: 2rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }
        
        .skill-card:hover {
          background: var(--card-hover, #111528);
          transform: translateY(-6px);
        }

        body:not(.dark-mode) .skill-card:hover {
          background: #fdfdfd;
        }

        .skill-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: 14px;
          background: var(--icon-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          transition: transform 0.4s ease, background 0.3s ease;
        }

        .skill-icon {
          font-size: 2.2rem;
          color: var(--skill-color);
          display: block;
          line-height: 1;
        }

        .skill-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0 0 0.4rem;
        }

        .skill-description {
          font-size: 0.78rem;
          color: var(--text-sub);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .skills-section { padding: 4rem 1rem; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .skill-card { padding: 1.5rem 1rem 1.2rem; }
        }
      `}</style>

      <section className="skills-section" id="Skill">
        <div className="skills-header">
          <p className="skills-badge">Skills</p>
          <h2 className="skills-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card-wrapper"
              style={{
                "--skill-color": skill.color,
                transitionDelay: `${(index % 3) * 0.1}s`
              }}
            >
              <div className="skill-card">
                <div className="skill-icon-wrap">
                  <i className={`${skill.icon} skill-icon`}></i>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;