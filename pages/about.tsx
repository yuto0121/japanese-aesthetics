import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import styles from '../styles/About.module.css';


export default function About() {

    return (
        <div>
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
                    <h2 className={styles.aboutTitle}>Our Vision</h2>
                    <h3 className={styles.aboutSubtitle}>“Bringing the Essence of Japanese Beauty to the World”</h3>
                    <p className={styles.aboutText}>Born and raised in Japan and later having studied in Europe, I was fortunate to immerse myself in a rich tapestry of cultures and perspectives. From that vantage point, I gained a profound appreciation for how uniquely beautiful and distinctive Japan truly is—and I discovered that many core aspects of its aesthetic philosophy defy a direct English equivalent.

                        With this in mind, I created this online publication to shed light on the subtle, yet powerful concepts that define Japanese beauty. Here, you will find carefully curated articles on “Fashion · Food · Home × Japan,” each offering in-depth insights into Japanese style, culinary traditions, architectural sensibilities, and everyday living—always presented through the lens of Japan’s refined aesthetic.

                        If you would like to receive our newest articles delivered straight to your inbox, please enter your email address below to subscribe to our newsletter. We look forward to exploring Japan’s timeless elegance together.</p>
                </section>

                <section className={styles.contactRow}>
                    <div className={styles.leftPane}>

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese.aesthetics.style@gmail.com
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
