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

                <section className={styles.aboutSection}>
                    <h2>Our Vision</h2>
                    <h3>“Bringing the Essence of Japanese Beauty to the World”</h3>
                    <p>I was born and raised in Japan and later went to Europe to study. There, I encountered countless new cultures and ways of seeing the world—and it was from that vantage point that I truly rediscovered how special and extraordinary Japan is. I also realized that many facets of Japanese aesthetic sensibility simply have no direct equivalent in English.

                        That’s why I’ve launched this blog: to introduce and explain the unique concepts of Japanese beauty. Here, you’ll find articles exploring “衣・食・住 × Japan”—from fashion and cuisine to architecture and lifestyle—each viewed through the lens of Japanese aesthetics.

                        If you’d like to receive our latest posts straight to your inbox, please enter your email below to subscribe to our newsletter. Thank you for joining us on this journey!</p>
                </section>

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
