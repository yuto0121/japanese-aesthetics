// pages/article/living.tsx
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleLiving.module.css';

export default function ArticleLiving() {
    return (
        <div>
            <header className={styles.headerWithImage}>
                <Navigation />
                <Image
                    src="/images/living_article.png"
                    alt="Living"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
            </header>

            <main className="container">
                <h1 className={styles.mainTitle}>Living</h1>
                <div className={styles.mainTitleLine} />

                {/* ヒーロー画像 */}
                <Image
                    src="/images/contact.png"
                    alt="Living"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                {/* 本文エリア */}
                <section>
                    <p>
                        Experience spaces shaped by wood, light, and a mindful embrace of empty space.
                        Ancient joinery withstands earthquakes without nails, while tatami, shoji,
                        and tokonoma define harmony at home. Minimalism and warmth coexist—bringing calm,
                        clarity, and connection to daily life.
                    </p>
                </section>
            </main>
        </div>
    );
}
