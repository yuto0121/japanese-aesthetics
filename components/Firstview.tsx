// @ts-nocheck
// -*- coding: utf-8 -*-

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
            const margin = 15; // 余白の確保

            // より細かいグリッドで位置を生成
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    positions.push({
                        top: (i * 15) + margin, // 15-85%の範囲で均等に配置
                        left: (j * 15) + margin
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
