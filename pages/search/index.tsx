/* pages/search/index.tsx */
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import { useMemo } from 'react';
import styles from '../../styles/Search.module.css';

/* ───────────── Types ───────────── */
type Article = {
  title: string;
  slug: string;
  tags: string[];
  hero: string;
  content: string;
};
type Props = { articles: Article[] };

/* ────── Utility: 検索用正規化 ────── */
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')            // 例: yūgen → yugen
    .replace(/[\u0300-\u036f]/g, '') // ダイアクリティカルマーク除去
    .replace(/[-_\s]+/g, '');        // ハイフン / アンダー / 空白を無視

const scoreArticle = (a: Article, nq: string) => {
  let score = 0;
  if (normalize(a.title).includes(nq)) score += 4;
  if (a.tags.some(t => normalize(t).includes(nq))) score += 2;
  if (normalize(a.content).includes(nq)) score += 1;
  return score;
};

/* ─────────── Build-time index ─────────── */
export const getStaticProps: GetStaticProps<Props> = async () => {
  const ROOT = path.join(process.cwd(), 'content');
  const SECTIONS = ['theEssenceOfJapan', 'cuisine', 'fashion', 'living'];

  const articles: Article[] = [];

  for (const section of SECTIONS) {
    const dir = path.join(ROOT, section);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);

      articles.push({
        title: (data.title as string) ?? file.replace(/\.md$/, ''),
        slug: `/article/${section}/${file.replace(/\.md$/, '')}`,
        tags: (data.tags as string[]) ?? [],
        hero: (data.hero as string) ?? '/images/placeholder.png',
        content,
      });
    }
  }

  return { props: { articles } };
};

/* ───────────── Component ───────────── */
export default function SearchPage({ articles }: Props) {
  const { query } = useRouter();
  const q = (query.q as string | undefined)?.trim() ?? '';
  const nq = normalize(q);

  const results = useMemo(() => {
    if (!nq) return [];
    return articles
      .map(a => ({ ...a, score: scoreArticle(a, nq) }))
      .filter(a => a.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [articles, nq]);

  return (
    <>
      <Head>
        <title>{q ? `“${q}” | Search` : 'Search'}</title>
        <meta name="description" content="Search results" />
      </Head>

      <main className={styles.wrapper}>
        <h1 className={styles.mainTitle}>Search</h1>
        <div className={styles.mainTitleLine} />

        {q ? (
          <>
            <p className={styles.meta}>
              {results.length} result{results.length !== 1 && 's'} for “<strong>{q}</strong>”
            </p>

            {results.length ? (
              <section className={styles.grid}>
                {results.map(({ slug, hero, title, tags }) => (
                  <article key={slug} className={styles.card}>
                    <Link href={slug} className={styles.cardLink}>
                      <Image
                        src={hero}
                        alt={`${title} hero`}
                        width={400}
                        height={250}
                        className={styles.hero}
                        priority
                      />
                      <h2 className={styles.cardTitle}>{title}</h2>
                      {tags.length > 0 && (
                        <span className={styles.tags}>{tags.join(' / ')}</span>
                      )}
                    </Link>
                  </article>
                ))}
              </section>
            ) : (
              <p className={styles.nohit}>No matching articles found.</p>
            )}
          </>
        ) : (
          <p className={styles.noquery}>Enter a keyword in the search bar.</p>
        )}
      </main>
    </>
  );
}
