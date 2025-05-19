import Navigation from '../../components/Navigation';
import styles from '../../styles/Article.module.css';

export default function Article() {
    return (
        <div>
            <Navigation />
            <main className="container">
                <h1 className={styles.mainTitle}>Article</h1>
                <div className={styles.mainTitleLine}></div>
                <section className={styles.visionRow}>
                    <div className={styles.visionImageWrap}>
                        <img src="/images/contact.jpg" alt="Article" className={styles.visionImage} />
                    </div>
                    <div className={styles.visionTextWrapCentered}>
                        <h2 className={styles.visionTitleCentered}>Article</h2>
                        <p className={styles.visionTextCentered}>
                            "Articles are here"
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
} 