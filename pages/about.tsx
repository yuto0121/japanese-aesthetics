import Navigation from '../components/Navigation';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div>
            <Navigation />
            <main className="container">
                <h1 className={styles.mainTitle}>About</h1>
                <div className={styles.mainTitleLine}></div>
                <section className={styles.visionRow}>
                    <div className={styles.visionImageWrap}>
                        <img src="/images/about.jpg" alt="About" className={styles.visionImage} />
                    </div>
                    <div className={styles.visionTextWrapCentered}>
                        <h2 className={styles.visionTitleCentered}>Our Vision</h2>
                        <p className={styles.visionTextCentered}>
                            "Bringing the Essence of Japanese Beauty to the World"
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
} 