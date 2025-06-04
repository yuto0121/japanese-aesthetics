import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/TheEssenceOfJapan.module.css';

export default function TheEssenceOfJapan() {
  const concepts = [
    { slug: 'wabiSabi', label: 'wabi–sabi', style: styles.wabiSabi, image: '/images/article/theEssenceOfJapan/hero_wabi-sabi.png' },
    { slug: 'inEi', label: 'in–ei', style: styles.inEi, image: '/images/article/theEssenceOfJapan/hero_in-ei.png' },
    { slug: 'iki', label: 'iki', style: styles.iki, image: '/images/article/theEssenceOfJapan/hero_iki.png' },
    { slug: 'monoNoAware', label: 'mono no aware', style: styles.monoNoAware, image: '/images/article/theEssenceOfJapan/hero_mono-no-aware.png' },
    { slug: 'miyabi', label: 'miyabi', style: styles.miyabi, image: '/images/article/theEssenceOfJapan/hero_miyabi.png' },
    { slug: 'ma', label: 'ma', style: styles.ma, image: '/images/article/theEssenceOfJapan/hero_ma.png' },
    { slug: 'yohaku', label: 'yohaku', style: styles.yohaku, image: '/images/article/theEssenceOfJapan/hero_yohaku.png' },
    { slug: 'yoin', label: 'yoin', style: styles.yoin, image: '/images/article/theEssenceOfJapan/hero_yoin.png' },
    { slug: 'kintsugi', label: 'kintsugi', style: styles.kintsugi, image: '/images/article/theEssenceOfJapan/hero_kintsugi.png' },
    { slug: 'yugen', label: 'yugen', style: styles.yugen, image: '/images/article/theEssenceOfJapan/hero_yugen.png' },
    { slug: 'kacho-fugetsu', label: 'kacho-fugetsu', style: styles.kachoFugetsu, image: '/images/article/theEssenceOfJapan/hero_kacho-fugetsu.png' },
    { slug: 'ichigo-ichie', label: 'ichigo-ichie', style: styles.ichigoIchie, image: '/images/article/theEssenceOfJapan/hero_ichigo-ichie.png' },
    { slug: 'shogyoumujo', label: 'shogyoumujo', style: styles.shogyoumujo, image: '/images/article/theEssenceOfJapan/hero_shogyoumujo.png' },
    { slug: 'ikigai', label: 'ikigai', style: styles.ikigai, image: '/images/article/theEssenceOfJapan/hero_ikigai.png' },
    { slug: 'jouyou', label: 'jouyou', style: styles.jouyou, image: '/images/article/theEssenceOfJapan/hero_jouyou.png' },
    { slug: 'seijaku', label: 'seijaku', style: styles.seijaku, image: '/images/article/theEssenceOfJapan/hero_seijaku.png' },
    { slug: 'shoujin', label: 'shoujin', style: styles.shoujin, image: '/images/article/theEssenceOfJapan/hero_shoujin.png' },
    { slug: 'chisoku', label: 'chisoku', style: styles.chisoku, image: '/images/article/theEssenceOfJapan/hero_chisoku.png' },
    { slug: 'wa', label: 'wa', style: styles.wa, image: '/images/article/theEssenceOfJapan/hero_wa.png' },
    { slug: 'dou', label: 'dou', style: styles.dou, image: '/images/article/theEssenceOfJapan/hero_dou.png' },
    { slug: 'setsuna', label: 'setsuna', style: styles.setsuna, image: '/images/article/theEssenceOfJapan/hero_setsuna.png' },
    { slug: 'shibusa', label: 'shibusa', style: styles.shibusa, image: '/images/article/theEssenceOfJapan/hero_shibusa.png' },
    { slug: 'rin', label: 'rin', style: styles.rin, image: '/images/article/theEssenceOfJapan/hero_rin.png' },
    { slug: 'zen', label: 'zen', style: styles.zen, image: '/images/article/theEssenceOfJapan/hero_zen.png' },
  ];

  return (
    <section className={styles.beautyConceptsSection}>
      <Link href="/article/theEssenceOfJapan" className={styles.beautyConceptsTitle}>
        <h2>The Essence of Japanese Aesthetics</h2>
      </Link>

      <div className={styles.beautyConceptsGrid}>
        {concepts.map(({ slug, label, style, image }) => (
          <Link
            key={slug}
            href={`/article/theEssenceOfJapan/${slug}`}
            passHref
            legacyBehavior
          >
            <a className={`${styles.conceptItem} ${style}`}>
              <span>{label}</span>
              <Image
                src={image}
                alt={label}
                width={200}
                height={150}
                className={styles.popupImage}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}