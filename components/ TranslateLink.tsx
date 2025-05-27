'use client';                     // ← app/ ルーターの場合だけ必要。pages/ なら削除OK
import Link from 'next/link';
import styles from './TranslateLink.module.css';

interface TranslateLinkProps {
    href: string;
    /** 英語表示 */
    en: string;
    /** 日本語表示（hover 時） */
    jp: string;
    /** 既存クラスを追加したい場合 */
    className?: string;
}

const TranslateLink: React.FC<TranslateLinkProps> = ({
    href,
    en,
    jp,
    className = '',
}) => {
    return (
        <Link
            href={href}
            className={`${styles.translateLink} ${className}`}
            data-jp={jp}
        >
            <h1>{en}</h1>
        </Link>
    );
};

export default TranslateLink;
