// // pages/article/index.tsx
// import Link from 'next/link';
// import { useState } from 'react';
// import Typewriter from 'typewriter-effect';
// import Navigation from '../../components/Navigation';
// import styles from '../../styles/Article.module.css';

// /* タグ候補 */
// const TAGS = [
//     'wabi-sabi',
//     'matcha',
//     'tatami',
//     'kintsugi',
//     'fermentation',
//     'textiles',
//     'sashiko',
//     'umami',
//     'indigo',
//     'joinery',
//     'ikebana',
//     'koi',
// ];

// /* 概念一覧 */
// const CONCEPTS = [
//     { label: 'wabi–sabi', slug: 'wabiSabi' },
//     { label: 'mono no aware', slug: 'monoNoAware' },
//     { label: 'iki', slug: 'iki' },
// ];

// /* プレビュー用データ */
// const PREVIEWS = [
//     {
//         title: 'Fashion',
//         subcats: ['Textiles', 'Garments', 'Brands'],
//         href: '/article/fashion',
//         image: '/images/article/fashion.jpg',
//         alt: 'People crossing a street',
//     },
//     {
//         title: 'Cuisine',
//         subcats: ['One-Dish Meals', 'Seasonal Sweets', 'Tea Ceremony'],
//         href: '/article/cuisine',
//         image: '/images/article/cuisine.jpg',
//         alt: 'Japanese chef preparing food',
//     },
//     {
//         title: 'Living',
//         subcats: ['Architecture', 'Interior', 'Lighting'],
//         href: '/article/living',
//         image: '/images/article/living.jpg',
//         alt: 'Modern architectural ribs',
//     },
// ];

// const toSlug = (str: string) => {
//     const words = str
//         .trim()
//         .replace(/-/g, ' ')
//         .replace(/[^a-zA-Z0-9\s]/g, '')
//         .split(/\s+/);
//     return words
//         .map((word, i) => {
//             const lower = word.toLowerCase();
//             if (i === 0) return lower;
//             return lower.charAt(0).toUpperCase() + lower.slice(1);
//         })
//         .join('');
// };

// export default function Article() {
//     const [query, setQuery] = useState('');
//     const handleTagClick = (tag: string) => {
//         if (query.split(' ').includes(tag)) return;
//         setQuery((prev) => (prev ? `${prev} ${tag}` : tag));
//     };

//     return (
//         <div>
//             <Navigation />

//             <main className="container">
//                 {/* === 見出し === */}
//                 <h1 className={styles.mainTitle}>
//                     <Typewriter
//                         onInit={(typewriter) => {
//                             typewriter
//                                 .typeString('Article')          // １行目
//                                 .start();                        // 実行
//                         }}
//                         options={{
//                             autoStart: true,  // マウント直後に始める
//                             loop: false,      // 一度きり
//                             delay: 100,       // 打鍵間隔
//                             deleteSpeed: 50,
//                             cursor: "",  // ※ループしないので無視されます
//                         }}
//                     />
//                 </h1>
//                 <div className={styles.mainTitleLine} />

//                 {/* === 検索＋タグ === */}
//                 <section className={styles.searchSection}>
//                     {/* 検索欄 */}
//                     <div className={styles.searchBox}>
//                         <label htmlFor="article-search" className={styles.searchLabel}>
//                             [Search]
//                         </label>
//                         <input
//                             id="article-search"
//                             type="text"
//                             placeholder="Type keywords…"
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             className={styles.searchInput}
//                         />
//                     </div>

//                     {/* タグ一覧 */}
//                     <div className={styles.tagsBox}>
//                         <h3 className={styles.tagsTitle}>Popular&nbsp;Tags:</h3>
//                         <ul className={styles.tagsList}>
//                             {TAGS.map((tag) => (
//                                 <li key={tag}>
//                                     <button
//                                         type="button"
//                                         onClick={() => handleTagClick(tag)}
//                                         className={styles.tagButton}
//                                     >
//                                         [{tag}]
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* === Concept セクション === */}
//                 <section
//                     className={styles.conceptSection}
//                     style={{ backgroundImage: "url('/images/article/essence_bg.jpg')" }}
//                 >
//                     <div className={styles.conceptInner}>
//                         <Link href="/article/theEssenceOfJapan" className={styles.previewLink}>
//                             <h2 className={styles.previewTitle}>The Essence of Japan</h2>
//                         </Link>

