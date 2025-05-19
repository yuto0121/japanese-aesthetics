// pages/article/living.tsx
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleLiving.module.css';

export default function ArticleLiving() {
    return (
        <div>
            <Navigation />

            <div className={styles.headerContent}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.mainTitle}>Living</h1>
                    <div className={styles.mainTitleLine} />
                </div>
                <Image
                    src="/images/living_article.png"
                    alt="Living"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
            </div>

            <main className="container">
                <Image
                    src="/images/living_hero.png"
                    alt="Living Hero"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />
                <section>
                    <p>
                        Experience spaces shaped by wood, light, and a mindful embrace of empty space.
                        Ancient joinery withstands earthquakes without nails, while tatami, shoji, and tokonoma
                        define harmony at home. Minimalism and warmth coexist—bringing calm, clarity,
                        and connection to daily life.
                    </p>
                </section>
            </main>
        </div>
    );
}
