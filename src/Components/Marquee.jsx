import "../css/Marquee.css";

const Marquee = () => {
    const items = [
        "React",
        "JavaScript",
        "UI Design",
        "Responsive",
        "Animations",
        "Clean Code",
    ];

    return (
        <div className="marquee" aria-label="Skills">
            <div className="marquee-track">
                {/* بنكرر الليست مرتين عشان اللوب يبقى سلس */}
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