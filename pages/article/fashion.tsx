import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleFashion.module.css';

export default function ArticleFashion() {
    return (
        <div>
            <Navigation />
            <main className="container">
                <h1 className={styles.mainTitle}>Fashion</h1>
                <div className={styles.mainTitleLine} />

                <Image
                    src="/images/fashion_article.png"
                    alt="Fashion"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                <section>
                    <p>
                        Discover the beauty in simplicity, where time-worn textiles tell their own
                        stories. From hand-woven hemp to indigo-dyed cotton, each fabric celebrates
                        imperfection while inspiring modern designers worldwide.
                    </p>
                </section>
            </main>
        </div>
    );
}
