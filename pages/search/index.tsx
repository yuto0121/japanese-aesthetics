/* pages/search/index.tsx */
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Search.module.css';

/* ───────────── Types ───────────── */
type Article = {
  title:    string;
  slug:     string;      // URL パス
  tags:     string[];
  content:  string;      // Markdown 本文（検索用）
};

type Props = {
  articles: Article[];
};

/* ────────── Build-time index ────────── */
export const getStaticProps: GetStaticProps<Props> = async () => {
  const ROOT = path.join(process.cwd(), 'content');
  const DIRS = [
    'theEssenceOfJapan',
    'cuisine',
    'fashion',
    'living',
  ];

  const articles: Article[] = [];

  for (const dir of DIRS) {
    const fullDir = path.join(ROOT, dir);
    const files   = fs.readdirSync(fullDir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const raw           = fs.readFileSync(path.join(fullDir, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = `/article/${dir}/${file.replace(/\.md$/, '')}`;

      articles.push({
        title:   (data.title as string) ?? file.replace(/\.md$/, ''),
        slug,
        tags:    (data.tags as string[]) ?? [],
        content,                    // Markdown のままでも十分検索可能
      });
    }
  }

  return { props: { articles } };
};

/* ───────────── Helpers ───────────── */
const scoreArticle = (a: Article, q: string) => {
  const lower = q.toLowerCase();
  let score = 0;
  if (a.title.toLowerCase().includes(lower))          score += 3;
  if (a.tags.some(t => t.toLowerCase().includes(lower))) score += 2;
  if (a.content.toLowerCase().includes(lower))        score += 1;
  return score;
};

/* ────────── Page Component ───────── */
export default function SearchPage({ articles }: Props) {
  const { query } = useRouter();
  const q = (query.q as string | undefined)?.trim() ?? '';

  const results = useMemo(() => {
    if (!q) return [];
    return articles
      .map(a => ({ ...a, score: scoreArticle(a, q) }))
      .filter(a => a.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [articles, q]);

  return (
    <>
      <Head>
        <title>{q ? `"${q}" – Search` : 'Search'}</title>
      </Head>

      <Navigation />

      <main className={styles.wrapper}>
        <h1 className={styles.heading}>Search</h1>
        {q ? (
          <>
            <p className={styles.meta}>
              {results.length} result{results.length !== 1 && 's'} for
              <strong> “{q}”</strong>
            </p>

            {results.length ? (
              <ul className={styles.list}>
                {results.map(({ slug, title, tags }) => (
                  <li key={slug} className={styles.item}>
                    <Link href={slug} className={styles.link}>{title}</Link>
                    {tags.length > 0 && (
                      <span className={styles.tags}>
                        {tags.join(' / ')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
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
