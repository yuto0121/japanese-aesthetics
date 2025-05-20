// pages/article/fashion.tsx
import Image from 'next/image';
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
          src="/images/fashion.png" // 「衣」の筆文字
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
          { no: '01', label: 'Textiles' },
          { no: '02', label: 'Garments' },
          { no: '03', label: 'Brand' },
        ].map(({ no, label }) => (
          <div key={no} className={styles.categoryCard}>
            <span className={styles.categoryNo}>{no}</span>
            <span className={styles.categoryLabel}>{label}</span>
          </div>
        ))}
      </section>

      {/* ── featured article ───────────────────────── */}
      <section className={styles.featured}>
        <h2 className={styles.sectionHeadline}>Featured Article</h2>

        <div className={styles.featuredBody}>
          <Image
            src="/images/article/fashion_article1.jpg"
            alt="Indigo–dyed boro fabric"
            width={180}
            height={180}
            className={styles.featuredImg}
          />

          <p className={styles.featuredText}>
            In Japan, the art of <em>boro</em> (襤褸) patchwork—mending
            indigo-dyed scraps into layered textiles—celebrates resilience and
            sustainability through the beauty of imperfection. […] Work in small
            sections—10 to 15 minutes at a time—to build a meditative rhythm.
          </p>
        </div>
      </section>

      {/* ── article list ───────────────────────────── */}
      <section className={styles.articleList}>
        <h2 className={styles.sectionHeadline}>Articles</h2>

        {/* row 1 */}
        <article className={styles.articleRow}>
          <div className={styles.articleImgWrap}>
            <Image
              src="/images/article/fashion_article2.jpg"
              alt=""
              fill
              className={styles.articleImg}
            />
            <h3 className={styles.articleOverlayTitle}>Article 1</h3>
          </div>

          <p className={styles.articleLead}>
            The Timeless Art of Hand-woven Hemp: Rediscovering Rustic Elegance
          </p>
        </article>

        {/* row 2 */}
        <article className={styles.articleRow}>
          <div className={styles.articleImgWrap}>
            <Image
              src="/images/indigo_strips.jpg"
              alt=""
              fill
              className={styles.articleImg}
            />
            <h3 className={styles.articleOverlayTitle}>Article 2</h3>
          </div>

          <p className={styles.articleLead}>
            Indigo Inspirations: How Japanese Dyeing Shapes Modern Wardrobe
          </p>
        </article>
      </section>
    </>
  );
}
