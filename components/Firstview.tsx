import React, { useEffect, useRef } from "react";

interface FirstviewProps {
    /** Called when the 3 s brush animation ends so that the parent can hide this splash */
    onFinish: () => void;
}

/**
 * 3‑second ensō (円相) brush animation shown only on the first site visit.
 * ‑ Renders an SVG path that animates its stroke‑dashoffset from full length to 0.
 * ‑ Adds a rough filter to mimic calligraphy ink.
 * ‑ Fades out, then fires `onFinish()` so the parent component can unmount it.
 */
const Firstview: React.FC<FirstviewProps> = ({ onFinish }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        // Measure path length once and set up dasharray/offset.
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;

        // Force reflow so the browser acknowledges the initial dashoffset before the transition.
        path.getBoundingClientRect();

        // Animate stroke‑dashoffset to 0 over 3 s.
        path.style.transition = "stroke-dashoffset 3s ease-in-out";
        path.style.strokeDashoffset = "0";

        // After drawing completes, fade the splash and notify parent.
        const t1 = setTimeout(() => {
            if (wrapperRef.current) {
                wrapperRef.current.style.transition = "opacity 0.4s ease";
                wrapperRef.current.style.opacity = "0";
            }
        }, 3000);

        const t2 = setTimeout(onFinish, 3400); // Parent unmount slightly after fade.

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [onFinish]);

    return (
        <div ref={wrapperRef} className="fvWrapper">
            <svg viewBox="0 0 200 200" className="ensoSvg">
                <defs>
                    {/* Subtle noise filter to roughen the stroke like real ink */}
                    <filter id="brush-rough">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.9"
                            numOctaves="3"
                            result="noise"
                        />
                        <feGaussianBlur in="noise" stdDeviation="1.2" result="blur" />
                        <feBlend in="SourceGraphic" in2="blur" mode="multiply" />
                    </filter>
                </defs>

                {/* Ensō path – one‑stroke circle */}
                <path
                    ref={pathRef}
                    d="M100 10
             C45 10 10 45 10 100
             C10 155 45 190 100 190
             C155 190 190 155 190 100
             C190 45 155 10 100 10"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#brush-rough)"
                />
            </svg>

            <style jsx>{`
        .fvWrapper {
          position: fixed;
          inset: 0;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          pointer-events: none; /* avoid interfering with page links */
        }
        .ensoSvg {
          width: 60vmin;
          height: 60vmin;
        }
      `}</style>
        </div>
    );
};

export default Firstview;
