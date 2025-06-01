import { FC } from "react";

const links = [
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Teams & Condition" },
];

const Footer: FC = () => (
    <footer className="border-t border-black">
        <nav aria-label="Footer" className="max-w-7xl mx-auto px-4">
            <ul className="grid grid-cols-5 text-center py-8 font-semibold text-xl">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="hover:opacity-70 transition-opacity duration-150"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </footer>
);

export default Footer;