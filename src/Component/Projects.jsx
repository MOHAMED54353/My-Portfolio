import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiEye, FiGithub, FiX, FiTag, FiCheckCircle, FiClock, FiActivity } from "react-icons/fi";
import "../css/Projects.css";


// status: "completed" | "in-progress"
const projects = [
    {
        title: "Fixora AI",
        status: "completed",
        desc: "An AI-powered car maintenance platform that simplifies vehicle servicing through intelligent issue diagnosis, online service booking, and technician coordination. Built with React, featuring role-based experiences for customers, technicians, and administrators, API integration, authentication, booking management, and a complete service workflow. Developed the frontend as part of a collaborative graduation project with a dedicated backend team.",
        tech: [
            "SaaS",
            "React.Js",
            "REST APIs",
            "React Router",
            "Bootstrap",
            "Axios",
            "JavaScript",
            "JWT Authentication",
            "Context API",
            "Zod",
            "React Toastify"
        ],
        img: "/fixora1.png",
        images: ["/fixora1.png", "/fixora2.png", "/fixora4.png", "/fixora3.png"],
        link: "https://fixora-one.vercel.app/home",
        github: "https://github.com/MOHAMED54353/Fixora-Ai",
    },
    {
        title: "ATHAR® — Premium Fashion",
        status: "completed",
        desc: "A premium fashion e-commerce experience built around a distinctive visual identity and immersive digital storytelling. Combines sophisticated product presentation, refined layouts, smooth animations, and responsive interactions to create an engaging brand experience across devices. Designed to bring modern fashion aesthetics into an elegant, interactive web interface.",
        tech: [
            "E-commerce",
            "React.js",
            "React Router",
            "Bootstrap",
            "JavaScript",
            "CSS",
            "Font-Awseome",
            "Framer Motion",
            "React Icons",
        ],
        img: "/athar.png",
        images: ["/athar.png", "/athar2.png", "/athar3.png", "/athar4.png", "/athar5.png",],
        link: "https://athar-gules.vercel.app/",
        github: "https://github.com/MOHAMED54353/Athar",
    },
    {
        title: "Elmatgar — E-Commerce",
        status: "in-progress",
        desc: "An interactive e-commerce application that enables users to explore products, view product information, and manage their shopping cart. Built with React and JavaScript, using JSON Server as a mock backend to simulate API requests and data operations during development.",
        tech: [
            "E-commerce",
            "React.js",
            "Bootstrap",
            "JavaScript",
            "JSON Server",
            "REST API"
        ],
        img: "/Screenshot 2026-03-30 120926.png",
        images: [],
        link: "",
        github: "",
    },
    {
        title: "Wasel — Shipment Tracking",
        status: "completed",
        desc: "A React-based shipment tracking application designed to give users a clear view of their delivery information and shipment status. Focuses on organizing tracking details into an intuitive interface, with reusable components and a responsive layout for a consistent experience across devices.",
        tech: [
            "React.Js",
            "React Router",
            "Tailwend CSS",
            "JavaScript",
            "CSS",
            "Bootstrap",
        ],
        img: "/wasel.png",
        images: ["/wasel.png", "/wsel2.png", "/wsel3.png",],
        link: "https://wsel-app.vercel.app/",
        github: "https://github.com/MOHAMED54353/WSEL-Shipping-Tracker",
    },
    {
        title: "The UX Review — Blog Website",
        status: "in-progress",
        desc: "A modern, responsive blog website for UX design and digital culture, built around a bold neo-brutalist visual identity. Features a hero section, a latest articles feed with category tags and post details, a sticky trending and categories sidebar, author profile cards with social links, and a community section with testimonials. Built entirely with HTML and CSS, with a focus on strong typography, thick borders, hard shadows, interactive hover effects, and a clean, responsive layout.",
        tech: [
            "HTML5",
            "CSS3",
            "Flexbox",
            "Responsive Design",
            "Font Awesome",
            "Google Fonts"
        ],
        img: "/review-blog1.png",
        images: ["/review-blog1.png", "/review-blog2.png", "/review-blog3.png"],
        link: "https://the-ux-review-blog.vercel.app/",
        github: "https://github.com/MOHAMED54353/Review-Blog",
    },
    {
        title: "PlantiCa — Plant Store",
        status: "in-progress",
        desc: "A React-based plant shopping experience that brings plant discovery and online product browsing into one interface. Designed to showcase plants and related offerings through reusable UI components and responsive layouts. Currently focused on the frontend, with backend integration planned for a future stage.",
        tech: [
            "E-commerce",
            "React.Js",
            "Bootstrap",
            "JavaScript",
            "CSS"
        ],
        img: "/pp.png",
        images: ["/pp.png", "/p2.png", "/p3.png",],
        link: "https://plantica-pearl.vercel.app/",
        github: "https://github.com/MOHAMED54353/PlantiCa-Plant-Store",
    },
    {
        title: "Qatma — Egyptian Home Kitchen",
        status: "completed",
        desc: "A responsive website for an Egyptian home kitchen, designed to introduce the brand, showcase its food offerings, and create a welcoming online presence. Built with semantic HTML and custom CSS, with a focus on visual consistency, clear content hierarchy, and an accessible browsing experience.",
        tech: [
            "HTML5",
            "CSS3"
        ],
        img: "/Qatma.png",
        images: ["/Qatma.png", "/qatma2.png", "/qatma3.png",],
        link: "https://qatma-seven.vercel.app/",
        github: "https://github.com/MOHAMED54353/Qatma",
    },
    {
        title: "Al Ahly — Interactive Fan Website",
        status: "completed",
        desc: "A React-based fan website inspired by Al Ahly SC, combining football-themed visuals, interactive UI elements, and frontend animations into an engaging digital experience. Created as a personal project to explore creative interface development, animation techniques, and the presentation of a football club's identity through the web.",
        tech: [
            "React.Js",
            "JavaScript",
            "Bootstrap",
            "CSS",
            "Frontend Animations"
        ],
        img: "/alahly.png",
        images: ["/alahly.png", "/alahly2.png", "/alahly3.png", "/alahly4.png",],
        link: "https://alahly-liart.vercel.app/",
        github: "https://github.com/MOHAMED54353/Al-Ahly-Interactive-Website",
    },
    {
        title: "El-Nasser — Medical Laboratory",
        status: "completed",
        desc: "A website for a medical laboratory, built to present laboratory services and essential information through a clear, organized interface. Developed using HTML and CSS, with an emphasis on readable content, structured layouts, and straightforward navigation to help visitors find relevant information.",
        tech: [
            "HTML5",
            "CSS3"
        ],
        img: "/elnasser.png",
        images: ["/elnasser.png", "/elnasser2.png", "/elnasser3.png", "/elnasser4.png",],
        link: "https://el-nasser-lab.vercel.app/",
        github: "https://github.com/MOHAMED54353/El-nasser-lab",
    },
    {
        title: "Autocare — Automotive Landing Page",
        status: "in-progress",
        desc: "A landing page for an automotive care business, designed to present car maintenance services and establish a clear online brand presence. Built with HTML and CSS, focusing on structured content, service presentation, and a clean visual layout.",
        tech: [
            "HTML5",
            "CSS3"
        ],
        img: "/Screenshot 2026-03-26 091959.png",
        images: [],
        link: "",
        github: "",
    },
];

