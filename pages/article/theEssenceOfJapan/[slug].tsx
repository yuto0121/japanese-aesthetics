import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import Navigation from '../../../components/Navigation';
import styles from '../../../styles/ArticleConceptSlug.module.css';

/**
 * スラッグ → メタ情報
 * （キーは必ず camelCase／Markdown ファイル名と一致させる）
 */
const CONCEPT_META = {
    wabiSabi: { no: '01', title: 'wabi–sabi', hero: '/images/concept/hero_wabi-sabi.jpg' },
    inEi: { no: '02', title: 'in–ei', hero: '/images/concept/hero_in-ei.jpg' },
    iki: { no: '03', title: 'iki', hero: '/images/concept/hero_iki.jpg' },
    monoNoAware: { no: '04', title: 'mono no aware', hero: '/images/concept/hero_mono-no-aware.jpg' },
    miyabi: { no: '05', title: 'miyabi', hero: '/images/concept/hero_miyabi.jpg' },
    ma: { no: '06', title: 'ma', hero: '/images/concept/hero_ma.jpg' },
    yohaku: { no: '07', title: 'yohaku', hero: '/images/concept/hero_yohaku.jpg' },
    yoin: { no: '08', title: 'yoin', hero: '/images/concept/hero_yoin.jpg' },
    kintsugi: { no: '09', title: 'kintsugi', hero: '/images/concept/hero_kintsugi.jpg' },
    yugen: { no: '10', title: 'yūgen', hero: '/images/concept/hero_yugen.jpg' },
} as const;

type Slug = keyof typeof CONCEPT_META;

type Props = {
    slug: Slug;
    mdxSource: MDXRemoteSerializeResult;
};

export default function ConceptPage({ slug, mdxSource }: Props) {
    const { title, hero } = CONCEPT_META[slug];

    return (
        <>
            <Navigation />

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

            <main className={styles.articleBody}>
                <MDXRemote {...mdxSource} />
            </main>

            <div className={styles.backWrap}>
                <Link href="/article/theEssenceOfJapan" className={styles.navBtn}>
                    ← Back to The Essence of Japan
                </Link>
            </div>
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

    // Markdown ファイル: /content/<slug>.md
    const mdPath = path.join(process.cwd(), 'content', `${slug}.md`);
    const raw = fs.readFileSync(mdPath, 'utf8');
    const { content } = matter(raw);
    const mdxSource = await serialize(content);

    return { props: { slug, mdxSource } };
};
