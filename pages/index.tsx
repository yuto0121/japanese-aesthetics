import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const categories = [
  { title: "Aesthetic Concepts", slug: "concepts", description: "Explore unique Japanese aesthetics like Wabi-Sabi and Yūgen" },
  { title: "Cultural Practices", slug: "practices", description: "Experience beauty through tea ceremony and ikebana" },
  { title: "Architecture & Spaces", slug: "architecture", description: "Discover traditional space design like Shoin-zukuri and tea rooms" },
  { title: "Modern Applications", slug: "modern", description: "Applications in product design and interior decoration" },
  { title: "Resources", slug: "resources", description: "Glossary, references, and useful links" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Japanese-Aesthetics</title>
        <meta name="description" content="Discover the essence of Japanese aesthetics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Japanese‑Aesthetics</h1>
        <nav className={styles.nav}>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/${cat.slug}`} className={styles.navlink}>
              {cat.title}
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Bringing Japanese Aesthetics to Your Daily Life</h2>
        </section>

        <section className={styles.grid}>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/${cat.slug}`} className={styles.card}>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Japanese‑Aesthetics
      </footer>
    </div>
  );
}