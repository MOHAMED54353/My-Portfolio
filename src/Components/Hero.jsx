import React from "react";
import "../css/Hero.css";

const Hero = () => {
    return (
        <section className="hd-wrap">
            <div className="hd-glow hd-glow--left" />
            <div className="hd-glow hd-glow--right" />
            <div className="hd-glow hd-glow--center" />

            <div className="hd-cards" aria-hidden="true">
                <div className="hd-card hd-card--1" />
                <div className="hd-card hd-card--2" />
                <div className="hd-card hd-card--3" />
                <div className="hd-card hd-card--4" />
            </div>

            <p className="hd-sub">
                Welcome to My Website
            </p>

            <p className="hd-eyebrow">
                CRAFTING DIGITAL EXPERIENCES WITH MODERN WEB TECH
            </p>

            <h1 className="hd-heading">
                First impressions last<br />
                so <span className="hd-accent">make it count</span>
            </h1>

            <div className="hd-btns">
                <a
                    href="https://www.linkedin.com/in/muhammed-el-sayed-416739282"
                    target="_blank"
                    rel="noreferrer"
                    className="hd-btn"
                >
                    Linked in
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="#projects" className="hd-btn">
                    Show my work
                    <span className="hd-arrow" aria-hidden="true">
                        <svg viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M1.5 6.5L6.5 1.5M4 1.5h2.5v2.5" />
                        </svg>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Hero;