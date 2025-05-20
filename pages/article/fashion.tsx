// pages/article/fashion.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import styles from '../../styles/ArticleFashion.module.css';

export default function ArticleFashion() {
  return (
    <>
      {/* ── global nav ─────────────────────────────── */}
      <Navigation />

      {/* ── page header ────────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>Fashion</h1>
        <Image
          src="/images/kanji_fashion.png" 
          alt="Kanji for clothing"
          width={150}
          height={150}
          className={styles.kanji}
          priority
        />
      </header>

      {/* ── categories ─────────────────────────────── */}
      <section className={styles.categories}>
      {[
        { no: '01', label: 'Textiles', slug: 'textiles' },
        { no: '02', label: 'Garments', slug: 'garments' },
        { no: '03', label: 'Brand',    slug: 'brand'    },
      ].map(({ no, label, slug }) => (
        <Link
          key={slug}
          href={`/article/fashion/${slug}`}
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
            src="/images/article/fashion_featured_article.jpg"
            alt="Indigo–dyed boro fabric"
            width={180}
            height={180}
            className={styles.featuredImg}
          />

          <p className={styles.featuredText}>
            In Japan, the art of <em>boro</em> (襤褸) patchwork—mending
            indigo-dyed scraps into layered textiles—celebrates resilience and
            sustainability through the beauty of imperfection. Work in small
            sections—10 to 15 minutes at a time—to build a meditative rhythm.
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
              src: '/images/article/fashion_article2.jpg',
              title: 'Branding: Pros and Cons They Don’t Tell You',
            },
            {
              src: '/images/article/fashion_article3.jpg',
              title: 'How to Spot the Best Branding for You: Signs and Features',
            },
            {
              src: '/images/article/fashion_article4.jpg',
              title: 'How Much Should I Spend on Branding?',
            },
            {
              src: '/images/article/fashion_article5.jpg',
              title: 'Rookie Mistakes You’re Making With Your Branding',
            },
            {
              src: '/images/article/fashion_article6.jpg',
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
