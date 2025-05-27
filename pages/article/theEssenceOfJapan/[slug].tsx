/* eslint-disable @typescript-eslint/consistent-type-definitions */
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConceptSlug.module.css';

/**
 * スラッグ → メタ情報
 * （キーは camelCase／Markdown ファイル名と一致させる）
 */
const CONCEPT_META = {
    wabiSabi: { no: '01', title: 'wabi–sabi', hero: '/images/article/theEssenceOfJapan/hero_wabi-sabi.png' },
    inEi: { no: '02', title: 'in–ei', hero: '/images/article/theEssenceOfJapan/hero_in-ei.png' },
    iki: { no: '03', title: 'iki', hero: '/images/article/theEssenceOfJapan/hero_iki.png' },
    monoNoAware: { no: '04', title: 'mono no aware', hero: '/images/article/theEssenceOfJapan/hero_mono-no-aware.png' },
    miyabi: { no: '05', title: 'miyabi', hero: '/images/article/theEssenceOfJapan/hero_miyabi.png' },
    ma: { no: '06', title: 'ma', hero: '/images/article/theEssenceOfJapan/hero_ma.png' },
    yohaku: { no: '07', title: 'yohaku', hero: '/images/article/theEssenceOfJapan/hero_yohaku.png' },
    yoin: { no: '08', title: 'yoin', hero: '/images/article/theEssenceOfJapan/hero_yoin.png' },
    kintsugi: { no: '09', title: 'kintsugi', hero: '/images/article/theEssenceOfJapan/hero_kintsugi.png' },
    yugen: { no: '10', title: 'yūgen', hero: '/images/article/theEssenceOfJapan/hero_yugen.png' },
} as const;

type Slug = keyof typeof CONCEPT_META;
type Props = { slug: Slug; markdown: string };

export default function ConceptPage({ slug, markdown }: Props) {
    const { title, hero } = CONCEPT_META[slug];

    return (
        <>
            <Head>
                <title>{title} | The Essence of Japan</title>
                <meta name="description" content={`${title} – Japanese aesthetic concept`} />
            </Head>

            <Navigation />

            <article className={styles.wrapper}>
                {/* ---------- Header (title + hero kanji) ---------- */}
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

                {/* ---------- Markdown ---------- */}
                <section className={styles.articleBody}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        /* 画像に自前クラスを注入 */
                        components={{
                            img: ({ node, ...props }) => <img {...props} className={styles.markdownImg} />,
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </section>
            </article>
        </>
    );
}

/* ---------- Static Generation ---------- */

export const getStaticPaths: GetStaticPaths = () => ({
    paths: Object.keys(CONCEPT_META).map((slug) => ({ params: { slug } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const slug = params!.slug as Slug;
    const mdPath = path.join(process.cwd(), 'content/theEssenceOfJapan', `${slug}.md`);
    const markdown = fs.readFileSync(mdPath, 'utf8');

    return { props: { slug, markdown } };
};
