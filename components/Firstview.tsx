import { motion } from "framer-motion";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

interface FirstviewProps {
    /** Called after the 3‑second splash finishes */
    onFinish: () => void;
}

/**
 * 3‑second splash shown on first load.
 * Left‑top: typing English title.
 * Right‑top: vertical Japanese calligraphy animation.
 */
const Firstview: React.FC<FirstviewProps> = ({ onFinish }) => {
    // hide the splash after 3 s
    useEffect(() => {
        const t = setTimeout(() => onFinish(), 3000);
        return () => clearTimeout(t);
    }, [onFinish]);

    return (
        <div className="wrapper">
            {/* English title – typing */}
            <div className="enTitle">
                <Typewriter
                    onInit={(tw) => tw.typeString("Japanese Aesthetics").start()}
                    options={{ autoStart: false, delay: 80, loop: false, cursor: "" }}
                />
            </div>

            {/* Japanese title – brush/vertical animation */}
            <motion.div
                className="jpTitle"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                日本の美
            </motion.div>

            {/* Inline scoped CSS */}
            <style jsx>{`
        .wrapper {
          position: fixed;
          inset: 0;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 2rem;
          z-index: 9999; /* over everything */
        }
        .enTitle {
          font-size: 2rem;
          font-weight: 500;
          color: #000;
        }
        .jpTitle {
          font-size: 3rem;
          font-family: "Yuji Syuku", "Noto Serif JP", serif; /* brush‑style */
          writing-mode: vertical-rl;
          color: #000;
          line-height: 1.2;
        }
      `}</style>
        </div>
    );
};

export default Firstview;
