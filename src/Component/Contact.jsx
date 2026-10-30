import React, { useEffect } from "react";
import "../css/Contact.css";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".contact-section .animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
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
            style={{ "--delay": "0.1s" }}
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
            style={{ "--delay": "0.2s" }}
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
            style={{ "--delay": "0.3s" }}
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
            style={{ "--delay": "0.4s" }}
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
  );
};

export default Contact;