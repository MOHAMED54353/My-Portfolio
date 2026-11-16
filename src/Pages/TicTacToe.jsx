import { useState, useEffect } from "react";
import "../css/Arcade.css";
import "../css/TicTacToe.css";

const LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

const getWinner = (board) => {
    for (const line of LINES) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { player: board[a], line };
        }
    }
    return null;
};

const pickComputerMove = (board) => {
    const empty = board.map((v, i) => (v ? null : i)).filter((i) => i !== null);
    const findWinning = (p) =>
        empty.find((i) => getWinner(board.map((v, j) => (j === i ? p : v))));

    return (
        findWinning("O") ??
        findWinning("X") ??
        (board[4] ? null : 4) ??
        empty[Math.floor(Math.random() * empty.length)]
    );
};

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [mode, setMode] = useState("cpu"); // "cpu" | "two"
    const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });

    const player = xTurn ? "X" : "O";
    const result = getWinner(board);
    const isDraw = !result && board.every(Boolean);
    const gameOver = Boolean(result) || isDraw;
    const cpuTurn = mode === "cpu" && !xTurn && !gameOver;

    const play = (i) => {
        if (board[i] || gameOver) return;

        const next = [...board];
        next[i] = player;
        setBoard(next);
        setXTurn(!xTurn);

        const win = getWinner(next);
        if (win) setScores((s) => ({ ...s, [win.player]: s[win.player] + 1 }));
        else if (next.every(Boolean)) setScores((s) => ({ ...s, draw: s.draw + 1 }));
    };

    const reset = () => {
        setBoard(Array(9).fill(null));
        setXTurn(true);
    };

    const changeMode = (m) => {
        setMode(m);
        setScores({ X: 0, O: 0, draw: 0 });
        reset();
    };

    useEffect(() => {
        if (!cpuTurn) return;
        const timer = setTimeout(() => play(pickComputerMove(board)), 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cpuTurn, board]);

    const cpu = mode === "cpu";
    let status = `${player}'s turn`;
    if (cpu && !gameOver) status = xTurn ? "Your turn (X)" : "Computer is thinking…";
    if (isDraw) status = "It's a draw";
    if (result) {
        status = cpu
            ? result.player === "X" ? "You win!" : "Computer wins"
            : `${result.player} wins!`;
    }

    const labels = cpu
        ? ["You (X)", "Computer (O)", "Draws"]
        : ["Player X", "Player O", "Draws"];
    const values = [scores.X, scores.O, scores.draw];

    return (
        <main className="arcade">
            <div className="arcade-inner">
                <header className="arcade-header mb-5">
                    <p className="arcade-eyebrow">Arcade</p>
                    <h1 className="arcade-title">
                        Tic Tac <span className="arcade-accent">Toe</span>
                    </h1>
                    <p className="arcade-sub">
                        الفوز بثلاثة رموز متتالية! العب ضد صديقك أو واجه الكمبيوتر، لكن خلي بالك… مستوى الكمبيوتر مستحيل تقريبًا تهزمه! 😈
                    </p>
                    <div className="arcade-actions">
                        <a href="/arcade" className="arcade-back">
                            <span aria-hidden="true">←</span>
                            Back to Arcade
                        </a>
                    </div>
                </header>

                <div className="arcade-card mx-auto w-100" style={{ maxWidth: 420 }}>
                    <div className="d-flex justify-content-center gap-2 mb-4">
                        <button
                            type="button"
                            className={`ttt-mode ${cpu ? "is-active" : ""}`}
                            onClick={() => changeMode("cpu")}
                        >
                            vs Computer
                        </button>
                        <button
                            type="button"
                            className={`ttt-mode ${!cpu ? "is-active" : ""}`}
                            onClick={() => changeMode("two")}
                        >
                            2 Players
                        </button>
                    </div>

                    <div className="d-flex justify-content-around text-center mb-3">
                        {labels.map((label, i) => (
                            <div key={label}>
                                <div className="small opacity-75">{label}</div>
                                <div className="fs-4 fw-bold">{values[i]}</div>
                            </div>
                        ))}
                    </div>

                    <p className="ttt-status text-center fw-bold fs-5 mb-3">{status}</p>

                    <div className="d-grid gap-2 ttt-board">
                        {board.map((cell, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`ttt-cell ${cell ? cell.toLowerCase() : ""} ${result?.line.includes(i) ? "is-win" : ""}
                                    }`}
                                onClick={() => play(i)}
                                disabled={Boolean(cell) || gameOver || cpuTurn}
                                aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ""}`}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button type="button" className="arcade-btn" onClick={reset}>
                            Restart
                            <span className="arcade-arrow" aria-hidden="true">↻</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TicTacToe;