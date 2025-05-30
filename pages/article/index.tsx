// pages/article/index.tsx
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import Typewriter from 'typewriter-effect';
import { GetStaticProps } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Navigation from '../../components/Navigation';
import styles from '../../styles/Article.module.css';

/* ──────────────────
   型
────────────────── */
type ArticleMeta = {
  slug: string;
  title: string;
  hero: string;      // 画像パス
  tags: string[];
  date: string;      // YYYY-MM-DD
};

type Category = {
  label: string;     // 表示名
  dir: string;       // content 下のフォルダ名
  href: string;      // ページ先頭へのリンク
  articles: ArticleMeta[];
};

type Props = { categories: Category[] };

/* ──────────────────
   取得対象カテゴリ
   （フォルダ名とページのルートを合わせておく）
────────────────── */
const CATEGORY_PRESETS = [
  { label: 'The Essence of Japan', dir: 'theEssenceOfJapan', href: '/article/theEssenceOfJapan' },
  { label: 'Fashion',               dir: 'fashion',          href: '/article/fashion' },
  { label: 'Cuisine',               dir: 'cuisine',          href: '/article/cuisine' },
  { label: 'Living',                dir: 'living',           href: '/article/living' },
];

/* ──────────────────
   静的データ取得
────────────────── */
export const getStaticProps: GetStaticProps<Props> = () => {
  const categories: Category[] = CATEGORY_PRESETS.map(({ label, dir, href }) => {
    const folder = path.join(process.cwd(), 'content', dir);

    // そのカテゴリ配下の .md を読む
    const articles: ArticleMeta[] = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const raw = fs.readFileSync(path.join(folder, file), 'utf8');
        const { data } = matter(raw);

        return {
          slug,
          title: data.title as string,
          hero: data.hero as string,
          tags: data.tags as string[],
          date: data.date as string,
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1)); // 新しい順

    return { label, dir, href, articles };
  });

  return { props: { categories } };
};

/* ──────────────────
   React コンポーネント
────────────────── */
export default function ArticleIndex({ categories }: Props) {
  return (
    <>
      <Navigation />

      <main className="container">
        <h1 className={styles.mainTitle}>
          <Typewriter
            onInit={(tw) => tw.typeString('Article').start()}
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
          />
        </h1>
        <div className={styles.mainTitleLine} />
        
        {categories.map((cat) => (
          <section key={cat.dir} className={styles.categorySection}>
            {/* 見出し */}
            <h2 className={styles.categoryTitle}>
              <Link href={cat.href}>{cat.label}</Link>
            </h2>

            {/* カテゴリ内スライダー */}
            <Swiper
              modules={[SwiperNavigation, A11y]}
              navigation
              loop
              speed={600}
              slidesPerView={1}
              className={styles.categorySwiper}
            >
              {cat.articles.map((a) => (
                <SwiperSlide key={a.slug}>
                  <div className={styles.slide}>
                    {/* 画像 */}
                    <div className={styles.slideImageWrap}>
                      <Image
                        src={a.hero}
                        alt={a.title}
                        fill
                        className={styles.slideImage}
                        priority
                      />
                    </div>

                    {/* テキスト */}
                    <div className={styles.slideTextBox}>
                      <span className={styles.slideMeta}>
                        {a.tags.join(', ').toUpperCase()}
                      </span>
                      <Link
                        href={`${cat.href}/${a.slug}`}
                        className={styles.slideTitleLink}
                      >
                        <h3 className={styles.slideTitle}>{a.title}</h3>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </main>
    </>
  );
}
