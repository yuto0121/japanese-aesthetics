import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleSlug.module.css';

const CATEGORY_META = {
  oneDishMeals: { no: '01', title: 'One-Dish Meals', hero: '/images/article/hero_one-dish-meals.jpg' },
  seasonalSweats: { no: '02', title: 'Seasonal Sweats', hero: '/images/article/hero_seasonal-sweats.jpg' },
  teaCeremony:    { no: '03', title: 'Tea Ceremony',    hero: '/images/article/hero_tea-ceremony.jpg' },
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
          {no}&nbsp;&nbsp;{title}
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
          （ここに&nbsp;{title}&nbsp;カテゴリ専用の記事一覧や説明を実装）
        </p>
      </main>

      {/* ── back link ────────────────────────────── */}
      <div className={styles.backWrap}>
        <Link href="/article/cuisine" className={styles.navBtn}>
          ← Back to Cuisine
        </Link>
      </div>
    </>
  );
}
