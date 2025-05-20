import { FormEvent } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import Navigation from '../components/Navigation';
import styles from '../styles/Contact.module.css';


export default function Contact() {
    /* 送信時のダミー処理 */
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Thank you!  (実際の送信処理を実装してください)');
    };

    return (
        <div>
            <Navigation />

            <main className="container">
                <h1 className={styles.mainTitle}>Contact</h1>
                <div className={styles.mainTitleLine} />

                {/* ---------- メイン 2 カラム ---------- */}
                <section className={styles.contactRow}>
                    {/* === 左側：イメージ + 連絡先/SNS === */}
                    <div className={styles.leftPane}>
                        <img
                            src="/images/contact.jpg" /* ← 好きな画像に差し替え */
                            alt="Abstract curved surface"
                            className={styles.leftImage}
                        />

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese‑aesthetics‑style.com
                            </p>

                            <div className={styles.social}>
                                <a href="#" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* === 右側：フォーム === */}
                    <div className={styles.formWrapper}>
                        <h2 className={styles.formHeading}>Contact Form</h2>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label>
                                First name
                                <input type="text" placeholder="Jane" required />
                            </label>

                            <label>
                                Last name
                                <input type="text" placeholder="Smitherton" required />
                            </label>

                            <label>
                                Email address
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    required
                                />
                            </label>

                            <label>
                                Your message
                                <textarea placeholder="Enter your question or message" rows={6} />
                            </label>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
