import "../css/Arcade.css";
import "../css/Books.css";

const books = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        note: "A practical guide to writing readable, maintainable code: meaningful names, small functions, and a clean structure.",
        cover: "/cleancode.jpg",
        pdf: "/Books/clean-code.pdf",
    },
    {
        title: "JavaScript Design Patterns",
        author: "Addy Osmani",
        note: "Classic design patterns explained for JavaScript, with practical examples for building scalable, maintainable apps.",
        cover: "/designpattern.jpg",
        pdf: "/Books/design-patterns-developers-.pdf",
    },
    {
        title: "الفيل الأزرق",
        author: "Ahmed Mourad",
        note: "A mysterious journey into the world of psychology, secrets, and suspense, where reality and imagination collide.",
        cover: "/الفيل الازرق.jpg",
        pdf: "/Books/الفيل الازرق.pdf",
    },
];

const Books = () => {
    return (
        <main className="arcade">
            <div className="arcade-inner">
                <header className="arcade-header mb-5">
                    <p className="arcade-eyebrow">Library</p>
                    <h1 className="arcade-title">
                        Books I'm <span className="arcade-accent">Reading</span>
                    </h1>
                    <p className="arcade-sub">
                        A small shelf of the books I read.
                    </p>
                    <div className="arcade-actions">
                        <a href="/" className="arcade-back">
                            <span aria-hidden="true">←</span>
                            Back to home
                        </a>
                    </div>
                </header>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    {books.map((book, i) => (
                        <div className="col" key={book.title}>
                            <article
                                className="arcade-card book-card h-100 align-items-center text-center"
                                style={{ "--i": i }}
                            >
                                {book.cover ? (
                                    <img
                                        className="book-cover"
                                        src={book.cover}
                                        alt={`${book.title} cover`}
                                    />
                                ) : (
                                    <div className="book-cover book-cover--empty"><small className="fs-6">comming <br /> soon</small></div>
                                )}

                                <h2 className="arcade-card-title">{book.title}</h2>
                                <p className="small opacity-75 mb-2">{book.author}</p>
                                {book.note && <p className="arcade-card-desc mb-4">{book.note}</p>}

                                {book.pdf && (
                                    <a
                                        href={book.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="arcade-play text-decoration-none mt-auto"
                                    >
                                        Read book <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Books;