//                         <ul className={styles.conceptList}>
//                             {CONCEPTS.map(({ label, slug }) => (
//                                 <li key={slug}>
//                                     <Link href={`/article/theEssenceOfJapan/${slug}`} className={styles.conceptLink}>
//                                         {label}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>

//                         <Link href="/article/theEssenceOfJapan" className={styles.previewLink}>
//                             More&nbsp;details&nbsp;<span className={styles.arrow}>↘</span>
//                         </Link>
//                     </div>
//                 </section>

//                 {/* === プレビュー行をループで生成 === */}
//                 {PREVIEWS.map(({ title, subcats, href, image, alt }) => (
//                     <section key={title} className={styles.previewRow}>
//                         {/* 左カラム：テキスト */}
//                         <div className={styles.previewTextBox}>
//                             <div>
//                                 <Link href={href} className={styles.previewLink}>
//                                     <h2 className={styles.previewTitle}>{title}</h2>
//                                 </Link>
//                                 <ul className={styles.previewSubcats}>
//                                     {subcats.map((s) => (
//                                         <li key={s}>
//                                             <Link href={`${href}/${toSlug(s)}`} className={styles.subcatLink}>
//                                                 {s}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <Link href={href} className={styles.previewLink}>
//                                 More&nbsp;details&nbsp;<span className={styles.arrow}>↘</span>
//                             </Link>
//                         </div>

//                         {/* 右カラム：画像 */}
//                         <div className={styles.previewImageWrap}>
//                             <img src={image} alt={alt} className={styles.previewImage} />
//                         </div>
//                     </section>
//                 ))}
//             </main>
//         </div>
//     );
// }


// pages/article/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../../components/Navigation';

/* === slider === */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

/* プレビュー用データ（Fashion / Cuisine / Living） */
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

/* The Essence of Japan スライド */
const ESSENCE = {
  title: 'The Essence of Japan',
  subcats: ['wabi–sabi', 'mono no aware', 'iki'],
  href: '/article/theEssenceOfJapan',
  image: '/images/article/essence_bg.jpg',
  alt: 'Abstract image representing Japanese aesthetics',
};

/* スライダーに流し込む配列 */
const SLIDES = [ESSENCE, ...PREVIEWS];

/* kebab / 空白 → camelCase */
const toSlug = (str: string) =>
  str
    .trim()
    .replace(/-/g, ' ')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .map((word, i) => {
      const lower = word.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');

export default function Article() {
  const [query, setQuery] = useState('');

  const handleTagClick = (tag: string) => {
    if (query.split(' ').includes(tag)) return;
    setQuery((prev) => (prev ? `${prev} ${tag}` : tag));
  };

  return (
    <div>
      <Navigation />

      <main className="container">
        {/* === 見出し === */}
        <h1 className={styles.mainTitle}>
          <Typewriter
            onInit={(tw) =>
              tw
                .typeString('Article') // １行目
                .start()
            }
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
          />
        </h1>
        <div className={styles.mainTitleLine} />

        {/* === スライダー === */}
        <section className={styles.sliderWrapper}>
          <Swiper
            modules={[SwiperNavigation, A11y]}
            navigation
            loop
            speed={600}
            slidesPerView={1}
          >
            {SLIDES.map(({ title, href, image, alt, subcats }) => (
              <SwiperSlide key={title}>
                <div className={styles.slide}>
                  {/* 左側：画像 */}
                  <div className={styles.slideImageWrap}>
                    <Image src={image} alt={alt} fill className={styles.slideImage} priority />
                  </div>

                  {/* 右側：テキスト */}
                  <div className={styles.slideTextBox}>
                    <div>
                      <Link href={href} className={styles.slideLink}>
                        <h2 className={styles.slideTitle}>{title}</h2>
                      </Link>

                      {subcats && (
                        <ul className={styles.slideSubcats}>
                          {subcats.map((s) => (
                            <li key={s}>
                              <Link href={`${href}/${toSlug(s)}`} className={styles.subcatLink}>
                                {s}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <Link href={href} className={styles.slideLink}>
                      More&nbsp;details&nbsp;<span className={styles.arrow}>↘</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

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
      </main>
    </div>
  );
}
