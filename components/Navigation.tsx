import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/article">ARTICLE</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            <div className={styles.navLine}></div>
        </>
    );
};

export default Navigation; 