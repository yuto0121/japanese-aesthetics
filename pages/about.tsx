import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import styles from '../styles/About.module.css';


export default function About() {

    return (
        <div>
            <Navigation />

            <main className="container">
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('About us')          // １行目
                                .start();                        // 実行
                        }}
                        options={{
                            autoStart: true,  // マウント直後に始める
                            loop: false,      // 一度きり
                            delay: 100,       // 打鍵間隔
                            deleteSpeed: 50,
                            cursor: "",  // ※ループしないので無視されます
                        }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />

                <section className={styles.contactRow}>
                    {/* === 左側：イメージ + 連絡先/SNS === */}
                    <div className={styles.leftPane}>
                        <img
                            src="/images/contact.jpg" /* ← 好きな画像に差し替え */
                            alt="Abstract curved surface"
                            className={styles.leftImage}
                        />

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese‑aesthetics‑style.com
                            </p>

                            <div className={styles.social}>
                                <a href="#" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
