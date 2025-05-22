import Link from 'next/link';
import styles from '../styles/BeautyConcepts.module.css';


export default function BeautyConcepts() {
  const concepts = [
    { slug: 'wabi-sabi', label: 'wabi–sabi', style: styles.wabiSabi },
    { slug: 'in-ei', label: 'in–ei', style: styles.inEi },
    { slug: 'iki', label: 'iki', style: styles.iki },
    { slug: 'mono-no-aware', label: 'mono no aware', style: styles.monoNoAware },
    { slug: 'miyabi', label: 'miyabi', style: styles.miyabi },
    { slug: 'ma', label: 'ma', style: styles.ma },
    { slug: 'yohaku', label: 'yohaku', style: styles.yohaku },
    { slug: 'yoin', label: 'yoin', style: styles.yoin },
    { slug: 'kintsugi', label: 'kintsugi', style: styles.kintsugi },
    { slug: 'yugen', label: 'yugen', style: styles.yugen },
  ];

  return (
    <section className={styles.beautyConceptsSection}>
      <h2 className={styles.beautyConceptsTitle}>Beauty Concepts</h2>

      <div className={styles.beautyConceptsGrid}>
        {concepts.map(({ slug, label, style }) => (
          <Link
            key={slug}
            href={`/article/concept/${slug}`}
            passHref
            legacyBehavior
          >
            <a className={`${styles.conceptItem} ${style}`}>
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </div>

      <Link href="/article/beauty-concepts" className={styles.moreDetails}>
        More details <span>↘</span>
      </Link>
    </section>
  );
}
