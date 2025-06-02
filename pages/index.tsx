import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Firstview from '../components/Firstview';
import TheEssenceOfJapan from '../components/TheEssenceOfJapan';
import styles from '../styles/Home.module.css';



export default function Home() {
  const [showFV, setShowFV] = useState<boolean | null>(null);

  // ① 初回マウント時に localStorage を確認
  useEffect(() => {
    const seen = localStorage.getItem('firstviewShown') === 'true';
    setShowFV(!seen);   // seen=false → showFV=true で Firstview 表示
  }, []);

  // ② localStorage 判定が済むまでレンダリングを保留
  if (showFV === null) return null;

  // ③ Firstview 表示ルート
  if (showFV) {
    return (
      <Firstview
        onFinish={() => {
          localStorage.setItem('firstviewShown', 'true');
          setShowFV(false);
        }}
      />
    );
  }

  return (
    <div>
      <main className="container">
        <h1 className={styles.mainTitle}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Japanese Aesthetics.')          // １行目
                // .pauseFor(500)                   // 0.5秒止めて
                // .typeString('<br/>&nbsp;Aesthetics.')  // ２行目
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
        <div className={styles.mainTitleLine} />

        {/* ── Sub category セクション ─────────────────────── */}
        <section className={styles.MenuSection}>
          <Link href="/about" className={styles.AboutTitle}>
            <h1>About us</h1>
          </Link>
          <Link href="/article" className={styles.ArticleTitle}>
            <h1>Article</h1>
          </Link>
          <Link href="/contact" className={styles.ContactTitle}>
            <h1>Contact</h1>
          </Link>
        </section>

        {/* ── theEssenceOfJapan セクション ───────────── */}
        <TheEssenceOfJapan />

        {/* ── Fashion セクション ───────────────────── */}
        <Link href="article/fashion" passHref legacyBehavior>
          <a className={styles.linkReset}>
            <section className={styles.sectionRow}>
              <div className={styles.kanjiLeft}>
                <Image
                  src="/images/kanji_fashion.png"
                  alt="衣"
                  width={300}
                  height={300}
                />
              </div>

              <div className={styles.sectionTextRight}>
                <h2>Fashion</h2>
                <p>
                  Discover the beauty in simplicity, where time-worn textiles tell
                  their own stories. From hand-woven hemp to indigo-dyed cotton,
                  each fabric celebrates imperfection. Traditional silhouettes
                  inspire cutting-edge designers while "slow fashion" meets
                  sustainability in artisan studios across Japan.
                </p>
              </div>
            </section>
          </a>
        </Link>

        {/* ── Cuisine セクション ───────────────────── */}
        <Link href="article/cuisine" passHref legacyBehavior>
          <a className={styles.linkReset}>
            <section className={styles.sectionRow}>
              <div className={styles.kanjiLeft}>
                <Image
                  src="/images/kanji_cuisine.png"
                  alt="食"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.sectionTextRight}>
                <h2>Cuisine</h2>
                <p>
                  Savor the art of balance, where humble ingredients shine at
                  their peak. Explore time-honored recipes—from one-dish meals to
                  seasonal sweets. Learn the rituals behind tea, miso, and the
                  umami-rich foundations of flavor. Discover how respect for
                  nature guides every chop, stir, and serving.
                </p>
              </div>
            </section>
          </a>
        </Link>

        {/* ── Living セクション ────────────────────── */}
        <Link href="article/living" passHref legacyBehavior>
          <a className={styles.linkReset}>
            <section className={styles.sectionRow}>
              <div className={styles.kanjiLeft}>
                <Image
                  src="/images/kanji_living.png"
                  alt="住"
                  width={300}
                  height={300}
                />
              </div>

              <div className={styles.sectionTextRight}>
                <h2>Living</h2>
                <p>
                  Experience spaces shaped by wood, light, and a mindful embrace
                  of empty space. Ancient joinery withstands earthquakes without
                  nails, while tatami, shoji, and tokonoma define harmony at home.
                  Minimalism and warmth coexist—bringing calm, clarity, and
                  connection to daily life.
                </p>
              </div>
            </section>
          </a>
        </Link>
      </main>
    </div>
  );
}
