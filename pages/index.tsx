import Image from 'next/image';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="container">
        <h1 className={styles.mainTitle}>Japanese<br />
          <span className={styles.indent}></span>Aesthetics.</h1>
        <div className={styles.mainTitleLine}></div>

        {/* Fashion セクション */}
        <section className={styles.sectionRow}>
          <div className={styles.kanjiLeft}>
            <Image src="/images/kanji_fashion.png" alt="衣" width={300} height={300} />
          </div>
          <div className={styles.sectionTextRight}>
            <h2>Fashion</h2>
            <p>
              Discover the beauty in simplicity, where time-worn textiles tell their own stories. From hand-woven hemp to indigo dyed cotton, each fabric celebrates imperfection. Learn how traditional garments inspire cutting-edge designers around the world. See how "slow fashion" meets sustainability in Japanese artisan studios. Step into a world where every thread weaves past and present into style.
            </p>
          </div>
        </section>

        {/* Cuisine セクション */}
        <section className={styles.sectionRowReverse}>
          <div className={styles.kanjiRight}>
            <Image src="/images/kanji_cuisine.png" alt="食" width={300} height={300} />
          </div>
          <div className={styles.sectionTextLeft}>
            <h2>Cuisine</h2>
            <p>
              Savor the art of balance, where humble ingredients shine at their peak. Explore time-honored recipes—from one-dish meals to seasonal sweets. Learn the rituals behind tea, miso, and the umami-rich foundations of flavor. Discover how respect for nature guides every chop, stir, and serving. Join us on a culinary journey that nourishes body, mind, and spirit.
            </p>
          </div>
        </section>

        {/* Living セクション */}
        <section className={styles.sectionRow}>
          <div className={styles.kanjiLeft}>
            <Image src="/images/kanji_living.png" alt="住" width={300} height={300} />
          </div>
          <div className={styles.sectionTextRight}>
            <h2>Living</h2>
            <p>
              Experience spaces shaped by wood, light, and a mindful embrace of empty space. Uncover how ancient joinery techniques withstand earthquakes without nails. See how tatami, shoji, and tokonoma define harmony in home design. Learn how minimalism and warmth coexist in traditional and modern homes. Step into tranquil interiors that bring calm, clarity, and connection to daily life.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
