import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleSlug.module.css';

const CATEGORY_META = {
  architecture: { no: '01', title: 'Architecture', hero: '/images/article/hero_architecture.jpg' },
  interior: { no: '02', title: 'Interior', hero: '/images/article/hero_interior.jpg' },
  furniture:    { no: '03', title: 'Furniture',    hero: '/images/article/hero_furniture.jpg' },
} as const;

export default function LivingCategoryPage() {
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
          explanation.
        </p>
      </main>

      {/* ── back link ────────────────────────────── */}
      <div className={styles.backWrap}>
        <Link href="/article/living" className={styles.navBtn}>
          ← Back to Living
        </Link>
      </div>
    </>
  );
}
