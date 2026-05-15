import React from "react";

const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "C++", icon: "fas fa-code", color: "#0a8aed" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC", isImage: true },
    { name: "React.JS", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
    { name: "Font Awesome", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Font_Awesome_logomark_blue.svg/960px-Font_Awesome_logomark_blue.svg.png", color: "#007bff", isImage: true },
    { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", color: "#5C2D91", isImage: true },
    { name: "Npm", icon: "fab fa-npm", color: "#CB3837" },
    { name: "Vite", icon: "fas fa-bolt", color: "#646cff" },
    { name: "Axios", icon: "fas fa-arrow-up-short-wide", color: "#11c4f5" },
    { name: "Zod", icon: "fas fa-database", color: "#f43f5e" },
    { name: "Chrome", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", color: "#23e006", isImage: true },
    { name: "GitHub", icon: "fab fa-github", color: "#64748b" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Netlify", icon: "fas fa-cloud-arrow-up", color: "#00C7B7" },
    { name: "Problem Solving", icon: "fas fa-puzzle-piece", color: "#0f7dec" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt", color: "#8b5cf6" },
    { name: "Seo", icon: "fas fa-search", color: "#ef4444" },
    { name: "Microsoft", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/1280px-Microsoft_icon.svg.png", color: "#D24726", isImage: true },
    { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg", color: "#217346", isImage: true },
    { name: "PowerPoint", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg/1280px-Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg.png", color: "#D24726", isImage: true },
    { name: "Word", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Microsoft_Office_Word_%282019%E2%80%932025%29.svg/330px-Microsoft_Office_Word_%282019%E2%80%932025%29.svg.png", color: "#2B579A", isImage: true },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", color: "#00C4CC", isImage: true },
    { name: "ITI", icon: "https://iti.gov.eg/assets/images/ColoredLogo.svg", color: "#D24726", isImage: true },
    { name: "Gamma", icon: "https://ai-for-churches.com/wp-content/uploads/2023/08/gamma-hex-bg.png", color: "#9333EA", isImage: true },
];

const SkillCard = ({ skill }) => (
    <div className="marquee-card" style={{ "--skill-color": skill.color }}>
        {skill.isImage ? (
            <img src={skill.icon} className="marquee-icon-img" alt={skill.name} />
        ) : (
            <i className={`${skill.icon} marquee-icon`} />
        )}
        <span className="marquee-name">{skill.name}</span>
    </div>
);

const Technical = () => {
    const half1 = skills.slice(0, Math.ceil(skills.length / 2));
    const half2 = skills.slice(Math.ceil(skills.length / 2));

    return (
        <>
            <style>{`
                :root {
                    --marquee-title: #0f172a;
                    --marquee-sub: #64748b;
                    --card-bg: #ffffff;
                    --card-border: rgba(0, 0, 0, 0.08);
                    --card-name: #0f172a;
                }

                body.dark-mode {
                    --marquee-title: #f0f4ff;
                    --marquee-sub: #7a8aaa;
                    --card-bg: #0d1120;
                    --card-border: rgba(255, 255, 255, 0.06);
                    --card-name: #e2e8f0;
                }

                .marquee-section {
                    padding: 3rem;
                    overflow: hidden;
                    width: 100%;
                    background: var(--marquee-bg);
                    transition: background 0.35s ease;
                }

                .marquee-title {
                    text-align: center;
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #007bff;
                    margin: 0 0 .3rem;
                    transition: color 0.35s ease;
                }

                .marquee-sub {
                    text-align: center;
                    font-size: .82rem;
                    color: var(--marquee-sub);
                    margin: 0 0 2.5rem;
                    transition: color 0.35s ease;
                }

                .marquee-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    overflow: hidden;
                }

                .marquee-track { display: flex; width: max-content; gap: 25px; }
                .marquee-track.row-1 { animation: scrollLeft 25s linear infinite; }
                .marquee-track.row-2 { animation: scrollRight 25s linear infinite; }
                .marquee-track:hover { animation-play-state: paused; }
                @keyframes scrollLeft  { 0%{transform:translateX(0)}    100%{transform:translateX(-50%)} }
                @keyframes scrollRight { 0%{transform:translateX(-50%)}  100%{transform:translateX(0)} }

                .marquee-card {
                    display: flex;
                    align-items: center;
                    margin: 10px 0;
                    gap: 15px;
                    border-radius: 14px;
                    padding: 10px 20px;
                    white-space: nowrap;
                    transition: border-color .25s, transform .25s, background 0.35s ease;
                }

                .marquee-card:hover {
                    border-color: var(--skill-color);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 20px -5px var(--skill-color);
                }

                .marquee-icon-img {
                    width: 28px;
                    height: 28px;
                    object-fit: contain;
                }

                .marquee-icon {
                    font-size: 2rem;
                    color: var(--skill-color);
                    width: 32px;
                    text-align: center;
                }

                .marquee-name {
                    font-weight: 700;
                    font-size: .90rem;
                    color: var(--card-name);
                    transition: color 0.35s ease;
                }

                @media (max-width: 480px) {
                    .marquee-section { padding: 3rem 0; }
                    .marquee-card { padding: 8px 14px; gap: 10px; }
                    .marquee-icon-img { width: 22px; height: 22px; }
                    .marquee-icon { font-size: 1.5rem; width: 26px; }
                    .marquee-name { font-size: .80rem; }
                    .marquee-track { gap: 16px; }
                    .marquee-wrapper { gap: 18px; }
                }
            `}</style>

            <section className="marquee-section">
                <p className="marquee-title">Technical Expertise</p>
                <p className="marquee-sub">
                    Technologies and tools I use to build modern web applications.
                </p>
                <div className="marquee-wrapper">
                    <div className="marquee-track row-1">
                        {[...half1, ...half1].map((s, i) => <SkillCard key={i} skill={s} />)}
                    </div>
                    <div className="marquee-track row-2">
                        {[...half2, ...half2].map((s, i) => <SkillCard key={i} skill={s} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technical;