// pages/article/concept/index.tsx
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConcept.module.css';


export default function ArticleConceptIndex() {
    const concepts = [
        { no: '01', label: 'wabi–sabi', slug: 'wabi-sabi', hero: '/images/concept/hero_wabi-sabi.jpg' },
        { no: '02', label: 'in–ei', slug: 'in-ei', hero: '/images/concept/hero_in-ei.jpg' },
        { no: '03', label: 'iki', slug: 'iki', hero: '/images/concept/hero_iki.jpg' },
        { no: '04', label: 'mono no aware', slug: 'mono-no-aware', hero: '/images/concept/hero_mono-no-aware.jpg' },
        { no: '05', label: 'miyabi', slug: 'miyabi', hero: '/images/concept/hero_miyabi.jpg' },
        { no: '06', label: 'ma', slug: 'ma', hero: '/images/concept/hero_ma.jpg' },
        { no: '07', label: 'yohaku', slug: 'yohaku', hero: '/images/concept/hero_yohaku.jpg' },
        { no: '08', label: 'yoin', slug: 'yoin', hero: '/images/concept/hero_yoin.jpg' },
        { no: '09', label: 'kintsugi', slug: 'kintsugi', hero: '/images/concept/hero_kintsugi.jpg' },
        { no: '10', label: 'yugen', slug: 'yugen', hero: '/images/concept/hero_yugen.jpg' },
    ];

    return (
        <>
            <Navigation />

            <header className={styles.header}>
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Beauty')          // １行目
                                .pauseFor(500)                   // 0.5秒止めて
                                .typeString('<br/>&nbsp;Concepts')  // ２行目
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
            </header>

            <section className={styles.categories}>
                {concepts.map(({ no, label, slug }) => (
                    <Link
                        key={slug}
                        href={`/article/concept/${slug}`}
                        className={styles.categoryCard}
                    >
                        <span className={styles.categoryNo}>{no}</span>
                        <span className={styles.categoryLabel}>{label}</span>
                    </Link>
                ))}
            </section>

            <div className={styles.backWrap}>
                <Link href="/" className={styles.navBtn}>
                    ← Back to Home
                </Link>
            </div>
        </>
    );
}