import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConcept.module.css';

/**
 * ──────────────────────────────────────────────
 * ここにある slug = マークダウンのファイル名 = URL セグメント
 * 例）/content/wabiSabi.md  →  /article/theEssenceOfJapan/wabiSabi
 * ──────────────────────────────────────────────
 */
const concepts = [
    { no: '01', label: 'wabi–sabi', slug: 'wabiSabi' },
    { no: '02', label: 'in–ei', slug: 'inEi' },
    { no: '03', label: 'iki', slug: 'iki' },
    { no: '04', label: 'mono no aware', slug: 'monoNoAware' },
    { no: '05', label: 'miyabi', slug: 'miyabi' },
    { no: '06', label: 'ma', slug: 'ma' },
    { no: '07', label: 'yohaku', slug: 'yohaku' },
    { no: '08', label: 'yoin', slug: 'yoin' },
    { no: '09', label: 'kintsugi', slug: 'kintsugi' },
    { no: '10', label: 'yūgen', slug: 'yugen' },
];

export default function EssenceIndex() {
    return (
        <>
            <Navigation />

            <header className={styles.header}>
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(tw) => tw.typeString('The Essence of Japan').start()}
                        options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
                    />
                </h1>
            </header>

            <section className={styles.categories}>
                {concepts.map(({ slug, label }) => (
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
                <Link href="/" className={styles.navBtn}>← Back to Home</Link>
            </div>
        </>
    );
}
