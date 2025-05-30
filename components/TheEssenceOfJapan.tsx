import Link from 'next/link';
import styles from '../styles/TheEssenceOfJapan.module.css';


export default function TheEssenceOfJapan() {
  const concepts = [
    { slug: 'wabiSabi', label: 'wabi–sabi', style: styles.wabiSabi },
    { slug: 'inEi', label: 'in–ei', style: styles.inEi },
    { slug: 'iki', label: 'iki', style: styles.iki },
    { slug: 'monoNoAware', label: 'mono no aware', style: styles.monoNoAware },
    { slug: 'miyabi', label: 'miyabi', style: styles.miyabi },
    { slug: 'ma', label: 'ma', style: styles.ma },
    { slug: 'yohaku', label: 'yohaku', style: styles.yohaku },
    { slug: 'yoin', label: 'yoin', style: styles.yoin },
    { slug: 'kintsugi', label: 'kintsugi', style: styles.kintsugi },
    { slug: 'yugen', label: 'yugen', style: styles.yugen },
  ];

  return (
    <section className={styles.beautyConceptsSection}>
      <Link href="/article/theEssenceOfJapan" className={styles.beautyConceptsTitle}>
        <h2>The Essence of Japan</h2>
      </Link>


      <div className={styles.beautyConceptsGrid}>
        {concepts.map(({ slug, label, style }) => (
          <Link
            key={slug}
            href={`/article/theEssenceOfJapan/${slug}`}
            className={`${styles.conceptItem} ${style}`}
          >
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
