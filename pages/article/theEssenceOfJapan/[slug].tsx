// pages/article/concept/[slug].tsx
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConceptSlug.module.css';

const CONCEPT_META = {
    'wabi-sabi': { no: '01', title: 'wabi–sabi', hero: '/images/concept/hero_wabi-sabi.jpg' },
    'in-ei': { no: '02', title: 'in–ei', hero: '/images/concept/hero_in-ei.jpg' },
    'iki': { no: '03', title: 'iki', hero: '/images/concept/hero_iki.jpg' },
    'mono-no-aware': { no: '04', title: 'mono no aware', hero: '/images/concept/hero_mono-no-aware.jpg' },
    'miyabi': { no: '05', title: 'miyabi', hero: '/images/concept/hero_miyabi.jpg' },
    'ma': { no: '06', title: 'ma', hero: '/images/concept/hero_ma.jpg' },
    'yohaku': { no: '07', title: 'yohaku', hero: '/images/concept/hero_yohaku.jpg' },
    'yoin': { no: '08', title: 'yoin', hero: '/images/concept/hero_yoin.jpg' },
    'kintsugi': { no: '09', title: 'kintsugi', hero: '/images/concept/hero_kintsugi.jpg' },
    'yugen': { no: '10', title: 'yugen', hero: '/images/concept/hero_yugen.jpg' },
} as const;

export default function ConceptSlugPage() {
    const { query, isFallback } = useRouter();
    const slug = query.slug as keyof typeof CONCEPT_META | undefined;

    if (isFallback || !slug || !(slug in CONCEPT_META)) return null;

    const { no, title, hero } = CONCEPT_META[slug];

    return (
        <>
            <Navigation />

            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <Image
                    src={hero}
                    alt={`${title} hero`}
                    width={200}
                    height={200}
                    className={styles.kanji}
                    priority
                />
            </header>

            <main className={styles.articleBody}>
                <p style={{ fontStyle: 'italic' }}>
                    {/* ここに各コンセプトの説明文を追加してください */}
                    Description for {title} goes here.
                </p>
            </main>

            <div className={styles.backWrap}>
                <Link href="/article/concept" className={styles.navBtn}>
                    ← Back to Beauty Concepts
                </Link>
            </div>
        </>
    );
}