import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const categories = [
  { title: "Aesthetic Concepts", slug: "concepts", description: "侘び寂び、幽玄など日本独自の美学を学ぶ" },
  { title: "Cultural Practices", slug: "practices", description: "茶の湯、生け花など体験を通じた美" },
  { title: "Architecture & Spaces", slug: "architecture", description: "書院造り・茶室など空間デザイン" },
  { title: "Modern Applications", slug: "modern", description: "プロダクトデザインやインテリアへの応用" },
  { title: "Resources", slug: "resources", description: "用語集・文献・リンク集" },
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
          <h2>日本の美意識を、日常に。</h2>
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