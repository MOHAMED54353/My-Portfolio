import "../css/Arcade.css";
import "../css/ProverbsGame.css";
const steps = [
    {
        icon: "1",
        title: "اقرا المثل",
        text: "كل كارت فيه مثل شعبي معروف بنسخة برمجية.",
    },
    {
        icon: "2",
        title: "افهم المعنى",
        text: "شرح بسيط لفكرة المثل وهو عايز يقول إيه.",
    },
    {
        icon: "3",
        title: "شوفه في الشغل",
        text: "موقف حقيقي من يوميات أي مطوّر بيوضّح المثل.",
    },
];

const proverbs = [
    {
        text: "الباج اللي يجيلك منه الريح، اعمله Debug واستريح.",
        meaning:
            "ما تسيبش الباج يعذّبك. اتعامل معاه أول ما يظهر وهتريّح نفسك وتريّح اللي بعدك.",
        example:
            "باج صغير في الـ validation سبته أسبوع، وفي يوم التسليم بقى هو سبب تأخير المشروع كله.",
        origin: "الباب اللي يجيلك منه الريح، سدّه واستريح",
    },
    {
        text: "إدّي الواجهة لمطوّرها.",
        meaning:
            "اللي بيفهم تفاصيل المسافات والألوان والـ responsive هو أحق بالـ UI، لأن الواجهة أول حاجة المستخدم بيشوفها.",
        example:
            "الصفحة اتعملت بسرعة من غير اهتمام بالتفاصيل، وأول ما اتفتحت على الموبايل اتكسرت.",
        origin: "إدّي العيش لخبّازه",
    },
    {
        text: "الوقاية خير من العلاج، والـ Backup خير من الندم.",
        meaning:
            "قبل أي تعديل كبير أو عملية خطيرة على Git، اتأكد إن عندك نسخة احتياطية أو Branch ترجعله لو حصلت مشكلة.",
        example:
            "عملت تغييرات كبيرة على المشروع وعملت Reset من غير ما تحفظ شغلك، واكتشفت إن مفيش طريقة ترجّع بيها الكود.",
        origin: "الوقاية خير من العلاج",
    },
    {
        text: "جت الحزينة تفرح، لقت الـ Build بيقع.",
        meaning:
            "مفيش فرحة بتكمل للمطور، خصوصًا لما تخلص شغل المشروع وتكتشف إن الـ Build فيه Errors.",
        example:
            "خلصت كل الـ Features وكنت مستعد تعمل Deploy، لكن الـ Build فشل بسبب Error في ملف مكنتش لمسته.",
        origin: "جت الحزينة تفرح، ما لقتش مطرح",
    },
    {
        text: "اللي يزرع Bug يحصد Errors.",
        meaning:
            "أي خطأ صغير تسيبه في الكود ممكن يسبب مشاكل أكبر بعدين، فالأفضل تصلحه بدري.",
        example:
            "تجاهلت Warning في البداية، وبعد شوية بقى سبب في سلسلة Errors عطلت المشروع كله.",
        origin: "اللي يزرع يحصد",
    },
    {
        text: "اسأل مجرّب ولا تسأل ChatGPT.",
        meaning:
            "الـ AI مفيد، بس خبرة اللي اشتغل على المشكلة فعلاً بتفرق. راجع أي إجابة قبل ما تنسخها.",
        example:
            "ChatGPT اقترح مكتبة قديمة، وزميلك اللي جرّبها قالك تبعد عنها قبل ما تضيّع يوم كامل.",
        origin: "اسأل مجرّب ولا تسأل طبيب",
    },
    {
        text: "امشي عدل يحتار الـ Bug فيك.",
        meaning:
            "كود نضيف ومنظّم بخطوات واضحة، والباج بيلاقي صعوبة يلاقي مكان يستخبّى فيه.",
        example:
            "أسماء متغيرات واضحة ودوال صغيرة خلّت زميلك يلاقي المشكلة في دقايق مش ساعات.",
        origin: "امشي عدل يحتار عدوّك فيك",
    },
    {
        text: "الـ Backup قبل الـ Push، والندامة بعد الـ Crash.",
        meaning:
            "خد نسخة احتياطية قبل أي تغيير كبير، لأن الندم بعد ما كل حاجة تقع مش بيفيد.",
        example:
            "عملت force push على الـ main من غير فرع احتياطي، وشغل يومين راح.",
            origin:"العجلة من الندامة وفي التأني السلامة"
    },
];

const ProverbsGame = () => {
    return (
        <main className="arcade pp-page" dir="rtl">
            <div className="arcade-inner">
                <header className="arcade-header">
                    <p className="arcade-eyebrow">Arcade</p>
                    <h1 className="arcade-title">
                        أمثال <span className="arcade-accent">برمجية</span>
                    </h1>
                    <p className="arcade-sub">
                        مجموعة من الأمثال الشعبية المصرية اتعملها نسخة برمجية،
                        بنكهة اللي بيشتغل على الكود كل يوم. اقرا المثل، افهم
                        معناه، وشوف بيحصل في شغلنا إزاي.
                    </p>

                    <div className="arcade-actions">
                        <a href="/arcade" className="arcade-back">
                            <span aria-hidden="true">→</span>
                            الرجوع للـ Arcade
                        </a>
                    </div>
                </header>

                <ul className="pp-steps">
                    {steps.map((s) => (
                        <li key={s.title}>
                            <span className="pp-step-icon" aria-hidden="true">
                                {s.icon}
                            </span>
                            <span>
                                <strong>{s.title}</strong>
                                <span className="pp-step-text">{s.text}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <section className="pp-grid">
                    {proverbs.map((p, index) => (
                        <article
                            className="pp-card"
                            key={p.text}
                            style={{ "--i": index }}
                        >
                            <div>
                                <span className="pp-label">المثل</span>
                                <p className="pp-text">{p.text}</p>
                            </div>

                            <div className="pp-divider" />

                            <div>
                                <span className="pp-label">المعنى</span>
                                <p className="pp-meaning">{p.meaning}</p>
                            </div>

                            <div className="pp-example">
                                <span className="pp-label">في الشغل</span>
                                <p>{p.example}</p>
                            </div>

                            {p.origin && (
                                <p className="pp-origin">
                                    مستوحى من: {p.origin}
                                </p>
                            )}
                        </article>
                    ))}
                </section>

                <section className="pp-suggest">
                    <h2 className="pp-suggest-title">عندك مثل برمجي؟</h2>
                    <p className="pp-suggest-text">
                        ابعتهولي وممكن يتضاف للمجموعة.
                    </p>
                    <a href="mailto:medooomodey78@gmail.com" className="arcade-btn">
                        اقترح مثل
                    </a>
                </section>
            </div>
        </main>
    );
};

export default ProverbsGame;