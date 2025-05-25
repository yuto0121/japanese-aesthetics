import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleSlug.module.css';

const CATEGORY_META = {
  textiles: { no: '01', title: 'Textiles', hero: '/images/article/hero_textiles.jpg' },
  garments: { no: '02', title: 'Garments', hero: '/images/article/hero_garments.jpg' },
  brand: { no: '03', title: 'Brand', hero: '/images/article/hero_brand.jpg' },
} as const;

export default function FashionCategoryPage() {
  const { query, isFallback } = useRouter();
  const slug = query.slug as keyof typeof CATEGORY_META | undefined;

  if (isFallback || !slug || !(slug in CATEGORY_META)) return null;

  const { no, title, hero } = CATEGORY_META[slug];

  return (
    <>
      {/* ── global nav ───────────────────────────── */}
      <Navigation />

      {/* ── page header ──────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <Image
          src={hero}
          alt={`${title} hero`}
          width={200}
          height={200}
          className={styles.kanji}
          priority
        />
      </header>

      {/* ── main content ─────────────────────────── */}
      <main className={styles.articleBody}>
        <p style={{ fontStyle: 'italic' }}>
          Here is the explanation.
        </p>
      </main>

      {/* ── back link ────────────────────────────── */}
      <div className={styles.backWrap}>
        <Link href="/article/fashion" className={styles.navBtn}>
          ← Back to Fashion
        </Link>
      </div>
    </>
  );
}