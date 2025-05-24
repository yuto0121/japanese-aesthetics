/* components/Navigation.tsx */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* ロゴ */}
            <Link href="/" className={styles.logo} onClick={() => { setOpen(false); setSearchOpen(false); }}>
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
                    <input
                        type="search"
                        placeholder="Search…"
                        autoFocus
                    />
                </form>
            )}

            {/* ハンバーガーボタン */}
            <button
                className={`${styles.burger} ${open ? styles.open : ''}`}
                onClick={() => { setOpen(!open); setSearchOpen(false); }}
                aria-label="メニューを開く"
                aria-expanded={open}
            >
                <span />
                <span />
                <span />
            </button>

            {/* ドロワーメニュー */}
            <nav className={`${styles.drawer} ${open ? styles.show : ''}`}>
                <ul className={styles.menu}>
                    <li><Link href="/" onClick={() => setOpen(false)}>HOME</Link></li>
                    <li><Link href="/about" onClick={() => setOpen(false)}>ABOUT US</Link></li>
                    <li><Link href="/article" onClick={() => setOpen(false)}>ARTICLE</Link></li>
                    <li><Link href="/article/theEssenceOfJapan" onClick={() => setOpen(false)}>THE ESSENCE OF JAPAN</Link></li>
                    <li><Link href="/article/fashion" onClick={() => setOpen(false)}>FASHION</Link></li>
                    <li><Link href="/article/cuisine" onClick={() => setOpen(false)}>CUISINE</Link></li>
                    <li><Link href="/article/living" onClick={() => setOpen(false)}>LIVING</Link></li>
                    <li><Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
