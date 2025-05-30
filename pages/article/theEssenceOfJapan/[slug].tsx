/* pages/article/theEssenceOfJapan/[slug].tsx
   =============================== */
   import fs from "fs";
   import matter from "gray-matter";
   import { GetStaticPaths, GetStaticProps } from "next";
   import Head from "next/head";
   import Image from "next/image";
   import path from "path";
   import { remark } from "remark";
   import html from "remark-html";
   import Navigation from "../../../components/Navigation";
   import styles from "../../../styles/ArticleSlug.module.css";
   
   type Props = {
     slug: string;
     title: string;
     hero: string;
     no?: string;
     date?: string;
     tags: string[];
     html: string;
   };
   
   const CONCEPT_DIR = path.join(
     process.cwd(),
     "content",
     "theEssenceOfJapan"
   );
   
   /* ---------- Static Generation ---------- */
   
   export const getStaticPaths: GetStaticPaths = () => {
     const paths = fs
       .readdirSync(CONCEPT_DIR)
       .filter((f) => f.endsWith(".md"))
       .map((f) => ({ params: { slug: f.replace(/\.md$/, "") } }));
   
     return { paths, fallback: false };
   };
   
   export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
     const slug = params!.slug as string;
     const raw = fs.readFileSync(
       path.join(CONCEPT_DIR, `${slug}.md`),
       "utf8"
     );
     const { data, content } = matter(raw);
     const processed = await remark().use(html).process(content);
   
     return {
       props: {
         slug,
         title: data.title as string,
         hero: data.hero as string,
         no: data.no as string | undefined,
         date: data.date as string | undefined,
         tags: (data.tags as string[]) ?? [],
         html: processed.toString(),
       },
     };
   };
   
   /* ---------- Page Component ---------- */
   
   export default function ConceptArticle({
     title,
     hero,
     no,
     date,
     tags,
     html: bodyHtml,
   }: Props) {
     return (
       <>
         <Head>
           <title>{`${title} | The Essence of Japan`}</title>
           <meta
             name="description"
             content={`${title} – Japanese aesthetic concept`}
           />
         </Head>
   
         <Navigation />
   
         <article className={styles.wrapper}>
           {/* ─ header ─────────────────────────── */}
           <header className={styles.header}>
             <h1 className={styles.title}>
               {no ? `${no}. ` : ""}
               {title}
             </h1>
             <Image
               src={hero}
               alt={`${title} hero`}
               width={200}
               height={200}
               className={styles.kanji}
               priority
             />
           </header>
   
           {/* ─ meta ───────────────────────────── */}
           {(date || tags.length) && (
             <p className={styles.meta}>
               {date ?? ""}{date && tags.length ? " ・ " : ""}
               {tags.join(" / ")}
             </p>
           )}
   
           {/* ─ body ───────────────────────────── */}
           <section
             className={styles.articleBody}
             dangerouslySetInnerHTML={{ __html: bodyHtml }}
           />
         </article>
       </>
     );
   }
   