const MAX_CARD_TAGS = 3;

const STATUS = {
    completed: { label: "Completed", icon: <FiCheckCircle /> },
    "in-progress": { label: "In Progress", icon: <FiClock /> },
};

const StatusBadge = ({ status, inline }) => {
    const key = STATUS[status] ? status : "in-progress";
    return (
        <span className={`status-badge ${key}${inline ? " inline" : ""}`}>
            {STATUS[key].icon} {STATUS[key].label}
        </span>
    );
};

const IconButton = ({ href, label, children }) =>
    href ? (
        <a
            className="icon-btn"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
        >
            {children}
        </a>
    ) : (
        <span className="icon-btn disabled" aria-disabled="true" title={`${label} (not available)`}>
            {children}
        </span>
    );

const ModalButton = ({ href, primary, icon, children, disabledText }) =>
    href ? (
        <a
            className={`pj-btn${primary ? " primary" : ""}`}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {icon} {children}
        </a>
    ) : (
        <span className="pj-btn disabled" aria-disabled="true">
            {icon} {disabledText || children}
        </span>
    );

const Projects = () => {
    const [selected, setSelected] = useState(null);
    const [activeImg, setActiveImg] = useState(0);

    const openDetails = (p) => {
        setActiveImg(0);
        setSelected(p);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        document
            .querySelectorAll(".projects-section .animate-on-scroll")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!selected) return;
        const onKey = (e) => e.key === "Escape" && setSelected(null);
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [selected]);

    const gallery = selected
        ? selected.images && selected.images.length > 0
            ? selected.images
            : [selected.img]
        : [];

    return (
        <section className="projects-section">
            <div className="projects-top animate-on-scroll" id="projects">
                <span>Projects</span>
                <h2>Featured Work</h2>
            </div>

            <div className="projects-grid">
                {projects.map((p, i) => (
                    <article
                        key={p.title}
                        className="project-card animate-on-scroll"
                        style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
                    >
                        <div className="card-image">
                            <StatusBadge status={p.status} />
                            <img
                                src={encodeURI(p.img)}
                                alt={p.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="project-body">
                            <h3>{p.title}</h3>
                            <p className="card-desc">{p.desc}</p>

                            {p.tech.length > 0 && (
                                <ul className="tech-list card-tags">
                                    {p.tech.slice(0, MAX_CARD_TAGS).map((t) => (
                                        <li key={t} className="tech-tag">{t}</li>
                                    ))}
                                    {p.tech.length > MAX_CARD_TAGS && (
                                        <li className="tech-tag more">+{p.tech.length - MAX_CARD_TAGS}</li>
                                    )}
                                </ul>
                            )}

                            <div className="card-actions">
                                <button
                                    type="button"
                                    className="details-btn"
                                    onClick={() => openDetails(p)}
                                >
                                    <FiEye /> View Details
                                </button>
                                <IconButton href={p.link} label="Live demo">
                                    <FiEye />
                                </IconButton>
                                <IconButton href={p.github} label="GitHub repository">
                                    <FiGithub />
                                </IconButton>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selected &&
                createPortal(
                    <div className="pj-backdrop" onClick={() => setSelected(null)}>
                        <div
                            className="pj-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-label={selected.title}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="pj-head">
                                <h3>{selected.title}</h3>
                                <button
                                    type="button"
                                    className="pj-close"
                                    onClick={() => setSelected(null)}
                                    aria-label="Close"
                                    autoFocus
                                >
                                    <FiX />
                                </button>
                            </div>

                            <div className="pj-grid">
                                <div className="pj-gallery">
                                    <img
                                        className="pj-main-img"
                                        src={encodeURI(gallery[activeImg] || selected.img)}
                                        alt={selected.title}
                                    />
                                    {gallery.length > 1 && (
                                        <div className="pj-thumbs">
                                            {gallery.map((src, idx) => (
                                                <button
                                                    key={src}
                                                    type="button"
                                                    className={`thumb${idx === activeImg ? " active" : ""}`}
                                                    onClick={() => setActiveImg(idx)}
                                                    aria-label={`Screenshot ${idx + 1}`}
                                                >
                                                    <img src={encodeURI(src)} alt="" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pj-info">
                                    <p className="pj-desc">{selected.desc}</p>

                                    <hr />
                                    <div className="pj-row pj-status-row">
                                        <span className="pj-label">
                                            <FiActivity /> Status:
                                        </span>
                                        <StatusBadge status={selected.status} inline />
                                    </div>

                                    {selected.tech.length > 0 && (
                                        <>
                                            <hr />
                                            <div className="pj-row">
                                                <span className="pj-label">
                                                    <FiTag /> Tags:
                                                </span>
                                                <ul className="tech-list">
                                                    {selected.tech.map((t) => (
                                                        <li key={t} className="tech-tag">{t}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}

                                    <hr />
                                    <div className="pj-buttons">
                                        <ModalButton
                                            href={selected.link}
                                            primary
                                            icon={<FiEye />}
                                            disabledText="Demo coming soon"
                                        >
                                            View Demo
                                        </ModalButton>
                                        <ModalButton
                                            href={selected.github}
                                            icon={<FiGithub />}
                                            disabledText="Source Code"
                                        >
                                            Source Code
                                        </ModalButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}

            <div className="spline-wrapper animate-on-scroll">
                <iframe
                    src="https://my.spline.design/nexbotbyaximoriscopycopy-44c7Ibh8YDoKtcocPFkPL2pD/"
                    title="Spline 3D Scene"
                    loading="lazy"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default Projects;