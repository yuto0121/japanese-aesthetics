import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleCuisine.module.css';

export default function ArticleCuisine() {
    return (
        <div>
            <header className={styles.headerWithImage}>
                <Navigation />
                <Image
                    src="/images/cuisine_article.png"
                    alt="Cuisine"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
                +      </header>
            <main className="container">
                <h1 className={styles.mainTitle}>Cuisine</h1>
                <div className={styles.mainTitleLine} />

                {/* ヒーロー画像 */}
                <Image
                    src="/images/contact.jpg"
                    alt="Cuisine"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                {/* 本文エリア（自由に挿入） */}
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
