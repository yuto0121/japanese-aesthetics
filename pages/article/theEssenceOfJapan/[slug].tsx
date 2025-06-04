/* eslint-disable @typescript-eslint/consistent-type-definitions */
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import styles from '../../../styles/ArticleSlug.module.css';

type Props = {
  title: string;
  date: string;
  hero: string;
  tags: string[];
  html: string;
};

const ESSENCE_DIR = path.join(process.cwd(), 'content', 'theEssenceOfJapan');

export const getStaticPaths: GetStaticPaths = () => {
  const paths = fs
    .readdirSync(ESSENCE_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ params: { slug: file.replace(/\.md$/, '') } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string;
  const raw = fs.readFileSync(path.join(ESSENCE_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(html, {
      sanitize: false,
      handlers: {
        image: (h, node) => {
          const props = {
            src: node.url,
            alt: node.alt || '',
            width: 800,
            height: 450,
            className: styles.markdownImg,
          };
          return h(node.position, 'img', props);
        },
      },
    })
    .process(content);
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

export default function EssenceArticle({ title, date, hero, tags, html: bodyHtml }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | The Essence of Japan`}</title>
        <meta name="description" content={`${title} – Japanese aesthetic concept`} />
      </Head>

      <article className={styles.wrapper}>
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

        <p className={styles.meta}>{date} ・ {tags.join(' / ')}</p>

        <section
          className={styles.articleBody}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </article>

    </>
  );
}
