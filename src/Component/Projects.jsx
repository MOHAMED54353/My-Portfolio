import React from "react";

const Projects = () => {
    const allProjects = [
        { title: "Fixora AI", cat: "AI Powered Platform", img: "/Screenshot 2026-03-23 200016.png" },
        { title: "Elmatgar E-Commerce", cat: "Full Stack", img: "/Screenshot 2026-03-30 120926.png", tech: "React & JSON Server" },
        { title: "Alahly Website", cat: "UI/UX & Frontend", img: "/Screenshot 2026-03-30 115019.png", link: "https://heartfelt-figolla-e590ae.netlify.app" },
        { title: "PlantiCa Website", cat: "Frontend", img: "/pp.png", link: "https://euphonious-froyo-9ba1d4.netlify.app/" },
        { title: "Alahly Playlist", cat: "Music-playlist Web App", img: "/Screenshot 2026-04-16 151916.png", link: "https://melodic-valkyrie-65d414.netlify.app" },
        { title: "Autocare System", cat: "Management", img: "/Screenshot 2026-03-26 091959.png" },
        { title: "Landing Page", cat: "Design", img: "/Screenshot 2026-03-23 200638.png", link: "https://meek-meerkat-622f81.netlify.app" },
    ];

    return (
        <section className="projects-section">
            <style>{`
                .projects-section { padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; }
                .projects-top { text-align: center; margin-bottom: 2rem; }
                .projects-top span { color: #8b5cf6; font-weight: 800; text-transform: uppercase; font-size: 0.9rem; }
                .projects-top h2 { font-size: 2.2rem; font-weight: 800; color: #0f7dec; margin-top: 0.2rem; }
                .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
                .project-card { text-decoration: none; display: block; position: relative; outline: none; }
                
                .image-wrapper { width: 100%; aspect-ratio: 16/9; border-radius: 18px; overflow: hidden; position: relative; background: #f8fafc; border: 1px solid rgba(0,0,0,0.04); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .image-overlay { position: absolute; inset: 0; background: rgba(139, 92, 246, 0.15); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; backdrop-filter: blur(4px); }
                .view-btn { background: #fff; color: #1a1a1a; padding: 8px 18px; border-radius: 50px; font-weight: 700; font-size: 0.8rem; transform: translateY(15px); transition: 0.3s ease-out; }
                
                .project-card img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: 0.6s ease; }
                .tech-tag { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.9); padding: 4px 10px; border-radius: 6px; font-size: 0.65rem; font-weight: 700; color: #8b5cf6; z-index: 2; }
                
                /* Animation الكلام */
                .project-info { padding: 1rem 0.2rem; transition: transform 0.3s ease; }
                .project-info h3 { font-size: 1.1rem; color: #0f172a; font-weight: 800; margin: 0; transition: all 0.3s ease; }
                .project-info p { color: #64748b; font-size: 0.85rem; margin-top: 0.2rem; transition: all 0.3s ease; }

                .project-card:hover .image-wrapper { transform: translateY(-8px); box-shadow: 0 15px 30px -10px rgba(139,92,246,0.25); }
                .project-card:hover .image-overlay { opacity: 1; }
                .project-card:hover .view-btn { transform: translateY(0); }
                .project-card:hover img { transform: scale(1.1); }
                
                .project-card:hover h3 { color: #8b5cf6; transform: translateX(5px); }
                .project-card:hover p { transform: translateX(5px); color: #8b5cf6; opacity: 0.8; }

                body.dark-mode .image-wrapper { background: #1e293b; border-color: rgba(255,255,255,0.1); }
                body.dark-mode .project-info h3 { color: #f1f5f9; }
                @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
            `}</style>

            <div className="projects-top" id="projects">
                <span>Projects</span>
                <h2>Featured Work</h2>
            </div>

            <div className="projects-grid">
                {allProjects.map((p, i) => (
                    <a key={i} className="project-card" href={p.link ? p.link : p.img}
                        target="_blank" rel="noreferrer">
                        <div className="image-wrapper">
                            {p.tech && <span className="tech-tag">{p.tech}</span>}
                            <img src={p.img} alt={p.title} />
                            <div className="image-overlay">
                                <div className="view-btn">View Project</div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{p.title}</h3>
                            <p>{p.cat}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;