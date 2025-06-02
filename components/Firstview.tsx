import React, { useEffect, useRef } from "react";

interface FirstviewProps {
    /** Callback fired when the intro finishes (user scrolled to the end) */
    onFinish: () => void;
}

/**
 * Intro splash that shows a calligraphy‑style circle that gradually draws as the user scrolls.
 * Moving the cursor paints additional brush strokes.
 * When the scroll reaches the bottom (100 % progress), `onFinish` is triggered so the parent can
 * unmount this component and reveal the real homepage.
 */
const Firstview: React.FC<FirstviewProps> = ({ onFinish }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<SVGCircleElement>(null);
    const pathLenRef = useRef<number>(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    /* ── initialise circle dasharray / dashoffset ─────────────────────────── */
    useEffect(() => {
        if (!circleRef.current) return;
        const len = circleRef.current.getTotalLength();
        pathLenRef.current = len;
        circleRef.current.style.strokeDasharray = `${len}`;
        circleRef.current.style.strokeDashoffset = `${len}`;
    }, []);

    /* ── scroll‑based drawing progress & completion check ─────────────────── */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onScroll = () => {
            const max = el.scrollHeight - el.clientHeight;
            const prog = el.scrollTop / max;
            if (circleRef.current) {
                const offset = pathLenRef.current * (1 - prog);
                circleRef.current.style.strokeDashoffset = `${offset}`;
            }
            if (prog >= 1) {
                onFinish();
            }
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [onFinish]);

    /* ── cursor brush‑stroke drawing on canvas ─────────────────────────────── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // full‑size canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // draw as the mouse moves
        let prev: { x: number; y: number } | null = null;
        const draw = (e: MouseEvent) => {
            if (!ctx) return;
            if (!prev) {
                prev = { x: e.clientX, y: e.clientY };
                return;
            }
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#000";
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            prev = { x: e.clientX, y: e.clientY };
        };

        const reset = () => (prev = null);

        window.addEventListener("mousemove", draw);
        window.addEventListener("mouseup", reset);
        window.addEventListener("mouseleave", reset);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", draw);
            window.removeEventListener("mouseup", reset);
            window.removeEventListener("mouseleave", reset);
        };
    }, []);

    /* ── render ────────────────────────────────────────────────────────────── */
    return (
        <div ref={containerRef} className="fvWrapper">
            {/* scrollable spacer to give us ~150 vh of scroll range */}
            <div style={{ height: "150vh" }} />

            {/* central SVG circle */}
            <svg viewBox="0 0 200 200" className="circleSvg">
                <circle
                    ref={circleRef}
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#000"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
            </svg>

            {/* brush‑stroke canvas overlay */}
            <canvas ref={canvasRef} className="brushCanvas" />

            <style jsx>{`
        .fvWrapper {
          position: fixed;
          inset: 0;
          background: #fff;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain; /* prevent body bouncing */
          z-index: 9999;
        }
        .circleSvg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50vmin;
          height: 50vmin;
          pointer-events: none;
        }
        .brushCanvas {
          position: absolute;
          inset: 0;
        }
      `}</style>
        </div>
    );
};

export default Firstview;
