import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Article.module.css';

/* タグ候補 */
const TAGS = [
    'wabi-sabi',
    'matcha',
    'tatami',
    'kintsugi',
    'fermentation',
    'textiles',
    'sashiko',
    'umami',
    'indigo',
    'joinery',
    'ikebana',
    'koi',
];

/* プレビュー用データ */
const PREVIEWS = [
    {
        title: 'Fashion',
        subcats: ['Textiles', 'Garments', 'Brands'],
        href: '/article/fashion',
        image: '/images/article/fashion.jpg',
        alt: 'People crossing a street',
    },
    {
        title: 'Cuisine',
        subcats: ['One-Dish Meals', 'Seasonal Sweets', 'Tea Ceremony'],
        href: '/article/cuisine',
        image: '/images/article/cuisine.jpg',
        alt: 'Japanese chef preparing food',
    },
    {
        title: 'Living',
        subcats: ['Architecture', 'Interior', 'Lighting'],
        href: '/article/living',
        image: '/images/article/living.jpg',
        alt: 'Modern architectural ribs',
    },
];

export default function Article() {
    /* 検索欄の state */
    const [query, setQuery] = useState('');

    /* タグクリックで検索欄に追加 */
    const handleTagClick = (tag: string) => {
        if (query.split(' ').includes(tag)) return;
        setQuery((prev) => (prev ? `${prev} ${tag}` : tag));
    };

    return (
        <div>
            <Navigation />

            <main className="container">
                {/* === 見出し === */}
                <h1 className={styles.mainTitle}>Article</h1>
                <div className={styles.mainTitleLine} />

                {/* === 検索＋タグ === */}
                <section className={styles.searchSection}>
                    {/* 検索欄 */}
                    <div className={styles.searchBox}>
                        <label htmlFor="article-search" className={styles.searchLabel}>
                            [Search]
                        </label>
                        <input
                            id="article-search"
                            type="text"
                            placeholder="Type keywords…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    {/* タグ一覧 */}
                    <div className={styles.tagsBox}>
                        <h3 className={styles.tagsTitle}>Popular&nbsp;Tags:</h3>
                        <ul className={styles.tagsList}>
                            {TAGS.map((tag) => (
                                <li key={tag}>
                                    <button
                                        type="button"
                                        onClick={() => handleTagClick(tag)}
                                        className={styles.tagButton}
                                    >
                                        [{tag}]
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* === プレビュー行をループで生成 === */}
                {PREVIEWS.map(({ title, subcats, href, image, alt }) => (
                    <section key={title} className={styles.previewRow}>
                        {/* 左カラム：テキスト */}
                        <div className={styles.previewTextBox}>
                            <div>
                                <h2 className={styles.previewTitle}>{title}</h2>
                                <ul className={styles.previewSubcats}>
                                    {subcats.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* More details */}
                            <Link href={href} className={styles.previewLink}>
                                More&nbsp;details&nbsp;<span className={styles.arrow}>↘</span>
                            </Link>
                        </div>

                        {/* 右カラム：画像 */}
                        <div className={styles.previewImageWrap}>
                            <img src={image} alt={alt} className={styles.previewImage} />
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}
