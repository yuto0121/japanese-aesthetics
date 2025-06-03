import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/TheEssenceOfJapan.module.css';

export default function TheEssenceOfJapan() {
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);

  const concepts = [
    { slug: 'wabiSabi', label: 'wabi–sabi', style: styles.wabiSabi, hero: '/images/article/theEssenceOfJapan/hero_wabi-sabi.png' },
    { slug: 'inEi', label: 'in–ei', style: styles.inEi, hero: '/images/article/theEssenceOfJapan/hero_in-ei.png' },
    { slug: 'iki', label: 'iki', style: styles.iki, hero: '/images/article/theEssenceOfJapan/hero_iki.png' },
    { slug: 'monoNoAware', label: 'mono no aware', style: styles.monoNoAware, hero: '/images/article/theEssenceOfJapan/hero_mono-no-aware.png' },
    { slug: 'miyabi', label: 'miyabi', style: styles.miyabi, hero: '/images/article/theEssenceOfJapan/hero_miyabi.png' },
    { slug: 'ma', label: 'ma', style: styles.ma, hero: '/images/article/theEssenceOfJapan/hero_ma.png' },
    { slug: 'yohaku', label: 'yohaku', style: styles.yohaku, hero: '/images/article/theEssenceOfJapan/hero_yohaku.png' },
    { slug: 'yoin', label: 'yoin', style: styles.yoin, hero: '/images/article/theEssenceOfJapan/hero_yoin.png' },
    { slug: 'kintsugi', label: 'kintsugi', style: styles.kintsugi, hero: '/images/article/theEssenceOfJapan/hero_kintsugi.png' },
    { slug: 'yugen', label: 'yugen', style: styles.yugen, hero: '/images/article/theEssenceOfJapan/hero_yugen.png' },
  ];

  return (
    <section className={styles.beautyConceptsSection}>
      <Link href="/article/theEssenceOfJapan" className={styles.beautyConceptsTitle}>
        <h2>The Essence of Japan</h2>
      </Link>

      <div className={styles.beautyConceptsGrid}>
        {concepts.map(({ slug, label, style, hero }) => (
          <div
            key={slug}
            className={styles.conceptWrapper}
            onMouseEnter={() => setHoveredConcept(slug)}
            onMouseLeave={() => setHoveredConcept(null)}
          >
            <Link
              href={`/article/theEssenceOfJapan/${slug}`}
              passHref
              legacyBehavior
            >
              <a className={`${styles.conceptItem} ${style}`}>
                <span>{label}</span>
              </a>
            </Link>
            {hoveredConcept === slug && (
              <div className={styles.heroPopup}>
                <Image
                  src={hero}
                  alt={`${label} hero`}
                  width={200}
                  height={200}
                  className={styles.heroImage}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
