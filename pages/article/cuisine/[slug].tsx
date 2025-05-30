// import fs from 'fs';
// import matter from 'gray-matter';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';
// import path from 'path';
// import { remark } from 'remark';
// import html from 'remark-html';
// import Navigation from '../../../components/Navigation';
// import styles from '../../../styles/ArticleSlug.module.css';

// type Props = {
//   title: string;
//   date: string;
//   hero: string;
//   tags: string[];
//   html: string;
// };

// const CUISINE_DIR = path.join(process.cwd(), 'content', 'cuisine');

// export const getStaticPaths: GetStaticPaths = () => {
//   const paths = fs
//     .readdirSync(CUISINE_DIR)
//     .filter((file) => file.endsWith('.md'))
//     .map((file) => ({
//       params: { slug: file.replace(/\.md$/, '') },
//     }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const slug = params!.slug as string;
//   const raw = fs.readFileSync(path.join(CUISINE_DIR, `${slug}.md`), 'utf8');
//   const { data, content } = matter(raw);

//   const processed = await remark().use(html).process(content);
//   const htmlString = processed.toString();

//   return {
//     props: {
//       title: data.title as string,
//       date: data.date as string,
//       hero: data.hero as string,
//       tags: data.tags as string[],
//       html: htmlString,
//     },
//   };
// };

// export default function CuisineArticle({
//   title,
//   date,
//   hero,
//   tags,
//   html: bodyHtml,
// }: Props) {
//   return (
//     <>
//       {/* ─ global nav ─────────────────────────── */}
//       <Navigation />

//       {/* ─ hero ───────────────────────────────── */}
//       <header className={styles.header}>
//         <h1 className={styles.title}>{title}</h1>
//         <Image
//           src={hero}
//           alt={`${title} hero`}
//           width={200}
//           height={200}
//           className={styles.kanji}
//           priority
//         />
//         <p className={styles.meta}>
//           {date} ・ {tags.join(' / ')}
//         </p>
//       </header>

//       {/* ─ article body ───────────────────────── */}
//       <main
//         className={styles.articleBody}
//         dangerouslySetInnerHTML={{ __html: bodyHtml }}
//       />

//       {/* ─ back link ──────────────────────────── */}
//       <div className={styles.backWrap}>
//         <Link href="/article/cuisine" className={styles.navBtn}>
//           ← Back to Cuisine
//         </Link>
//       </div>
//     </>
//   );
// }


/* ===============================
   CuisineArticle.tsx (updated)
   =============================== */
   import fs from 'fs';
   import matter from 'gray-matter';
   import { GetStaticPaths, GetStaticProps } from 'next';
   import Head from 'next/head';
   import Image from 'next/image';
   import Link from 'next/link';
   import path from 'path';
   import { remark } from 'remark';
   import html from 'remark-html';
   import Navigation from '../../../components/Navigation';
   import styles from '../../../styles/ArticleSlug.module.css';
   
   type Props = {
     title: string;
     date: string;
     hero: string;
     tags: string[];
     html: string;
   };
   
   const CUISINE_DIR = path.join(process.cwd(), 'content', 'cuisine');
   
   export const getStaticPaths: GetStaticPaths = () => {
     const paths = fs
       .readdirSync(CUISINE_DIR)
       .filter((file) => file.endsWith('.md'))
       .map((file) => ({
         params: { slug: file.replace(/\.md$/, '') },
       }));
   
     return { paths, fallback: false };
   };
   
   export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
     const slug = params!.slug as string;
     const raw = fs.readFileSync(path.join(CUISINE_DIR, `${slug}.md`), 'utf8');
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
   
   export default function CuisineArticle({
     title,
     date,
     hero,
     tags,
     html: bodyHtml,
   }: Props) {
     return (
       <>
         <Head>
           <title>{`${title} | Cuisine`}</title>
           <meta name="description" content={`${title} – Japanese cuisine article`} />
         </Head>
   
         {/* ─ global nav ─────────────────────────── */}
         <Navigation />
   
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
   
           {/* ─ back link ────────────────────────── */}
           <div className={styles.backWrap}>
             <Link href="/article/cuisine" className={styles.navBtn}>
               ← Back to Cuisine
             </Link>
           </div>
         </article>
       </>
     );
   }