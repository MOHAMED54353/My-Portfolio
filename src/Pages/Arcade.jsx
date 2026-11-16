import "../css/Arcade.css";
const games = [
    {
        icon: "📜",
        title: "Programming Proverbs",
        description: "Developer proverbs on flip cards. Tap to reveal what each one means.",
        to: "/arcade/proverbs",
    },
    {
        icon: "⭕",
        title: "Tic Tac Toe",
        description: "Three in a row wins.",
    },
    {
        icon: "⌨️",
        title: "Typing Speed",
        description: "Test your words per minute.",
    },

];

const Arcade = () => {
    return (
        <main className="arcade">
            <div className="arcade-inner">
                <header className="arcade-header">
                    <p className="arcade-eyebrow">Arcade</p>
                    <h1 className="arcade-title">
                        Take a break, <span className="arcade-accent">play a game</span>
                    </h1>
                    <p className="arcade-sub">
                        A fun collection of mini-games to challenge yourself,
                        test your skills, and enjoy. Pick a game and let the fun begin!
                    </p>

                    <div className="arcade-actions">
                        <a href="/" className="arcade-back">
                            <span aria-hidden="true">←</span>
                            Back to home
                        </a>
                        <a href="#games" className="arcade-btn">
                            Browse games
                            <span className="arcade-arrow" aria-hidden="true">↓</span>
                        </a>
                    </div>
                </header>

                <section id="games" className="arcade-grid">
                    {games.map((game, index) => {
                        const playable = Boolean(game.to);
                        const Tag = playable ? "a" : "article";

                        return (
                            <Tag
                                key={game.title}
                                className={`arcade-card ${playable ? "is-playable" : "is-soon"
                                    }`}
                                style={{ "--i": index }}
                                {...(playable ? { href: game.to } : {})}
                            >
                                <div className="arcade-card-top">
                                    <span className="arcade-icon" aria-hidden="true">
                                        {game.icon}
                                    </span>
                                    <span
                                        className={`arcade-badge ${playable ? "" : "arcade-badge--soon"
                                            }`}
                                    >
                                        {playable ? "Playable" : "Coming soon"}
                                    </span>
                                </div>

                                <h2 className="arcade-card-title">{game.title}</h2>
                                <p className="arcade-card-desc">{game.description}</p>

                                {playable && (
                                    <span className="arcade-play">
                                        Play <span aria-hidden="true">→</span>
                                    </span>
                                )}
                            </Tag>
                        );
                    })}
                </section>

                <p className="arcade-tagline">Less scrolling, more playing.</p>
            </div>
        </main>
    );
};

export default Arcade;