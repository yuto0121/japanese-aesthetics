import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const router = useRouter();

  /* ────────── UI state ────────── */
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);
  const [searchTerm,  setSearchTerm]  = useState('');

  /* すべて閉じるユーティリティ（ハンバーガーは hover 制御に変更） */
  const closeAll = () => {
    setSearchOpen(false);
    setArticleOpen(false);
  };

  /* 検索 submit */
  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    closeAll();
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header className={styles.header}>
      {/* ─ logo ───────────────────── */}
      <Link href="/" className={styles.logo} onClick={closeAll}>
        <Image src="/images/home.png" alt="Home" fill priority sizes="40px" />
      </Link>

      {/* ─ search icon ────────────── */}
      <button
        className={styles.searchToggle}
        onClick={() => setSearchOpen(!searchOpen)}
        aria-label="検索を開く"
        aria-expanded={searchOpen}
      >
        {/* loupe */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      {/* ─ search bar ─────────────── */}
      {searchOpen && (
        <form role="search" className={styles.search} onSubmit={onSearch}>
          <input
            type="search"
            placeholder="Search…"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      )}

      {/* ─ hamburger + horizontal menu (hover) ─ */}
      <div className={styles.burgerWrapper}>
        {/* ハンバーガーは見た目だけ。hover/focus でメニューを開く */}
        <button
          className={styles.burger}
          aria-label="メニューを開く"
          aria-haspopup="true"
        >
          <span /><span /><span />
        </button>

        <nav className={styles.drawer}>
          <ul className={styles.menu}>
            <li><Link href="/" onClick={closeAll}>HOME</Link></li>
            <li><Link href="/about" onClick={closeAll}>ABOUT&nbsp;US</Link></li>

            {/* ARTICLE 親項目（サブメニューは従来どおりクリックで展開） */}
            <li>
              <button
                className={styles.toggleButton}
                onClick={() => setArticleOpen(!articleOpen)}
                aria-expanded={articleOpen}
              >
                ARTICLE
              </button>
              <ul
                className={`${styles.subMenu} ${articleOpen ? styles.openSub : ''}`}
                aria-hidden={!articleOpen}
              >
                <li><Link href="/article/theEssenceOfJapan" onClick={closeAll}>The&nbsp;Essence&nbsp;of&nbsp;Japan</Link></li>
                <li><Link href="/article/cuisine"            onClick={closeAll}>Cuisine</Link></li>
                <li><Link href="/article/fashion"            onClick={closeAll}>Fashion</Link></li>
                <li><Link href="/article/living"             onClick={closeAll}>Living</Link></li>
              </ul>
            </li>

            <li><Link href="/contact" onClick={closeAll}>CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
