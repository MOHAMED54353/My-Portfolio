import "../css/Marquee.css";

const Marquee = () => {
    const items = [
        "Creative Problem Solving",
        "Frontend Engineering",
        "AI Meets Creativity",
        "Code With Personality",
        "Modern Web Experiences",
        "Always Learning & Building",
    ];

    return (
        <div className="marquee" aria-label="Skills">
            <div className="marquee-track">
                {[...items, ...items].map((item, index) => (
                    <div
                        className={`marquee-item ${index % 2 === 1 ? "outline" : ""}`}
                        key={index}
                    >
                        <span className="marquee-text">{item}</span>
                        <span className="marquee-star">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;