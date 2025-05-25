// pages/article/cuisine.tsx
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleSub.module.css';

export default function ArticleCuisine() {
  return (
    <>
      {/* ── global nav ─────────────────────────────── */}
      <Navigation />

      {/* ── page header ────────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Cuisine')          // １行目
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
        <Image
          src="/images/kanji_cuisine.png" // 「衣」の筆文字
          alt="Kanji for cuisine"
          width={150}
          height={150}
          className={styles.kanji}
          priority
        />
      </header>

      {/* ── categories ─────────────────────────────── */}
      {/* <section className={styles.categories}>
        {[
          { no: '01', label: 'One-Dish Meals', slug: 'oneDishMeals' },
          { no: '02', label: 'Seasonal Sweats', slug: 'seasonalSweats' },
          { no: '03', label: 'Tea Ceremony', slug: 'teaCeremony' },
        ].map(({ no, label, slug }) => (
          <Link
            key={slug}
            href={`/article/cuisine/${slug}`}
            className={styles.categoryCard}
          >
            <span className={styles.categoryNo}>{no}</span>
            <span className={styles.categoryLabel}>{label}</span>
          </Link>
        ))}
      </section> */}

      {/* ── featured article ───────────────────────── */}
      <section className={styles.featured}>
        <h2 className={styles.featuredHeadline}>Featured Article</h2>

        <div className={styles.featuredBody}>
          <Image
            src="/images/article/cuisine_featured_article.jpg"
            alt="Japanese Cuisine"
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

        {/* ← ここから wrapper */}
        <div className={styles.articleGridWrapper}>
          {/* 左矢印 */}
          <button className={styles.arrowLeft} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* カード 6 枚 */}
          <div className={styles.articleGrid}>
            {[
              {
                src: '/images/article/cuisine_article1.jpg',
                title: 'Branding: What Real Customers Have to Say',
              },
              {
                src: '/images/article/cuisine_article2.jpg',
                title: 'Branding: Pros and Cons They Don’t Tell You',
              },
              {
                src: '/images/article/cuisine_article3.jpg',
                title: 'How to Spot the Best Branding for You: Signs and Features',
              },
              {
                src: '/images/article/cuisine_article4.jpg',
                title: 'How Much Should I Spend on Branding?',
              },
              {
                src: '/images/article/cuisine_article5.jpg',
                title: 'Rookie Mistakes You’re Making With Your Branding',
              },
              {
                src: '/images/article/cuisine_article6.jpg',
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

          {/* 右矢印 */}
          <button className={styles.arrowRight} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </section >
    </>
  );
}
