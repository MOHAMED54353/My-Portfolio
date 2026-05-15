import React, { useEffect } from "react";

const Contact = () => {
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

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .contact-section {
          padding: 6rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .contact-container {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .contact-badge {
          display: inline-block;
          padding: 0.4rem 1.4rem;
          border-radius: 999px;
          font-size: 18px;
          font-weight: 600;
          color: #0f7dec;
          background: rgba(15, 125, 236, 0.1);
          letter-spacing: 1px;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        body.dark-mode .contact-title {
          color: #0f7dec;
        }

        .contact-description {
          max-width: 600px;
          margin: 0 auto 25px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #64748b;
        }

        body.dark-mode .contact-description {
          color: #94a3b8;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 2rem;
        }

        .contact-method {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: white;
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        body.dark-mode .contact-method {
          background: rgba(30, 41, 59, 0.22);
        }

        .contact-method:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(15, 125, 236, 0.25);
        }

        .contact-method-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0f7dec, #667eea);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .contact-method-info h3 {
          font-size: 1.05rem;
          font-weight: 700;
        }

        body.dark-mode .contact-method-info h3 {
          color: #f8fafc;
        }

        .contact-method-info p {
          font-size: 0.9rem;
          color: #64748b;
        }

        body.dark-mode .contact-method-info p {
          color: #94a3b8;
        }

        /* --- Animation Styles --- */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), 
                      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .contact-methods {
            grid-template-columns: 1fr;
          }
          .contact-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="animate-on-scroll">
            <span className="contact-badge">Contact</span>
            <h2 className="contact-title">Let’s Work Together</h2>
            <p className="contact-description">
              If you’d like to get in touch, don’t hesitate — I’m always excited
              to hear about your ideas and projects!
            </p>
          </div>

          <div className="contact-methods">
            <a
              href="mailto:medooomodey78@gmail.com"
              className="contact-method animate-on-scroll"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="contact-method-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-method-info">
                <h3>Email</h3>
                <p>medooomodey78@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/MOHAMED54353"
              target="_blank"
              rel="noreferrer"
              className="contact-method animate-on-scroll"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="contact-method-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-method-info">
                <h3>GitHub</h3>
                <p>@MOHAMED54353</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammed-el-sayed-416739282"
              target="_blank"
              rel="noreferrer"
              className="contact-method animate-on-scroll"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="contact-method-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-method-info">
                <h3>LinkedIn</h3>
                <p>Muhammed Elsayed</p>
              </div>
            </a>

            <a
              href="https://wa.me/201275989902"
              target="_blank"
              rel="noreferrer"
              className="contact-method animate-on-scroll"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="contact-method-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-method-info">
                <h3>WhatsApp</h3>
                <p>+20 127 598 9902</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;