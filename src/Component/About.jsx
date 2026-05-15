
const About = () => {

  return (
    <>
      <style>
        {`
        .about {
          margin: 0 auto;
          width: 100%;
          padding: 6rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: linear-gradient(135deg, rgba(15, 125, 236, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%);
          z-index: 0;
          border-radius: 0 0 50% 50%;
        }

        .about-container {
          background: #ffffff99;
          padding: 2rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(15, 125, 236, 0.15);
          max-width: 1100px;
          width: 100%;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
          z-index: 1;
          border: 3px solid rgba(21, 203, 244, 0.98);
        }

        body.dark-mode .about-container {
          background: rgba(30, 30, 30, 0.25);
          box-shadow: 0 20px 60px rgba(39, 70, 135, 0.38);
          border-color: rgba(15, 125, 236, 0.3);
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .about-badge {
          display: block;
          color: #0f7dec;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          background: rgba(15, 125, 236, 0.1);
          position: relative;
          width: fit-content;
          margin: 0 auto;
        }

        .about-badge::before {
          content: '✦';
          position: absolute;
          left: -20px;
          color: #0f7dec;
          animation: sparkle 1s ease-in-out infinite;
        }

        .about-badge::after {
          content: '✦';
          position: absolute;
          right: -20px;
          color: #0f7dec;
          animation: sparkle 1s ease-in-out infinite 1s;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f7dec;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .about-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #0f7dec, transparent);
          border-radius: 2px;
        }

        .about-content {
          margin-bottom: 2rem;
          position: relative;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 20px;
        }

        .about-text::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: calc(100% - 16px);
          background: linear-gradient(180deg, #0f7dec, transparent);
          border-radius: 2px;
        }

        body.dark-mode .about-text {
          color: #fafafa;
        }

        /* ── Stats ── */
        .about-stats {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin: 0 0 2.5rem;
          flex-wrap: wrap;
        }

        .stat-card {
          flex: 1 1 130px;
          max-width: 180px;
          background: rgba(15, 125, 236, 0.06);
          border: 1.5px solid rgba(15, 125, 236, 0.18);
          border-radius: 16px;
          padding: 1.2rem 1rem;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 128, 255, 0.91);
        }

        body.dark-mode .stat-card {
          background: rgba(15, 125, 236, 0.08);
          border-color: rgba(6, 129, 252, 0.61);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #0659ff;
          line-height: 1;
          margin-bottom: 6px;
          display: block;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #108bf1;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        body.dark-mode .stat-label { color: #888; }
        body.dark-mode .stat-number { color: #fffdfd; }

        /* ── Button ── */
        .about-button-container {
          text-align: center;
        }

        .about-btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: linear-gradient(135deg, #59aafc 0%, #5574fa 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(15, 125, 236, 0.4);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .about-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(15, 125, 236, 0.6);
        }

        @media (max-width: 768px) {
          .about {
            padding: 4rem 1rem;
            align-items: flex-start;
          }

          .about-container {
            padding: 2.5rem 1.5rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-text {
            font-size: 1rem;
            text-align: left;
          }

          .about-btn {
            width: 100%;
            justify-content: center;
          }

          .about-stats {
            gap: 1rem;
          }

          .stat-card {
            flex: 1 1 100px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>

      <section id="about" className="about animate-on-scroll">
        <div className="about-container">
          <div className="about-header">
            <span className="about-badge">HELLO👋</span>
            <h2 className="about-title">Introduction About Me</h2>
          </div>

          <div className="about-content">
            <p className="about-text">
              I'm Muhammed, a passionate Frontend Developer with a keen eye for detail and
              a love for creating beautiful, functional web experiences. With
              expertise in modern JavaScript frameworks and a strong foundation
              in UI/UX principles, I transform ideas into responsive,
              user-friendly applications.
            </p>
            <p className="about-text">
              My journey in web development has equipped me with the skills to
              tackle complex challenges and deliver high-quality solutions. I
              believe in writing clean, maintainable code and constantly
              learning new technologies to stay ahead in this ever-evolving
              field.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>

          <div className="about-button-container">
            <button className="about-btn">
              <a href="#Skill" style={{ color: "white", textDecoration: "none" }}>
                View My Skills →
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About