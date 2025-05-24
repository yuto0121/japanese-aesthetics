/* components/Navigation.tsx */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  /**
   * drawerOpen   : ハンバーガーメニューの開閉
   * searchOpen   : 検索バーの開閉
   * articleOpen  : ARTICLE サブメニューの開閉
   */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);

  // すべて閉じるユーティリティ
  const closeAll = () => {
    setDrawerOpen(false);
    setSearchOpen(false);
    setArticleOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* ロゴ */}
      <Link href="/" className={styles.logo} onClick={closeAll}>
        <Image src="/images/home.png" alt="Home" fill priority sizes="40px" />
      </Link>

      {/* 検索アイコン */}
      <button
        className={styles.searchToggle}
        onClick={() => setSearchOpen(!searchOpen)}
        aria-label="検索を開く"
        aria-expanded={searchOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      {/* 検索バー（トグル表示） */}
      {searchOpen && (
        <form role="search" className={styles.search} onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="Search…" autoFocus />
        </form>
      )}

      {/* ハンバーガーボタン */}
      <button
        className={`${styles.burger} ${drawerOpen ? styles.open : ''}`}
        onClick={() => {
          setDrawerOpen(!drawerOpen);
          setSearchOpen(false);
        }}
        aria-label="メニューを開く"
        aria-expanded={drawerOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ドロワーメニュー */}
      <nav className={`${styles.drawer} ${drawerOpen ? styles.show : ''}`} aria-hidden={!drawerOpen}>
        <ul className={styles.menu}>
          <li>
            <Link href="/" onClick={closeAll}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeAll}>
              ABOUT&nbsp;US
            </Link>
          </li>

          {/* ARTICLE 親項目 */}
          <li>
            <button
              className={styles.toggleButton}
              onClick={() => setArticleOpen(!articleOpen)}
              aria-expanded={articleOpen}
            >
              ARTICLE
            </button>
            {/* サブメニュー */}
            <ul
              className={`${styles.subMenu} ${articleOpen ? styles.openSub : ''}`}
              aria-hidden={!articleOpen}
            >
              <li>
                <Link href="/article/theEssenceOfJapan" onClick={closeAll}>
                  The&nbsp;Essence&nbsp;of&nbsp;Japan
                </Link>
              </li>
              <li>
                <Link href="/article/cuisine" onClick={closeAll}>
                  Cuisine
                </Link>
              </li>
              <li>
                <Link href="/article/fashion" onClick={closeAll}>
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/article/living" onClick={closeAll}>
                  Living
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact" onClick={closeAll}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
