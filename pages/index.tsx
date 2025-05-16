import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const categories = [
  { title: "Aesthetic Concepts", slug: "concepts", description: "Explore unique Japanese aesthetics like Wabi-Sabi and Yūgen", image: "/images/concepts.jpg" },
  { title: "Cultural Practices", slug: "practices", description: "Experience beauty through tea ceremony and ikebana", image: "/images/practices.jpg" },
  { title: "Architecture & Spaces", slug: "architecture", description: "Discover traditional space design like Shoin-zukuri and tea rooms", image: "/images/architecture.jpg" },
  { title: "Modern Applications", slug: "modern", description: "Applications in product design and interior decoration", image: "/images/modern.jpg" },
  { title: "Resources", slug: "resources", description: "Glossary, references, and useful links", image: "/images/resources.jpg" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Japanese-Aesthetics</title>
        <meta name="description" content="Discover the essence of Japanese aesthetics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Japanese‑Aesthetics</h1>
        <div className={styles.menuWrapper}>
          <button
            className={styles.menuButton}
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
          {menuOpen && (
            <nav className={styles.menuNav}>
              {categories.map(cat => (
                <Link key={cat.slug} href={`/${cat.slug}`} className={styles.menuNavLink} onClick={() => setMenuOpen(false)}>
                  {cat.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Bringing Japanese Aesthetics to Your Daily Life</h2>
        </section>

        <section className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.slug} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <Link href={`/${cat.slug}`} className={styles.navlink} style={{ marginTop: '1rem', fontWeight: 600 }}>Learn more →</Link>
              </div>
              <div style={{ position: 'relative', width: '100%', maxWidth: '50vw', minWidth: 320, aspectRatio: '16/9' }}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0 10px 10px 0' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={cat.slug === 'concepts'}
                />
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Japanese‑Aesthetics
      </footer>
    </div>
  );
}