import { useState, useMemo } from "react";
import "../css/Arcade.css";
import "../css/JsonFormatter.css";

const FORMATS = [
    { key: "2", label: "2 spaces", space: 2 },
    { key: "4", label: "4 spaces", space: 4 },
    { key: "tab", label: "Tab", space: "\t" },
    { key: "min", label: "Minify", space: 0 },
];

const describeError = (text, err) => {
    const match = err.message.match(/position (\d+)/);
    if (!match) return err.message;

    const before = text.slice(0, Number(match[1]));
    const line = before.split("\n").length;
    const column = before.length - before.lastIndexOf("\n");
    const message = err.message.replace(/ in JSON at position.*/, "");
    return `${message} (line ${line}, column ${column})`;
};


const JsonFormatter = () => {
    const [format, setFormat] = useState(FORMATS[0]);
    const [copied, setCopied] = useState(false);
    const [input, setInput] = useState(`{
        "name": "Muhammed El-Sayed",
            "role": "Front-End Engineer",
            "age": 22,
        "location": "Egypt",
    "skills": ["React", "JavaScript"],
        "available": true
        }`);
    const { output, error } = useMemo(() => {
        if (!input.trim()) return { output: "", error: null };
        try {
            return {
                output: JSON.stringify(JSON.parse(input), null, format.space),
                error: null,
            };
        } catch (err) {
            return { output: "", error: describeError(input, err) };
        }
    }, [input, format]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            alert("Unable to copy");
        }
    };

    return (
        <main className="arcade">
            <div className="arcade-inner">
                <header className="arcade-header mb-5">
                    <p className="arcade-eyebrow">Arcade</p>
                    <h1 className="arcade-title">
                        JSON <span className="arcade-accent">Formatter</span>
                    </h1>
                    <p className="arcade-sub">
                        Format, validate, and minify JSON on the fly.
                    </p>
                    <div className="arcade-actions">
                        <a href="/arcade" className="arcade-back">
                            <span aria-hidden="true">←</span>
                            Back to Arcade
                        </a>
                    </div>
                </header>

                <div className="arcade-card">
                    <select
                        className="form-select form-select-sm json-select w-auto mb-3"
                        value={format.key}
                        onChange={(e) =>
                            setFormat(FORMATS.find((f) => f.key === e.target.value))
                        }
                        aria-label="Output format"
                    >
                        {FORMATS.map((f) => (
                            <option key={f.key} value={f.key}>{f.label}</option>
                        ))}
                    </select>

                    <div className="row g-3">
                        <div className="col-lg-6">
                            <div className="json-head d-flex justify-content-between align-items-center">
                                <label className="json-label" htmlFor="json-input">Input</label>
                                <button
                                    type="button"
                                    className="json-link"
                                    onClick={() => setInput("")}
                                    disabled={!input}
                                >
                                    Clear
                                </button>
                            </div>
                            <textarea
                                id="json-input"
                                className="form-control json-box"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder='{"hello": "world"}'
                                spellCheck={false}
                            />
                        </div>

                        <div className="col-lg-6">
                            <div className="json-head d-flex justify-content-between align-items-center">
                                <label className="json-label" htmlFor="json-output">Output</label>
                                <button
                                    type="button"
                                    className="json-link"
                                    onClick={handleCopy}
                                    disabled={!output}
                                >
                                    {copied ? "Copied ✓" : "Copy"}
                                </button>
                            </div>
                            <textarea
                                id="json-output"
                                className="form-control json-box"
                                value={output}
                                readOnly
                                spellCheck={false}
                            />
                        </div>
                    </div>

                    <p className="small fw-semibold mt-3 mb-0">
                        {error ? (
                            <span className="text-danger">✗ {error}</span>
                        ) : input.trim() ? (
                            <span className="text-success">✓ Valid JSON</span>
                        ) : (
                            <span className="opacity-75">Paste some JSON to get started</span>
                        )}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default JsonFormatter;