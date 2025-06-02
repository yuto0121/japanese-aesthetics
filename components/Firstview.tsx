import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Firstview.module.css";

interface FirstviewProps {
    /** Fired when the splash finishes so parent can unmount */
    onFinish: () => void;
}

const totalDuration = 3200; // ms until fade‑out starts
const kanjiList = [
    "幽玄",
    "間",
    "余白",
    "静寂",
    "簡素",
    "もののあはれ",
    "金継ぎ",
    "木漏れ日",
    "枯れ葉",
    "凛",
    "粋",
];

const Firstview: React.FC<FirstviewProps> = ({ onFinish }) => {
    const [hide, setHide] = useState(false);
    const timeouts = useRef<number[]>([]);

    // Random positions & delays — memoised so they stay stable during splash lifetime
    const spots = useMemo(
        () => {
            const gridSize = 4; // 4x4のグリッドを作成
            const positions: { top: number; left: number }[] = [];

            // グリッドの各セルに1つの漢字を配置
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    positions.push({
                        top: (i * 25) + 5, // 5-80%の範囲で均等に配置
                        left: (j * 25) + 5
                    });
                }
            }

            // 位置をシャッフル
            const shuffledPositions = positions.sort(() => Math.random() - 0.5);

            return kanjiList.map((char, index) => {
                const position = shuffledPositions[index % positions.length];
                const delay = Math.random() * 2; // 0-2秒の遅延
                return { char, ...position, delay } as const;
            });
        },
        []
    );

    useEffect(() => {
        // Fade‑out after drawing completes
        timeouts.current.push(window.setTimeout(() => setHide(true), totalDuration));
        // Remove splash shortly after fade
        timeouts.current.push(
            window.setTimeout(() => {
                onFinish();
            }, totalDuration + 400)
        );
        return () => timeouts.current.forEach(clearTimeout);
    }, [onFinish]);

    return (
        <div className={`${styles.wrapper} ${hide ? styles.hide : ""}`}>
            {spots.map(({ char, top, left, delay }, i) => (
                <span
                    key={i}
                    className={styles.char}
                    style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        ["--delay" as string]: `${delay}s`,
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default Firstview;
