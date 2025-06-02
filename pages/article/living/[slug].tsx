// ─────────────────────────────────────────────────────────────
// pages/article/living/[slug].tsx
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import styles from '../../../styles/ArticleSlug.module.css';

type PropsLiving = {
  title: string;
  date: string;
  hero: string;
  tags: string[];
  html: string;
};

const LIVING_DIR = path.join(process.cwd(), 'content', 'living');

export const getStaticPaths: GetStaticPaths = () => {
  const paths = fs
    .readdirSync(LIVING_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ params: { slug: file.replace(/\.md$/, '') } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PropsLiving> = async ({ params }) => {
  const slug = params!.slug as string;
  const raw = fs.readFileSync(path.join(LIVING_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlString = processed.toString();

  return {
    props: {
      title: data.title as string,
      date: data.date as string,
      hero: data.hero as string,
      tags: data.tags as string[],
      html: htmlString,
    },
  };
};

export default function LivingArticle({ title, date, hero, tags, html: bodyHtml }: PropsLiving) {
  return (
    <>
      <Head>
        <title>{`${title} | Living`}</title>
        <meta name="description" content={`${title} – Japanese living article`} />
      </Head>

      {/* ─ article wrapper ────────────────────── */}
      <article className={styles.wrapper}>
        {/* ─ header ──────────────────────────── */}
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <Image
            src={hero}
            alt={`${title} hero`}
            width={200}
            height={200}
            className={styles.kanji}
            priority
          />
        </header>

        {/* ─ meta ─────────────────────────────── */}
        <p className={styles.meta}>{date} ・ {tags.join(' / ')}</p>

        {/* ─ body ─────────────────────────────── */}
        <section
          className={styles.articleBody}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </article>

    </>
  );
}