import {
    FaInstagram
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
                    <p className={styles.aboutText}>Welcome to our site. I was born and raised in Japan and later had the privilege of studying in Europe. Immersed in diverse cultures and perspectives, I came to deeply appreciate how universal and resonant Japan’s unique aesthetic philosophy can be—especially its minimalist sensibility and the celebration of imperfection (known as “wabi-sabi”). These ideas often defy direct translation into English, yet they offer profound insight and beauty that I believe people around the world should experience firsthand. With that conviction, I created this online magazine to shine a light on the subtle but powerful concepts that define Japanese beauty.

                        Here, you’ll find carefully curated articles under the theme “Fashion · Food · Home × Japan.” We’ll explore topics such as:

                        The art of reducing life to its essentials while still cultivating comfort and warmth through Japanese minimalism

                        Embracing the passage of time and the “incomplete” through wabi-sabi, finding beauty in fleeting moments and natural wear

                        How Japanese cuisine and tableware reveal an attention to detail and seasonal change that can enrich everyday dining

                        By sharing personal anecdotes from my time in Europe alongside examples of modern Japanese living, we aim to offer practical ideas for incorporating these timeless aesthetics into your own lifestyle. Whether you’re curious about updating your wardrobe with subtle, nature-inspired pieces, discovering the quiet elegance of a Japanese tea ceremony, or learning how a simple room layout can encourage mindfulness, our articles will guide you step by step.

                        Be sure to check back often for new posts. And if you’d like to have our latest articles delivered straight to your inbox, please enter your email address below to subscribe to our newsletter. Together, let’s explore how Japan’s refined beauty can inspire and uplift us all.
                </section>

                <section className={styles.contactRow}>
                    <div className={styles.leftPane}>

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese.aesthetics.style@gmail.com
                            </p>

                            <div className={styles.social}>
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
