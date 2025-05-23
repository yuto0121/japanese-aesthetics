// pages/article/concept/index.tsx
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConcept.module.css';

export default function ArticleConceptIndex() {
    const concepts = [
        { no: '01', label: 'wabi–sabi', slug: 'wabi-sabi' },
        { no: '02', label: 'in–ei', slug: 'in-ei' },
        { no: '03', label: 'iki', slug: 'iki' },
        { no: '04', label: 'mono no aware', slug: 'mono-no-aware' },
        { no: '05', label: 'miyabi', slug: 'miyabi' },
        { no: '06', label: 'ma', slug: 'ma' },
        { no: '07', label: 'yohaku', slug: 'yohaku' },
        { no: '08', label: 'yoin', slug: 'yoin' },
        { no: '09', label: 'kintsugi', slug: 'kintsugi' },
        { no: '10', label: 'yugen', slug: 'yugen' },
    ];

    return (
        <>
            <Navigation />

            {/* 見出し */}
            <header className={styles.header}>
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(tw) =>
                            tw.typeString('The Essence of Japan')
                                .start()
                        }
                        options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
                    />
                </h1>
            </header>

            {/* ３列グリッドで全カード表示 */}
            <section className={styles.categories}>
                {concepts.map(({ no, label, slug }) => (
                    <Link
                        key={slug}
                        href={`/article/theEssenceOfJapan/${slug}`}
                        className={styles.categoryCard}
                    >
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
