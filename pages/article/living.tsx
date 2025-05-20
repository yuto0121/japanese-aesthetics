// pages/article/living.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleLiving.module.css';

export default function ArticleLiving() {
  return (
    <>
      {/* ── global nav ─────────────────────────────── */}
      <Navigation />

      {/* ── page header ────────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>Living</h1>
        <Image
          src="/images/kanji_living.png" // 「衣」の筆文字
          alt="Kanji for licing"
          width={150}
          height={150}
          className={styles.kanji}
          priority
        />
      </header>

      {/* ── categories ─────────────────────────────── */}
      <section className={styles.categories}>
      {[
        { no: '01', label: 'Architecture', slug: 'architecture' },
        { no: '02', label: 'Interior', slug: 'interior' },
        { no: '03', label: 'Furniture', slug: 'furniture' },
      ].map(({ no, label, slug }) => (
        <Link
          key={slug} 
          href={`/article/living/${slug}`}
          className={styles.categoryCard}
        >
            <span className={styles.categoryNo}>{no}</span>
            <span className={styles.categoryLabel}>{label}</span>
          </Link>
        ))}
      </section>

      {/* ── featured article ───────────────────────── */}
      <section className={styles.featured}>
        <h2 className={styles.featuredHeadline}>Featured Article</h2>

        <div className={styles.featuredBody}>
          <Image
            src="/images/article/living_featured_article.jpg"
            alt="Traditional architecture"
            width={180}
            height={180}
            className={styles.featuredImg}
          />

          <p className={styles.featuredText}>
          In Japan, the philosophy behind traditional architecture—layering natural materials like wood, clay, and paper—celebrates resilience and sustainability through the beauty of imperfection. Weathered textures, asymmetry, and subtle transitions reflect a deep respect for time and nature. Approach each design element in small steps—10 to 15 minutes at a time—to cultivate a meditative rhythm and thoughtful space-making.
          </p>
        </div>
      </section>

      {/* ── article list ───────────────────────────── */}
      <section className={styles.articleGridSection}>
        <h2 className={styles.articlesHeadline}>Articles</h2>

        {/* カード 6 枚 */}
        <div className={styles.articleGrid}>
          {[
            {
              src: '/images/article/fashion_article1.jpg',
              title: 'Branding: What Real Customers Have to Say',
            },
            {
              src: '/images/article/living_article2.jpg',
              title: 'Branding: Pros and Cons They Don’t Tell You',
            },
            {
              src: '/images/article/living_article3.jpg',
              title: 'How to Spot the Best Branding for You: Signs and Features',
            },
            {
              src: '/images/article/living_article4.jpg',
              title: 'How Much Should I Spend on Branding?',
            },
            {
              src: '/images/article/living_article5.jpg',
              title: 'Rookie Mistakes You’re Making With Your Branding',
            },
            {
              src: '/images/article/living_article6.jpg',
              title: 'Real Branding Customer Reviews You Need to See',
            },
          ].map(({ src, title }) => (
            <article key={title} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <Image src={src} alt={title} fill className={styles.cardImg} />
              </div>

              <span className={styles.cardMeta}>BRANDING、DESIGN</span>
              <h3 className={styles.cardTitle}>{title}</h3>
            </article>
          ))}
        </div>

        {/* ── pagination buttons ── */}
        <div className={styles.pagination}>
          <button className={styles.navBtn}>PREVIOUS</button>
          <button className={styles.navBtn}>NEXT</button>
        </div>
      </section>
    </>
  );
}
