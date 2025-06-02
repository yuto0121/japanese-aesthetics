import { FC } from "react";
import styles from "../styles/Footer.module.css";

const links = [
    { href: "/article", label: "Articles" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
];

const Footer: FC = () => (
    <>
        <div className={styles.footerLine} />
        <footer className={styles.footer}>
            <nav aria-label="Footer">
                <ul className={styles.navList}>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} className={styles.link}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    </>
);

export default Footer;