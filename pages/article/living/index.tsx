// ─────────────────────────────────────────────────────────────
// pages/article/living/index.tsx
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
  excerpt: string;       // 記事の抜粋
};

type Props = { articles: ArticleMeta[] };

const LIVING_DIR = path.join(process.cwd(), 'content', 'living');

export const getStaticProps: GetStaticProps<Props> = () => {
  const articles: ArticleMeta[] = fs
    .readdirSync(LIVING_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(LIVING_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        tags: data.tags as string[],
        hero: data.hero as string,
        date: data.date as string,
        excerpt: content.slice(0, 200) + '...', // 最初の200文字を抜粋
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { articles } };
};

export default function ArticleLiving({ articles }: Props) {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <>
      {/* ─ global nav ─────────────────────────── */}
      <Navigation />

      {/* ─ page header ────────────────────────── */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Typewriter
            onInit={(tw) => tw.typeString('Living').start()}
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
          />
        </h1>
        <Image
          src="/images/kanji_living.png"
          alt="Kanji for living"
          width={150}
          height={150}
          className={styles.kanji}
          priority
        />
      </header>

      {/* ─ featured article ────────────────────── */}
      {featured && (
        <section className={styles.featured}>
          <h2 className={styles.featuredHeadline}>Featured Article</h2>

          <Link
            href={`/article/living/${featured.slug}`}
            className={styles.featuredBody}
          >
            <Image
              src={featured.hero}
              alt={featured.title}
              width={180}
              height={180}
              className={styles.featuredImg}
            />
            <div className={styles.featuredContent}>
              <p className={styles.featuredText}>{featured.title}</p>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            </div>
          </Link>
        </section>
      )}

      {/* ─ article list ───────────────────────── */}
      <section className={styles.articleGridSection}>
        <h2 className={styles.articlesHeadline}>Articles</h2>

        <div className={styles.articleGridWrapper}>
          <div className={styles.articleGrid}>
            {others.map((a) => (
              <Link key={a.slug} href={`/article/living/${a.slug}`} className={styles.card}>
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