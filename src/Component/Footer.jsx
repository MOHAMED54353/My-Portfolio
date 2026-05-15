import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        :root {
          --footer-bg: #f8fafc;
          --footer-border: rgba(0,0,0,0.07);
          --footer-name: #0f172a;
          --footer-sub: #94a3b8;
          --footer-link: #64748b;
          --footer-link-hover: #0f7dec;
          --footer-divider: rgba(0,0,0,0.06);
        }

        body.dark-mode {
          --footer-bg: #080c18;
          --footer-border: rgba(255,255,255,0.06);
          --footer-name: #f0f4ff;
          --footer-sub: #3d4a66;
          --footer-link: #4a5a78;
          --footer-link-hover: #38a4ff;
          --footer-divider: rgba(255,255,255,0.05);
        }

        .footer {
          background: var(--footer-bg);
          border-top: 1px solid var(--footer-border);
          padding: 2.5rem 2rem;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        .footer-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--footer-name);
          letter-spacing: -0.3px;
          margin: 0 0 3px;
          transition: color 0.35s ease;
        }

        .footer-name span { color: #0f7dec; }
        .footer-sub {
          font-size: 0.75rem;
          margin: 0;
          transition: color 0.35s ease;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid var(--footer-border);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-link);
          text-decoration: none;
          font-size: 14px;
          transition: border-color 0.25s, color 0.25s, transform 0.25s;
        }

      
        .footer-social-btn:hover {
          background: #0f7dec;
          border-color: #0f7dec;
          color: #ffffff;
          transform: translateY(-3px);
        }

        body.dark-mode .footer-social-btn:hover {
          background: #38a4ff;
          border-color: #38a4ff;
          color: #080c18;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--footer-sub);
          margin: 0;
          transition: color 0.35s ease;
        }

        .footer-copy .react-icon { color: #61dafb; margin: 0 3px; }

        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 1.2rem; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">

          <div>
            <p className="footer-name">Muhamed <span>Elsayed</span></p>
            <p className="footer-sub">Frontend Developer · React.js</p>
          </div>

          <div className="footer-socials">
            <a className="footer-social-btn" href="https://www.instagram.com/medo_3289?igsh=MWpha2FqcDBwMDhzcw==" target="_blank" rel="noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="footer-social-btn" href="https://youtube.com/@muhammed-elsayed557?si=-WpcJ1EYLTrIuLUz" target="_blank" rel="noreferrer" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="footer-social-btn" href="https://www.tiktok.com/@medo3mo33?_r=1&_t=ZS-95c7n70MM2E" target="_blank" rel="noreferrer" title="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a className="footer-social-btn" href="https://www.facebook.com/share/18Hfns9zbj/" target="_blank" rel="noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>

          <p className="footer-copy">
            © 2026 · Built with <i className="fab fa-react react-icon"></i> React
          </p>

        </div>
      </footer>
    </>
  );
};

export default Footer;