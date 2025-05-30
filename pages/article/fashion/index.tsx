// ─────────────────────────────────────────────────────────────
// pages/article/fashion/index.tsx
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import Typewriter from 'typewriter-effect';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleSub.module.css';


type ArticleMeta = {
  slug: string;
  title: string;
  tags: string[];
  hero: string;          // 画像パス
  date: string;          // YYYY-MM-DD
};

type PropsFashion = { articles: ArticleMeta[] };

const FASHION_DIR = path.join(process.cwd(), 'content', 'fashion');

export const getStaticProps: GetStaticProps<PropsFashion> = () => {
  const articles: ArticleMeta[] = fs
    .readdirSync(FASHION_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(FASHION_DIR, file), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        tags: data.tags as string[],
        hero: data.hero as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { articles } };
};

export default function ArticleFashion({ articles }: PropsFashion) {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <>
      <Navigation />

      <header className={styles.header}>
        <h1 className={styles.title}>
          <Typewriter
            onInit={(tw) => tw.typeString('Fashion').start()}
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
          />
        </h1>
        <Image
          src="/images/kanji_fashion.png"
          alt="Kanji for fashion"
          width={150}
          height={150}
          className={styles.kanji}
          priority
        />
      </header>

      {featured && (
        <section className={styles.featured}>
          <h2 className={styles.featuredHeadline}>Featured Article</h2>

          <Link href={`/article/fashion/${featured.slug}`} className={styles.featuredBody}>
            <Image
              src={featured.hero}
              alt={featured.title}
              width={180}
              height={180}
              className={styles.featuredImg}
            />
            <p className={styles.featuredText}>{featured.title}</p>
          </Link>
        </section>
      )}

      <section className={styles.articleGridSection}>
        <h2 className={styles.articlesHeadline}>Articles</h2>

        <div className={styles.articleGridWrapper}>
          <div className={styles.articleGrid}>
            {others.map((a) => (
              <Link key={a.slug} href={`/article/fashion/${a.slug}`} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image src={a.hero} alt={a.title} fill className={styles.cardImg} />
                </div>
                <span className={styles.cardMeta}>{a.tags.join('、').toUpperCase()}</span>
                <h3 className={styles.cardTitle}>{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}