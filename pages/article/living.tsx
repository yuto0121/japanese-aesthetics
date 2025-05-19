import Image from 'next/image';
import Navigation from '../../components/Navigation';
import styles from '../styles/ArticleLiving.module.css';

export default function ArticleLiving() {
    return (
        <div>
            <Navigation />
            <main className="container">
                <h1 className={styles.mainTitle}>Living</h1>
                <div className={styles.mainTitleLine} />

                <Image
                    src="/images/living_article.png"
                    alt="Living"
                    className={styles.aboutImage}
                    width={1920}
                    height={500}
                    priority
                />

                <section>
                    <p>
                        Experience spaces shaped by wood, light, and a mindful embrace of empty space.
                        Ancient joinery withstands earthquakes without nails, while tatami, shoji,
                        and tokonoma define harmony at home.
                    </p>
                </section>
            </main>
        </div>
    );
}
