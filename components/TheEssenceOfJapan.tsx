import Link from 'next/link';
import styles from '../styles/TheEssenceOfJapan.module.css';


export default function TheEssenceOfJapan() {
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
      <Link href="/article/theEssenceOfJapan" className={styles.beautyConceptsTitle}>
        <h2>The Essence of Japan</h2>
      </Link>


      <div className={styles.beautyConceptsGrid}>
        {concepts.map(({ slug, label, style }) => (
          <Link
            key={slug}
            href={`/article/theEssenceOfJapan/${slug}`}
            passHref
            legacyBehavior
          >
            <a className={`${styles.conceptItem} ${style}`}>
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
