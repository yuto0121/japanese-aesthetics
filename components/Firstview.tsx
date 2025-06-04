import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Firstview.module.css";

interface FirstviewProps {
    /** Fired when the splash finishes so parent can unmount */
    onFinish: () => void;
}

const totalDuration = 3000; // 3秒後にフェードアウト開始
const kanjiList = [
    "幽玄",
    "間",
    "余白",
    "静寂",
    "簡素",
    "あはれ",
    "金継ぎ",
    "木漏れ日",
    "枯れ葉",
    "凛",
    "粋",
    "余韻",
    "生きがい",
    "風流",
    "一期一会",
    "刹那"
];

const Firstview: React.FC<FirstviewProps> = ({ onFinish }) => {
    const [hide, setHide] = useState(false);
    const timeouts = useRef<number[]>([]);

    // Random positions & delays — memoised so they stay stable during splash lifetime
    const spots = useMemo(
        () => {
            const positions: { top: number; left: number }[] = [];
            const margin = window.innerWidth <= 768 ? 10 : 15; // スマートフォンではマージンを小さく
            const gridSize = window.innerWidth <= 768 ? 3 : 4; // スマートフォンでは3x3グリッド

            // グリッドで基本位置を生成
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    // 基本位置に±5%のランダムなオフセットを追加
                    const randomOffset = () => (Math.random() - 0.5) * 10;
                    const spacing = window.innerWidth <= 768 ? 25 : 20; // スマートフォンでは間隔を広く
                    positions.push({
                        top: (i * spacing) + margin + randomOffset(),
                        left: (j * spacing) + margin + randomOffset()
                    });
                }
            }

            // 位置をシャッフル
            const shuffledPositions = positions.sort(() => Math.random() - 0.5);

            return kanjiList.map((char, index) => {
                const position = shuffledPositions[index % positions.length];
                const delay = Math.random() * 1.5;
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
