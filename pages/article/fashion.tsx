// pages/article/fashion.tsx
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleFashion.module.css';

export default function ArticleFashion() {
    return (
        <div>
            <header className={styles.headerWithImage}>
                <Navigation />
                <Image
                    src="/images/fashion_article.png"
                    alt="Fashion"
                    width={250}
                    height={250}
                    className={styles.sideImage}
                    priority
                />
            </header>

            <main className="container">
                <h1 className={styles.mainTitle}>Fashion</h1>
                <div className={styles.mainTitleLine} />

                {/* ヒーロー画像 */}
                <Image
                    src="/images/contact.png"
                    alt="Fashion"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                {/* 本文エリア */}
                <section>
                    <p>
                        Discover the beauty in simplicity, where time-worn textiles tell their own stories.
                        From hand-woven hemp to indigo-dyed cotton, each fabric celebrates imperfection.
                        Traditional silhouettes inspire cutting-edge designers while "slow fashion" meets
                        sustainability in artisan studios across Japan.
                    </p>
                </section>
            </main>
        </div>
    );
}
