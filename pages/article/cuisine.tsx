// pages/article/cuisine.tsx
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleCuisine.module.css';

export default function ArticleCuisine() {
    return (
        <div>
            {/* ナビゲーション */}
            <Navigation />

            {/* タイトル＋小画像 */}
            <div className={styles.headerContent}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.mainTitle}>Cuisine</h1>
                    <div className={styles.mainTitleLine} />
                </div>
                <Image
                    src="/images/cuisine_article.png"
                    alt="Cuisine"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
            </div>

            <main className="container">
                {/* ヒーロー画像 */}
                <Image
                    src="/images/cuisine_hero.png"
                    alt="Cuisine Hero"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                {/* 本文エリア */}
                <section>
                    <p>
                        Savor the art of balance, where humble ingredients shine at their peak.
                        Explore time-honored recipes—from one-dish meals to seasonal sweets.
                        Learn the rituals behind tea, miso, and the umami-rich foundations of flavor.
                    </p>
                </section>
            </main>
        </div>
    );
}
