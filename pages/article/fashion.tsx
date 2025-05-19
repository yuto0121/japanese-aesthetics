// pages/article/fashion.tsx
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleFashion.module.css';

export default function ArticleFashion() {
    return (
        <div>
            <Navigation />

            <div className={styles.headerContent}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.mainTitle}>Fashion</h1>
                    <div className={styles.mainTitleLine} />
                </div>
                <Image
                    src="/images/fashion_article.png"
                    alt="Fashion"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
            </div>

            <main className="container">
                <Image
                    src="/images/fashion_hero.png"
                    alt="Fashion Hero"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />
                <section>
                    <p>
                        Discover the beauty in simplicity, where time-worn textiles tell their own stories.
                        From hand-woven hemp to indigo-dyed cotton, each fabric celebrates imperfection.
                        Traditional silhouettes inspire cutting-edge designers while “slow fashion” meets
                        sustainability in artisan studios across Japan.
                    </p>
                </section>
            </main>
        </div>
    );
}
